# sp_frame_delay

<Prototype>int sp_frame_delay(int active_sprite, int delay[-1])</Prototype>

`sp_frame_delay()` gets or sets the `delay` for the `active_sprite`. The `delay` is the number of milliseconds between frames of animation.

A `delay` of 0 will cause it to use the default specified in the `dink.ini`.

In practice, this is useful to make enemies appear to animate as fast as they move. If their `sp_speed` was set to some absurd amount, it would appear rather odd if their animation looked like they were making two steps every forty feet.

```c
// Excerpt from en-bong.c
void main( void )
{
    sp_brain(&current_sprite, 9);
    sp_speed(&current_sprite, 2);
    sp_frame_delay(&current_sprite, 30);
    // ....
}
```
