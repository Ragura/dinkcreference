# sp_move_nohard

<Prototype>int sp_move_nohard(int active_sprite, bool move_no_hard[-1])</Prototype>

`sp_move_nohard()` gets or sets the `move_no_hard` value for the `active_sprite`. If `move_no_hard` is 1, the sprite will move freely through hardness. If `move_no_hard` is 0, the sprite will stop when it encounters hardness.

An equivalent is the fourth parameter (ignore_hardness) for the [move()](./move.md) and [move_stop()](./move-stop.md) commands.

Note that if the script uses [set_callback_random()](./set-callback-random.md) or [wait()](./wait.md), the nohard will be reset when the callback is processed.

<VersionInfo dink="< 1.08">

The `move_no_hard` value only had an effect when the `active_sprite` was actively moving (through [move()](./move.md) and [move_stop()](./move-stop.md) commands).

</VersionInfo>

<VersionInfo dink="1.08" freedink="all">

The `move_no_hard` effect works in all situations.

</VersionInfo>
