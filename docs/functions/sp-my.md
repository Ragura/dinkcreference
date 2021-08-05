# sp_my

<Prototype>int sp_my(int active_sprite, int pixels[-1])</Prototype>

`sp_my()` gets or sets the number of `pixels` the sprite is moving vertically per `sp_timing` interval. This is used to make sprites move in directions other than the 8 used with `sp_dir()`, or to finely tune movement speed.

If you need to set the value to -1 (which will return the current pixels value in this function), use `sp_move_y()`.

If `pixels` is negative, the `active_sprite` will move up. If `pixels` is positive, the `active_sprite` will move down.

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
