# map_tile

<Prototype>int map_tile(int tile_position, int tile_index[-1])</Prototype>

`map_tile()` gets or sets the map tile for the tile at position `tile_position`.

The `tile_position` refers to a tile on the current screen. See [map_hard_tile](./map-hard-tile.md) for more information.

The `tile_index` will range from 0 to 5247. `tile_index` 0 is the tile in the upper-left corner of tileset 1, tile 128 is the tile in the upper-left corner of tileset 2, and so on.

You must use `draw_background()` or `draw_screen()` in order for the tiles to be visibly updated.

::: tip
Although the maximum size of a tileset can be 600x550, with 11 rows, and a maximum of 8 tiles on the 11th row, all available map editors at the time of writing this do not have the capability to view tilesets of this size.
Thus, if you were looking at the tiles as they are available in the editors (maximum of 8 rows visible), the bottom right tile of tileset 1 would be `tile_index` 95.

You do not have to stick to the visible limit imposed by the map editors! You can make tilesets of 11 rows and place the extra tiles using `map_tile`. 
The only exception this is tileset 41 - it can have a maximum of 8 rows.
:::

It is recommended that you either use the `map_tile()` to get the value of a tile you already know, or to create your own function to do the conversion for you:

```c
// get_map_tile_index
// &arg1 = Tileset (1-41)
// &arg2 = Tile X coordinate (1-12), 
// &arg3 = Tile Y coordinate (1-11)
void get_map_tile_index()
{
    // Calculate the Tileset offset
    int &temp = &arg1;
    &temp -= 1;
    &temp *= 128;
    int &index = &temp;

    // Calculate the X offset
    &temp = &arg2;
    if (&arg3 == 11)
    {
     //max X coordinate on the 11th row is 8.
     if (&temp > 8)
     {
      &temp = 8;
     }
    }
    &temp -= 1;
    &index += &temp;

    // Calculate the Y offset
    &temp = &arg3;
    &temp -= 1;
    &temp * 12;
    &index += &temp;
    return(&index);
}
```

There also exists a google sheet that will let you input tilescreen(0-9 and 'U'), tileset (1-4), column (1-12), and row (1-11), and it will output the `tile_index`:
[Get Tile Index Google Sheet](https://docs.google.com/spreadsheets/d/1JwalayHW7WAync6zBnyCuPjXRKO45iR_vueJyC3Cy2k/edit?usp=sharing)