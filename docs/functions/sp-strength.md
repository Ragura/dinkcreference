# sp_strength

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_strength(int active_sprite, int strength[-1])</Prototype>

`sp_strength()` gets or sets the `strength` of the `active_sprite`.

If the `active_sprite` is playing an animation sequence with a special damage frame (i.e. attack sequences) it will cause anything it hits to be hurt up to `strength` hitpoints. The actual number may vary due to random variation and [sp_defense()](./sp-defense.md) of the target.

If the `active_sprite` is a missile ([sp_brain()](./sp-brain.md) of 11 or 17), it will also cause anything it hits to be hurt up to `strength` hitpoints.

If the `active_sprite` is a text sprite ([sp_brain()](./sp-brain.md) of 8), the `strength` value is the x-offset of the text from the parent sprite's [sp_x()](./sp-x.md) coordinate. By default it is set to 75, so the text starts 75 pixels left of the parent sprite.

To set Dink's strength, use the `&strength` required global variable.
