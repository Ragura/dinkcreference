# sp_exp

<Prototype>int sp_exp(int active_sprite, int experience_points[-1])</Prototype>

`sp_exp()` gets or sets the amount of `experience_points` for the `active_sprite`. If the player (or one of the player's missiles) is the last sprite to hit the active sprite before it dies, then the player will visibly receive `experience_points` experience for the kill.

This function only affects sprites with a `sp_brain` of 9, 10, or 16.
