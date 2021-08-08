# set_dink_speed

<Prototype>void set_dink_speed(int speed)</Prototype>

`set_dink_speed()` sets the player's movement speed to the given speed value. The speed number is not the same as that used in `sp_speed()`. Attempts to change the player's speed with `sp_speed()` will prove futile.

| Speed | `sp_speed()` equivalent | Description                                      |
|-------|-----------------------|--------------------------------------------------|
| 4+    | 1                     | Slow                                             |
| 3     | 3                     | Normal                                           |
| 2     | 6                     | Fast (Herb Boots)                                |
| 1     | 9                     | Super fast                                       |
| 0     | N/A                   | No change                                        |
| -1    | 0                     | Player stuck in place, but can still turn around |

<VersionInfo dink="< 1.08">

Timing issues would cause Dink's speed to change rather noticeably in comparison to monsters, and his `sp_speed()` return value could vary wildly.

</VersionInfo>

<VersionInfo dink="1.08">

Locks Dink's speed value to the `sp_speed()` equivalents in the table.

</VersionInfo>
