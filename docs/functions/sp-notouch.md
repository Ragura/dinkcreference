# sp_notouch

<Prototype>bool sp_notouch(int active_sprite, bool no_touch[-1])</Prototype>

`sp_notouch()` gets or sets the `no_touch` value for the `active_sprite`. It is primarily used for missiles and positive [sp_touch_damage()](./sp-touch-damage.md) internally, and is not known to be used in any DinkC scripts.

If `no_touch` is 0 (default), the sprite is able to be hit by missiles and be hurt by touch damage.

If `no_touch` is 1, the sprite cannot be hit by missiles and the player cannot be hurt by positive [sp_touch_damage()](./sp-touch-damage.md).

Internally, if a sprite is hit by a missile, its `no_touch` value will be set to 1 for 100 milliseconds so that it isn't damaged on every single update.

Similarly, if the player is hurt by positive [sp_touch_damage()](./sp-touch-damage.md), its `no_touch` value will be set to 1 for 400 milliseconds so that it isn't damaged on every single update.

It has no effect if the sprite touches the player with a [sp_touch_damage()](./sp-touch-damage.md) of -1.

However, because of an internal timer, the `no_touch` value will be reset to 0 unless one of the two situations described above are in effect.
