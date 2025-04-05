# map_tile

**Version:** <VersionInfo dink="1.08" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int map_tile(int tile_position, int tile_index[-1])</Prototype>

`map_tile()` gets or sets the map tile for the tile at position `tile_position`.

The `tile_position` refers to a tile on the current screen. See [map_hard_tile](./map-hard-tile.md) for more information.

The `tile_index` will varies depending on the Dink Engine:
<VersionInfo dink="" freedink="" dinkhd="">0-5247</VersionInfo><br>
<VersionInfo yedink="">0-7808</VersionInfo>
::: tip DinkHD upper tile range
<VersionInfo dinkhd="">
The tile range in DinkHD is actually 0-7808, but the highest tile_index that can be accessed with this command is 5247. tile_index 5248 - 7808 can only be accessed and stamped in the map editor.
</VersionInfo><br>
:::

`tile_index` 0 is the tile in the upper-left corner of tileset 1, tile 128 is the tile in the upper-left corner of tileset 2, and so on.

You must use `draw_background()` or `draw_screen()` in order for the tiles to be visibly updated.

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