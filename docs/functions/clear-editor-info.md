# clear_editor_info

**Version:** <VersionInfo dink="1.08" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void clear_editor_info(void)</Prototype>

`clear_editor_info()` erases the editor information (i.e. [editor_seq()](./editor-seq.md), [editor_frame()](./editor-frame.md), and [editor_type()](./editor-type.md)) from all editor sprites. This is most useful when used in conjunction with [load_map()](./load-map.md). If this is not called, then broken barrels, killed enemies, burnt trees, and other editor attributes may interfere with the next map.

```c
load_map("map2.dat", "dink2.dat");
clear_editor_info();
```
