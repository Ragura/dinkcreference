# sp_follow

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_follow(int active_sprite, int target_active_sprite)</Prototype>

`sp_follow()` will cause `active_sprite` to get within 40 pixels of `target_active_sprite`. The `active_sprite` will attempt to move towards its target, and will not be able to maneuver around obstacles.

If [set_smooth_follow()](./set-smooth-follow.md) is set to 1, the sprite will move towards the target using diagonals as well.

This function only affects sprites with a [sp_brain()](./sp-brain.md) of 0, 3, 5, 7, 9, 10, and 16. The sprite should also have a [sp_speed()](./sp-speed.md) value greater than 0.

<VersionInfo dink="1.07">

[set_smooth_follow()](./set-smooth-follow.md) is not available. The sprite would always attempt to move in the directions up, down, left, and right.

</VersionInfo>
