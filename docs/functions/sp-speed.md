# sp_speed

<Prototype>int sp_speed(int active_sprite, int speed[-1])</Prototype>

`sp_speed()` gets or sets the `speed` of the `active_sprite`. Higher `speed` numbers equal faster sprites.

Internally, `sp_speed()` sets [sp_mx()](./sp-mx.md) and [sp_my()](./sp-my.md) to appropriate values for the direction the sprite is moving. Therefore, it is also dependent upon [sp_timing()](./sp-timing.md).
