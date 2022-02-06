# set_smooth_follow

<Prototype>void set_smooth_follow(bool smooth_follow)</Prototype>

`set_smooth_follow()` will turn smooth following on-and-off depending on if `smooth_follow` is 1 or 0, respectively. Smooth following changes how sprites follow other sprites using [sp_follow()](./sp-follow.md) and [sp_target()](./sp-target.md).

When `smooth_follow` is 0 (default behavior in 1.07 and earlier), a sprite will follow another sprite using lateral directions (up, down, left, and right with no diagonals).

When `smooth_follow` is 1, a sprite will follow another sprite using all directions, including diagonals.
