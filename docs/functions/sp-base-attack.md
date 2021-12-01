# sp_base_attack

<Prototype>int sp_base_attack(int active_sprite, int base_sequence)</Prototype>

`sp_base_attack()` sets the attack `base_sequence` for the `active_sprite`. Setting this value will enable the sprite to attack other sprites using the given `base_sequence`.

A sprite that attacks is one that plays another sequence (such as the enemy hitting or slashing) when it is in range of an enemy. This attack is limited to the directions up, left, right, and down.

To disable a sprite's ability to attack, use a `base_sequence` of -1.

This function only affects sprites with a [sp_brain()](./sp-brain.md) of 9.

`sp_base_attack()` will always return the `base_sequence` value that is passed to it.
