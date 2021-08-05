# sp_move_y

<Prototype>void sp_move_y(int active_sprite, int pixels)</Prototype>

`sp_move_y()` sets the number of `pixels` the sprite is moving vertically per `sp_timing` interval. This is used to make sprites move in directions other than the 8 used with `sp_dir()`, or to finely tune movement speed.

If `pixels` is negative, the `active_sprite` will move up. If `pixels` is positive, the `active_sprite` will move down.

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
