# move

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype small>void move(int active_sprite, int direction, int destination_coordinate, bool ignore_hardness)</Prototype>

`move()` will move the active_sprite in the direction specified. Valid directions are 1-4 and 6-9. The direction relates directly to the numeric keypad, where 2 is down, 6 is right, etc.

The `active_sprite` will keep moving until the x or y coordinate meets or exceeds the `destination_coordinate`. See the table below:

| Direction # | Direction | Stops when                              |
|:-----------:|:---------:|-----------------------------------------|
|      1      |     ↙     | x less than or equal to destination.    |
|      2      |     ↓     | y greater than or equal to destination. |
|      3      |     ↘     | x greater than or equal to destination. |
|      4      |     ←     | x less than or equal to destination.    |
|      6      |     →     | x greater than or equal to destination. |
|      7      |     ↖     | x less than or equal to destination.    |
|      8      |     ↑     | y less than or equal to destination.    |
|      9      |     ↗     | x greater than or equal to destination. |

If `ignore_hardness` is 1, the `active_sprite` will walk through hardness. Otherwise, it will stop once it hits hardness.

Note that move may cause the sprite to move past the destination by a few pixels due to timing issues.
