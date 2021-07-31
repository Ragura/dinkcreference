# freeze

<Prototype>void freeze(int active_sprite)</Prototype>

`freeze()` stops the `sp_brain` the active_sprite, preventing it from moving or interacting on its own. `move()` and `move_stop()` commands will still work.

If the player's `sp_brain` is frozen, all keyboard and gamepad input will be ignored except in choice statements and `wait_for_button()`. The player can also use the space bar to skip a `say_stop()` line.

Freezing only has an effect if `active_sprite` has a `sp_brain` of 0, 1, 3, 4, 9, 10, or 16.
