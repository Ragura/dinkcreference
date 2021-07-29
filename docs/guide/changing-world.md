# A changing world

## Visions

Visions are used to show or hide certain 'slices' of sprites. In the original game, Dink's house first appears fully intact. Different visions were used to make it appear on fire, and later, burned.

All that is necessary to change a vision is to change &vision in the `main()` procedure of a screen's base script.

For example, in the editor, if you set several sprites to vision 1, you have to set `&vision = 1` in the base script. And, of course, if you're using visions, you probably only want some sprites to appear depending on some plot variables.

```c
// base.c
void main(void)
{
    if (&story > 5)
    {
        &vision = 1;
    }
}
```

All sprites with vision 0 will be visible no matter what. Also note that the `&vision` variable must be changed before any `wait()`, `say_stop()`, or similar commands. Otherwise, it will not have any effect.

## Permanent changes

We want the world to remember changes. For instance, if Dink burned a tree, traveled to the other end of the world and then came back, the tree should still be burned. The same goes for taking items, breaking stuff and anything else you can think off.

How do we make the game remember? Yes, we could assign global variables to everything and have scripts kill off what has been taken and change stuff, but this would become very tedious. So we only do that in special spots where greater control is required. For little stuff, like keeping hearts we pick up from reappearing, we use another system. It still uses attached scripts to drive it, just no global variables.

The player's save game file is capable of storing one type, one sequence, and one frame for every editor sprite in the entire game. The type tells the draw_screen command to override what the map data says and do it different. For example, we have the barrels' script do this:

```c
int &hold = sp_editor_num(&current_sprite);

if (&hold != 0)
{
    // this [sprite] was placed by the editor, let's make the barrel stay flat
    editor_type(&hold, 3);
    editor_seq(&hold, 173);
    editor_frame(&hold, 6);

    // type means show this seq/frame combo as background in the future
}
```

See the `editor_type()` command for a full description of all types.

`editor_seq()` and `editor_frame()` store the sequence and frame of the new sprite to be displayed, for instance, a burned tree. The associated hardbox will be taken from the sprite's info if `editor_type` 4 or 5 is used.

You may wish to call a `draw_hard_sprite()` or `draw_hard_map()` afterward if hardness has been changed. One cool thing is the `editor_frame()` and `editor_seq()` commands can be used without changing the `editor_type`, allowing sprites to remember things about themselves.

```c
// memory.c
void main(void)
{
    //Get sprite's editor number.
    int &editor_sprite = sp_editor_num(&current_sprite);

    //Store sprite's editor_seq in &hit.
    int &hit = editor_seq(&editor_sprite, -1);

    //Store sprite's editor_frame in &talk.
    int &talk = editor_frame(&editor_sprite, -1);

    //Display current values.
    say("I've been hit &hit time(s) and talked to &talk time(s).", &current_sprite);
}

void hit(void)
{
    //Add one to &hit.
    &hit += 1;

    //Save new value in sprite's editor_seq.
    editor_seq(&editor_sprite, &hit);

    //Display current values.
    say("I've been hit &hit time(s) and talked to &talk time(s).", &current_sprite);
}

void talk(void)
{
    //Add one to &talk.
    &talk += 1;

    //Save new value in sprite's editor_frame.
    editor_frame(&editor_sprite, &talk);

    //Display current values.
    say("I've been hit &hit time(s) and talked to &talk time(s).", &current_sprite);
}
```

As long as `editor_type` is 0, changing the `editor_seq` and `editor_frame` will not change how the sprite is displayed.
