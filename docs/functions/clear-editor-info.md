# clear_editor_info

<Prototype>void clear_editor_info(void)</Prototype>

`clear_editor_info()` erases the editor information (i.e. `editor_seq`, `editor_frame`, and `editor_type`) from all editor sprites. This is most useful when used in conjunction with `load_map()`. If this is not called, then broken barrels, killed enemies, burnt trees, and other editor attributes may interfere with the next map.

```c
load_map("map2.dat", "dink2.dat");
clear_editor_info();
```
