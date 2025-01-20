# load_tile

<Prototype>void load_tile(string[49] tile_bmp, int tile_index)</Prototype>

`load_tile()` replaces the tiles at `tile_index` with `tile_bmp`. By default, `TS01.bmp` through `TS41.bmp` are loaded into indexes 1-41. If the `tile_bmp` cannot be found, it will look in the `Dink` directory, using the same path specified.

Tileset information is stored in the save game file, and the tilesets will be loaded in [load_game()](./load-game.md).

This function is mostly useful if you want to replace all grass hills with snow or another comparable tileset.

Replace `tile_index` 17 with a tileset named "custom17.bmp" in the tiles folder of a dmod:

```c
void main(void)
{
 load_tile("tiles/custom17.bmp", 17);
 
 //make it visible immediately.
 draw_background();
}

```
