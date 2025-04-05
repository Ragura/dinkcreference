# sp_move_x

**Version:** <VersionInfo dink="1.08" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void sp_move_x(int active_sprite, int pixels)</Prototype>

`sp_move_x()` sets the number of `pixels` the sprite is moving horizontally per [sp_timing()](./sp-timing.md) interval. This is used to make sprites move in directions other than the 8 used with [sp_dir()](./sp-dir.md), or to finely tune movement speed.

If `pixels` is negative, the `active_sprite` will move left. If `pixels` is positive, the `active_sprite` will move right.

```c
// Modified excerpt from item-fb.c
if (&mydir == 9)
{
    &mholdx += 30;
    &junk = create_sprite(&mholdx, &mholdy, 11, 506, 1);
    sp_seq(&junk, 506);
    sp_move_x(&junk, +6);
    sp_move_y(&junk, -2);
}
```
