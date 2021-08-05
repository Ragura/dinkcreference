# sp_hitpoints

<Prototype>int sp_hitpoints(int active_sprite, int hitpoints[-1])</Prototype>

`sp_hitpoints()` gets or sets the `hitpoints` of the `active_sprite`.

If the sprite's `hitpoints` are set to a value greater than zero, the sprite can be hurt by getting hit and will die if its hitpoints drop to 0 or lower.

However, if the `hitpoints` are set to 0 (default), the sprite is invincible.

`sp_hitpoints()` has no effect on the sprite 1. The player's life is controlled by the `&life` and `&lifemax` required global variables.
