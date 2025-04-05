# sp_kill

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void sp_kill(int active_sprite, int kill_time)</Prototype>

`sp_kill()` sets the `kill_time` value for the `active_sprite`.

After `kill_time` milliseconds have passed, the `active_sprite` will die. It will be deactivated (similar to setting the `active_sprite's` [sp_active()](./sp-active.md) value to 0).

If the `active_sprite` has a `kill_time` of 0 (default), the sprite will remain alive until killed by another means.
