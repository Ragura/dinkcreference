# Screenlock

The original game used an interesting technique to [screenlock()](../functions/screenlock.md) screens. All enemies on a screen would have a [screenlock](../functions/screenlock.md)(1); command in their `main()`, and this in their `die()` procedure:

```c
if (get_sprite_with_this_brain(9, &current_sprite) == 0)
{
    // no more brain 9 monsters here, lets unlock the screen
    screenlock(0);
    playsound(43, 22050,0,0,0);
}
```

So, once all of the monsters on the screen were dead, the [screenlock()](../functions/screenlock.md) would be removed.

This worked well enough... but it is rather annoying to make special [screenlock()](../functions/screenlock.md)-versions of existing [enemies](./enemies.md) scripts.

There is a better way to do this. In the map editor, attach the following script to a normal sprite in the scene. Note that the sprite will be made invisible, so you don't just attach it to an existing tree or something.

```c
// scrnlk.c
void main(void)
{
    // Make this sprite invisible
    sp_nodraw(&current_sprite,1);

    // Screenlock the screen
    screenlock(1);

    // Loop forever, until there aren't any sprites with brains 9 and 10 on the screen
    loop:

    wait(250);
    if (get_sprite_with_this_brain(9, 0) == 0)
    {
        if (get_sprite_with_this_brain(10, 0) == 0)
        {
            // Remove the screenlock
            screenlock(0);
            playsound(43, 22050,0,0,0);
            kill_this_task();
        }
    }

    goto loop;
}
```

Then, if you have a screen with monsters on it, it will automatically perform a [screenlock()](../functions/screenlock.md) and remove the [screenlock()](../functions/screenlock.md) if all of the monsters are killed. That's as good as we can get, right?

In fact, we can do this a little better. Screenlocks can be a little bit annoying, so what if we had a [screenlock()](../functions/screenlock.md) that only appeared the first time the player entered the screen? Thanks to [editor_type()](../functions/editor-type.md), we can do this easily.

```c
// scrnlk1.c
void main(void)
{
    // Make this sprite invisible
    sp_nodraw(&current_sprite,1);
    // Screenlock the screen
    screenlock(1);

    // Loop forever, until there aren't any sprites with brains 9 and 10 on the screen
    loop:
    wait(250);
    if (get_sprite_with_this_brain(9, 0) == 0)
    {
        if (get_sprite_with_this_brain(10, 0) == 0)
        {
            // Remove the screenlock
            screenlock(0);
            playsound(43, 22050,0,0,0);
            // Kill this sprite forever, so there aren't any more screenlocks!
            int &editor_sprite = sp_editor_num(&current_sprite);
            if (&editor_sprite != 0)
            {
                editor_type(&editor_sprite, 1);
            }
            kill_this_task();
        }
    }
    goto loop;
}
```
