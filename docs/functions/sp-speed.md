# sp_speed

<Prototype>int sp_speed(int active_sprite, int speed[-1])</Prototype>

`sp_speed()` gets or sets the `speed` of the `active_sprite`. Higher `speed` numbers equal faster sprites.

Internally, `sp_speed()` sets [sp_mx()](./sp-mx.md) and [sp_my()](./sp-my.md) to appropriate values for the direction the sprite is moving. Therefore, it is also dependent upon [sp_timing()](./sp-timing.md).

Dink's speed can not be altered using `sp_speed()`. See [set-dink-speed()](./set-dink-speed.md) for that.

::: warning Dink speed return value
<VersionInfo dink="all" freedink="all">

Determining Dink's current speed using the [sp_speed()](./sp-speed.md) return value is unreliable, the returned value can randomly vary, resulting in a returned value other than dink's current [sp_speed()](./sp-speed.md) equivelant value.

</VersionInfo>

<VersionInfo dink="HD">

Dink's sp_speed return value is reliable and accurate.

</VersionInfo>
:::
