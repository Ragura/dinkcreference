# sp_target

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_target(int active_sprite, int target_active_sprite[-1])</Prototype>

`sp_target()` gets or sets the `target_active_sprite` for the `active_sprite`.

The only [sp_brains](./sp-brain.md) that directly use the `target_active_sprite` are 9 and 10 (enemy brains). If a `target_active_sprite` is set, the `active_sprite` will walk towards it and try to attack it. If the `active_sprite` has a [sp_base_attack()](./sp-base-attack.md) sequence set, comes within [sp_distance()](./sp-distance.md) pixels, and the [sp_attack_wait()](./sp-attack-wait.md) interval has passed, it will play the attack animation sequence.

Internally, the `target_active_sprite` is automatically set to 1 (the player sprite) when the missile hits another sprite.
