# sp_base_walk

<Prototype>int sp_base_walk(int active_sprite, int base_sequence)</Prototype>

`sp_base_walk()` sets the walk `base_sequence` for the `active_sprite`.

If a walk `base_sequence` is set, this sprite will choose the sequence closest to its direction and play it when moving.

If no walk `base_sequence` is set, the sprite will play through its last sequence or stay frozen at its last frame when moving.

To disable a sprite's walk base sequence, use a `base_sequence` of -1. This function affects all sprites that move, either on their own volition or through `move()` and `move_stop()` commands.

`sp_base_walk()` will always return the `base_sequence` value that is passed to it.
