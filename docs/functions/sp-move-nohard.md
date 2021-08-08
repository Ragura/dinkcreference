# sp_move_nohard

<Prototype>int sp_move_nohard(int active_sprite, bool move_no_hard[-1])</Prototype>

`sp_move_nohard()` gets or sets the `move_no_hard` value for the `active_sprite`. If `move_no_hard` is 1, the sprite will move freely through hardness. If `move_no_hard` is 0, the sprite will stop when it encounters hardness.

An equivalent is the fourth parameter (ignore_hardness) for the `move()` and `move_stop()` commands.

<VersionInfo dink="< 1.08">

The `move_no_hard` value only had an effect when the `active_sprite` was actively moving (through `move()` and `move_stop()` commands).

</VersionInfo>
