# sp_defense

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_defense(int active_sprite, int value[-1])</Prototype>

`sp_defense()` will get or set the defense `value` for the `active_sprite`.

When a sprite is attacked, it will subtract the defense value from the attack strength, and perform some random calculation to determine how much the sprite should be damaged. Note that a sprite always has a chance of being damaged by 1 hit point, even if it is attacked with a strength of 1 and it has a defense of 10000.

To set Dink's defense, use the `&defense` required global variable.

If the `active_sprite` is a text sprite ([sp_brain()](./sp-brain.md) of 8), the defense `value` stores the y-offset of the text from the parent sprite's [sp_y()](./sp-y.md) coordinate. By default it is set to 100 plus a value related to the depth dot and hardbox, so the text appears roughly 100 pixels above the sprite's head.
