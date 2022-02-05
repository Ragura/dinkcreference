# sp_editor_num

<Prototype>int sp_editor_num(int active_sprite)</Prototype>

`sp_editor_num()` returns the editor sprite number of `active_sprite`. This editor sprite number is only used in the [editor_type()](./editor-type.md), [editor_seq()](./editor-seq.md), [editor_frame()](./editor-frame.md), and [sp()](./sp.md) commands.

If the `active_sprite` does not have an editor sprite number (such as for sprites created with [create_sprite()](./create-sprite.md)), it will return 0.

```c
// kill a sprite so it never comes back
int &hold = sp_editor_num(&current_sprite);
if (&hold != 0)
editor_type(&hold, 1);
```
