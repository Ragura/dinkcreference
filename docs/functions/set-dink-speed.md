# set_dink_speed

<Prototype>void set_dink_speed(int speed)</Prototype>

`set_dink_speed()` sets the player's movement speed to the given speed value. The speed number is not the same as that used in [sp_speed()](./sp-speed.md). Attempts to change the player's speed with [sp_speed()](./sp-speed.md) will prove futile.

| Speed | [sp_speed()](./sp-speed.md) equivalent | Description                                      |
|-------|-----------------------|--------------------------------------------------|
| 4+    | 1                     | Slow                                             |
| 3     | 3                     | Normal                                           |
| 2     | 6                     | Fast (Herb Boots)                                |
| 1     | 9                     | Super fast                                       |
| 0     | N/A                   | No change                                        |
| -1    | 0                     | Player stuck in place, but can still turn around |

<VersionInfo dink="< 1.08">

Timing issues would cause Dink's speed to change rather noticeably in comparison to monsters.

</VersionInfo>

<VersionInfo dink="1.08">

Locks Dink's speed value to the [sp_speed()](./sp-speed.md) equivalents in the table.

</VersionInfo>

::: warning Dink speed return value
<VersionInfo dink="all" freedink="all">

Determining Dink's current speed using the [sp_speed()](./sp-speed.md) return value is unreliable, the returned value can randomly vary, resulting in a returned value other than dink's current [sp_speed()](./sp-speed.md) equivelant value.

</VersionInfo>

<VersionInfo dink="HD">

Dink's sp_speed return value is reliable and accurate.

</VersionInfo>
:::
