# sp_nocontrol

<Prototype>bool sp_nocontrol(int active_sprite, bool no_control[-1])</Prototype>

`sp_nocontrol()` gets or sets the `no_control` value for the `active_sprite`. Note that this only affects sprites with a `sp_brain` of 1 (the player).

If `no_control` is 1, the player cannot move until the current animation sequence has finished.

The same behavior could be accomplished using [freeze()](./freeze.md) to stop the player before the sequence and [unfreeze()](./unfreeze.md) to allow the player to move again, but that requires the developer to know exactly how long the animation sequence will last. This is fairly easy to determine ([sp_frame_delay()](./sp-frame-delay.md) * number of frames), but it can change, and `sp_nocontrol()` is easier to use.

It is often used in weapon animation sequences.

```c
// Excerpt from item-sw1.c
&basehit = sp_dir(1, -1);
&basehit += 100; //100 is the 'base' for the hit animations, we just add the direction
sp_seq(1, &basehit);
sp_frame(1, 1); //reset seq to 1st frame
sp_kill_wait(1); //make sure dink will punch right away
sp_nocontrol(1, 1); //dink can't move until anim is done!
```

Note that this is also used internally when Dink is pushing an object.
