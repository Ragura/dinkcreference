# save_game

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void save_game(int slot)</Prototype>

`save_game()` will save the game into the specified slot (filename `SAVEslot.dat`).

The following information is stored in the save game file:

Global variables, editor information (type, seq, and frame for 99 sprites on 768 screens), Dink's position, sequence, frame, direction, base hit, base walk, base idle, map.dat, dink.dat, palette, tiles, global functions and the time the player has been playing the game.

<VersionInfo dink="1.07">

Does not store `map.dat`, `dink.dat`, palette, tiles, and the global functions.

</VersionInfo>

Most notably, it does not store the graphics loaded with `dink.ini` and [init()](./init.md). If you change sequences in the middle of the game, you will have to add extra logic onto screens with savebots to ensure that the graphics are properly loaded.
