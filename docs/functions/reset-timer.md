# reset_timer

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void reset_timer(void)</Prototype>

`reset_timer()` resets the time of the current game to 0. This timer is used in [get_time_game()](./get-time-game.md) and the save game time information. It should be run in `start-1.c` (or equivalent) to make sure that the player's time starts from 0.
