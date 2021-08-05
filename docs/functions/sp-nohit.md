# sp_nohit

<Prototype>bool sp_nohit(int active_sprite, bool no_hit[-1])</Prototype>

`sp_nohit()` gets or sets the `no_hit` value for the `active_sprite`.

If `no_hit` is 0 (default), the sprite can be hit and damaged.

If `no_hit` is 1, the sprite cannot be hit (and will not be damaged) by missiles, the player, or enemies. Also, the `sp_attack_hit_sound` will not be played.

When the `active_sprite` is hit by a player or enemy the engine will still run the hit procedure of the `active_sprite's` script.

The `hurt()` function can still damage a sprite that cannot be hit, but the engine will not run the `hit()` procedure of the `active_sprite's` script.

`sp_nohit()` is quite useful on grass and other small decorations so that missiles (fireballs and the like) will not be stopped.
