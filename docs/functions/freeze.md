# freeze

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void freeze(int active_sprite)</Prototype>

`freeze()` stops the [sp_brain](./sp-brain.md) the active_sprite, preventing it from moving or interacting on its own. [move()](./move.md) and [move_stop()](./move-stop.md) commands will still work.

If the player's [sp_brain](./sp-brain.md) is frozen, all keyboard and gamepad input will be ignored except in choice statements and [wait_for_button()](./wait-for-button.md). The player can also use the space bar to skip a [say_stop()](./say-stop.md) line.

Freezing only has an effect if `active_sprite` has a [sp_brain](./sp-brain.md) of 0, 1, 3, 4, 9, 10, or 16.
