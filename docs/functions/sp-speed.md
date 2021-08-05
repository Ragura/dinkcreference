# sp_speed

<Prototype>int sp_speed(int active_sprite, int speed[-1])</Prototype>

`sp_speed()` gets or sets the `speed` of the `active_sprite`. Higher `speed` numbers equal faster sprites.

Internally, `sp_speed()` sets `sp_mx` and `sp_my` to appropriate values for the direction the sprite is moving. Therefore, it is also dependent upon `sp_timing`.
