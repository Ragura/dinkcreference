# move_stop

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype small>void move_stop(int active_sprite, int direction, int destination_coordinate, bool ignore_hardness)</Prototype>

`move_stop()` behaves the same as `move()`, except that the script will stop until the `active_sprite's` x or y coordinate meets or exceeds the `destination_coordinate`.

For this reason, you should almost always set `ignore_hardness` to 1. Otherwise, a cutscene script could get stuck at a `move_stop()` command without any input from the player.

Like `move()`, `move_stop()` may cause the `active_sprite` to move past the destination by a couple pixels. However, if you really need a sprite to end up at a certain destination, you can do this:

```c
// Let's really stop at x coordinate 400
move_stop(1, 4, 400, 1);
sp_x(1, 400);
```
