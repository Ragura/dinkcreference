# sp_disabled

<Prototype>bool sp_disabled(int active_sprite, bool disabled[-1])</Prototype>

`sp_disabled()` gets or sets the `disabled` status of the `active_sprite`.

When `disabled` is 1, the sprite is not visible, cannot move, and its brain does not function. Any script that is attached to the sprite will still run, though, and the sprite can still be interacted with (default procedures like hit and talk will work fine).

This is slightly different from `sp_nodraw()`, where the active sprite can move around and think freely, like a bird.
