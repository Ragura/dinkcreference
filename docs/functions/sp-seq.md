# sp_seq

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_seq(int active_sprite, int sequence[-1])</Prototype>

`sp_seq()` gets or sets the animation `sequence` for the `active_sprite`.

If `sequence` is 0, the `active_sprite` is not animating.

If `sequence` is not 0, the `active_sprite` is currently animating that sequence.

Note that the sequence may repeat, or the sprite may die once the sequence has finished, as determined by the `active_sprite's` [sp_brain()](./sp-brain.md).
