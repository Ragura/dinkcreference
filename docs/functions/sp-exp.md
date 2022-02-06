# sp_exp

<Prototype>int sp_exp(int active_sprite, int experience_points[-1])</Prototype>

`sp_exp()` gets or sets the amount of `experience_points` for the `active_sprite`. If the player is the last sprite to hit the active sprite before it dies, then the player will visibly receive `experience_points` experience for the kill.

It should also be noted that if a missile sprite is the last sprite to hit the active sprite before it dies, `experience_points` experience will also be given for the kill, regardless of where the missile sprite came from.

This function only affects sprites with a [sp_brain()](./sp-brain.md) of 9, 10, or 16.
