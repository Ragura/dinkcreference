# set_save_game_info

**Version:** <VersionInfo dink="1.08" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void set_save_game_info(string info[199])</Prototype>

`set_save_game_info()` will change the save game information line to info. Note that this is not the entire save game information line, but only the portion following the amount of time the player has been playing. By default, info is "Level &level".