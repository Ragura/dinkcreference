# load_tile

<Prototype>void load_tile(string[191] tile_bmp, int tile_index)</Prototype>

`load_tile()` replaces the tiles at `tile_index` with `tile_bmp`. By default, `TS01.bmp` through `TS41.bmp` are loaded into indexes 1-41. By default, this command will look in the D-Mod's tiles directory, and if `tile_bmp` cannot be found, it will look in Dink's tiles directory.

Tileset information is stored in the save game file, and the tilesets will be loaded in `load_game()`.

This function is mostly useful if you want to replace all grass hills with snow or another comparable tileset.
