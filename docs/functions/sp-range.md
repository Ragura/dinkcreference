# sp_range

<Prototype>int sp_range(int active_sprite, int range[-1])</Prototype>

`sp_range()` gets or sets the `range` value for the `active_sprite`.

For an `active_sprite` that is playing an animation sequence with a special damage frame (i.e. attack sequences), the `range` value is used to temporarily deform the hardbox of all other sprites according to the current direction of the `active_sprite`. The `active_sprite` will hit any of the `active_sprites` that it overlaps.

If range is 0 (default), the range will be 28 for left and right, and 36 for up and down.

| Direction | Left | Top | Right | Bottom |
|--|--|--|--|--|
| 2 | -10 - (range / 8) | -range | +10 + (range / 8) | 0 |
| 4 | 0 | -10 - (range / 8) | +range | +10 + (range / 8) |
| 6 | -range | -10 - (range / 8) | 0 | +10 + (range / 8) |
| 8 | -10 | 0 | +10 | +range |

So, the `range` value essentially extends the hardboxes so that they're easier to hit based on the `active_sprite's` current direction. If the `active_sprite` is facing right and attacks, the hardboxes of all sprites are temporarily extended left range pixels (among other changes).

For [sp_brain()](./sp-brain.md) 11 and 17 (missiles), range pixels are added around the missile's hardbox to make it more likely to hit enemies.

It is possible to see `sp_range` deformed hardboxes in debug mode.
