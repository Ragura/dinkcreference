# get_sprite_with_this_brain

<Prototype>int get_sprite_with_this_brain(int brain, int active_sprite_ignore)</Prototype>

`get_sprite_with_this_brain()` returns the first sprite number that is on the screen with [sp_brain()](./sp-brain.md) brain. It will not include `active_sprite_ignore`, so a sprite can check for other brains of its type if needed. If no matching sprite is found, 0 is returned.

This is usually used in the die procedure on screens where enemies create [screenlock](./screenlock.md)s.

```c
// excerpt from en-pill1.c
if (get_sprite_with_this_brain(9, &current_sprite) == 0)
{
    //no more brain 9 monsters here, let's unlock the screen
    screenlock(0);
    playsound(43, 22050,0,0,0);
}
```
