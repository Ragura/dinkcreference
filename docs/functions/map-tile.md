# map_tile

<Prototype>int map_tile(int tile_position, int tile_index[-1])</Prototype>

`map_tile()` gets or sets the map tile for the tile at position `tile_position`.

The `tile_position` refers to a tile on the current screen. See [map_hard_tile](./map-hard-tile.md) for more information.

The `tile_index` will range from 1 to 4428. `tile_index` 1 is the tile in the upper-left corner of tileset 1, tile 109 is the tile in the upper-left corner of tileset 2, and so on.

You must use `draw_background()` or `draw_screen()` in order for the tiles to be visibly updated.

It is recommended that you either use the `map_tile()` to get the value of a tile you already know, or to create your own function to do the conversion for you:

```c
// get_map_tile_index
// &arg1 = Tileset (1-41)
// &arg2 = Tile X coordinate (1-12)
// &arg3 = Tile Y coordinate (1-9)
void get_map_tile_index()
{
    int &index = 1;
    // Calculate the Tileset offset
    int &temp = &arg1;
    &temp -= 1;
    &temp * 108;
    &index += &temp;

    // Calculate the X offset
    &temp = &arg2;
    &temp -= 1;
    &index += &temp;

    // Calculate the Y offset
    &temp = &arg2;
    &temp -= 1;
    &temp * 12;
    &index += &temp;
    return(&index);
}
```
