# set_dink_speed

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void set_dink_speed(int speed)</Prototype>

`set_dink_speed()` sets the player's movement speed to the given speed value. The speed number is not the same as that used in [sp_speed()](./sp-speed.md). Attempts to change the player's speed with [sp_speed()](./sp-speed.md) will prove futile.

| Speed | [sp_speed()](./sp-speed.md) equivalent | Description                                      |
|-------|-----------------------|--------------------------------------------------|
| 4+    | 1                     | Slow                                             |
| 3     | 3                     | Normal                                           |
| 2     | 6                     | Fast (Herb Boots)                                |
| 1     | 12                     | Super fast                                       |
| 0     | N/A                   | No change                                        |
| -1    | 0                     | Player stuck in place, but can still turn around |

To get Dinks speed use [get_dinkspeed()](./get-dinkspeed.md)

<VersionInfo dink="1.07">

Timing issues would cause Dink's speed to change rather noticeably in comparison to monsters.

</VersionInfo>
