# sp_mx

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_mx(int active_sprite, int pixels[-1])</Prototype>

`sp_mx()` gets or sets the number of `pixels` the sprite is moving horizontally per [sp_timing()](./sp-timing.md) interval. This is used to make sprites move in directions other than the 8 used with [sp_dir()](./sp-dir.md) or to finely tune movement speed.

If you need to set the value -1 (which will return the current pixels value in this function), use [sp_move_x()](./sp-move-x.md).

If `pixels` is negative, the `active_sprite` will move left. If `pixels` is positive, the `active_sprite` will move right.

```c
// Excerpt from item-fb.c
if (&mydir == 9)
{
    &mholdx += 30;
    &junk = create_sprite(&mholdx, &mholdy, 11, 506, 1);
    sp_seq(&junk, 506);
    sp_mx(&junk, +6);
    sp_my(&junk, -2);
}
```
