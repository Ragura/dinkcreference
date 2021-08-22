# load_screen

<Prototype>void load_screen(void)</Prototype>

`load_screen()` loads the screen specified by `&player_map`.

This command will disable Dink's [move()](./move.md) or [move_stop()](./move-stop.md) movement, set his [sp_move_nohard()](./sp-move-nohard.md) flag to 0, and [unfreeze()](./unfreeze.md)him. It will also clear a [screenlock()](./screenlock.md), draw hard tiles, prepare to respawn any sprites that have an [editor_type()](./editor-type.md) of 6-8, given that the appropriate amount of time has passed, and play a midi attached to the screen.

It also loads the map screen from `map.dat`. It is almost always followed directly by [draw_screen()](./draw-screen.md).
