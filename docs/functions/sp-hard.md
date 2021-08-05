# sp_hard

<Prototype>bool sp_hard(int active_sprite, bool not_hard[-1])</Prototype>

`sp_hard()` sets the `not_hard` value for the `active_sprite`. If `not_hard` is 1, the sprite does not have hardness. If it is 0, it has hardness.

However, hardness only changes after the initial drawing of the screen when the functions `draw_hard_map()` or `draw_hard_sprite()` are used.

If a sprite has a `warp` property, it can be disabled by setting `not_hard` to 1 and calling `draw_hard_map()` or `draw_hard_sprite()`.
