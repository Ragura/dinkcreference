# sp_noclip

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>bool sp_noclip(int active_sprite, bool not_clipped[-1])</Prototype>

`sp_noclip()` gets or sets the `not_clipped` value for the `active_sprite`.

If `not_clipped` is 1, the `active_sprite` can appear over the status bar sections of the screen.

If `not_clipped` is 0 (default), the `active_sprite` will not appear on any of the status bars sections of the screen.
