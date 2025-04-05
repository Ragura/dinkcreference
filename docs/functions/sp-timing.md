# sp_timing

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_timing(int active_sprite, int timing[-1])</Prototype>

`sp_timing()` gets or sets the `timing` value for the `active_sprite`.

The `timing` value is the number of milliseconds the `active_sprite` waits between calls to the brain. The brain controls all internal behavior of the `active_sprite`, including movement.

Set lower `timing` values to make a monster move faster, and set higher `timing` values to make a monster move slower.

By default, `timing` is 33.
