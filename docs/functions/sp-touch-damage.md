# sp_touch_damage

<Prototype>int sp_touch_damage(int active_sprite, int touch_damage)</Prototype>

`sp_touch_damage()` sets the `touch_damage` value for the `active_sprite`. The `touch_damage` value is 0 by default.

If `touch_damage` is positive and the player touches the `active_sprite's` hardbox, it will cause up to `touch_damage` damage every 400 milliseconds (see [sp_notouch()](./sp-notouch.md)) and the `active_sprite's` `touch()` procedure will be executed.

Note that if `touch_damage` is set to -1 and the player touches the `active_sprite's` hardbox, the `active_sprite's` `touch()` procedure will be executed but no damage will be dealt. Due to an oversight in the engine, this `touch()` procedure could be executed many, many times a second. It is almost always a good idea to set touch_damage to 0 in the touch procedure and wait a few hundred milliseconds before setting it back to -1.

```c
// Dink steps on a fish
void main(void)
{
    sp_touch_damage(&current_sprite, -1);
}

void touch(void)
{
    // Disable touching
    sp_touch_damage(&current_sprite, 0);
    say("I'm stepping on a fish!", 1);
    wait(500);
    // Re-enable touching
    sp_touch_damage(&current_sprite, -1);
}
```
