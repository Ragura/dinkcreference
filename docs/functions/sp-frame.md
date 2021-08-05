# sp_frame

<Prototype>int sp_frame(int active_sprite, int frame[-1])</Prototype>

`sp_frame()` gets or sets the next animation `frame` for the `active_sprite`. In theory this sets the next frame of animation.

In function, it is a tad more complicated. Some brains (such as `sp_brain` 6) will reset the frame to 0 when they detect that the sequence has changed, and some (such as the pillbug brain) will reset the frame just because it woke up on the wrong side of the bed this morning.

So... use with caution. If it doesn't seem to be working as you'd expect, try adding a `wait(1)` before the `sp_frame()` command.

```c
// Play the second half of the explosion sequence
int &explosion = create_sprite(300, 200, 0, 167, 1);
// Start the animation sequence
sp_seq(&explosion, 167);
// Set the starting frame of animation
sp_frame(&explosion, 7);
```
