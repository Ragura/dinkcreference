# get_next_sprite_with_this_brain

<Prototype small>int get_next_sprite_with_this_brain(int brain, int active_sprite_ignore, int active_sprite_start_with)</Prototype>

`get_next_sprite_with_this_brain()` returns the first active sprite number starting with `active_sprite_start_with` that is on the screen with `sp_brain` brain. It will not include `active_sprite_ignore`, so a sprite can check for other brains of its type if needed.

To make all sprites with brain 9 say 'Banana', try this:

```c
int &sprite = 0;
loop:
&sprite = get_next_sprite_with_this_brain(9, 0, &sprite);
if (&sprite > 0)
{
    say("Banana!", &sprite);
    //Increment &sprite so we start with the next sprite
    &sprite++;
    goto loop;
}
```
