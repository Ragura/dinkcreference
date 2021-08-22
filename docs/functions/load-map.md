# load_map

<Prototype>void load_map(string[49] map_dat, string[49] dink_dat)</Prototype>

`load_map()` loads in a new map file using `map.dat` and `dink.dat`. The new map will not be visible until the player changes screens.

It is recommended to run [clear_editor_info](./clear-editor-info.md) after `load_map()`, so all editor information is cleared. Therefore, it is also recommended that the player not be able to switch back-and-forth between maps... all of the old barrels and chests would be available to open again.
