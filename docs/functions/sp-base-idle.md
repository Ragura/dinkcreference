# sp_base_idle

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_base_idle(int active_sprite, int base_sequence)</Prototype>

`sp_base_idle()` sets the idle `base_sequence` for the `active_sprite`.

If an idle `base_sequence` is set, this sprite will choose the sequence closest to its last direction and play it when not moving or attacking. If no idle `base_sequence` is set, the sprite will play out its last sequence and stay at the last frame until it performs another action. To disable a sprite's idle base sequence, use a `base_sequence` of -1. This function only affects sprites with a [sp_brain()](./sp-brain.md) of 1 (Dink). [sp_base_idle()](./sp-base-idle.md) will always return the `base_sequence` value that is passed to it.
