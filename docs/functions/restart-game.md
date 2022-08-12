# restart_game

<Prototype>void restart_game(void)</Prototype>

`restart_game()` will restart the game and return to the title screen. Everything will be re-initialised. 

It should be noted, that for sprites that have no hardbox information specified in dink.ini, their hardbox will not be re-initialised.
This means if you changed the hardbox of such a sprite with the [init()](./init.md) function, the change will remain after `restart_game()`