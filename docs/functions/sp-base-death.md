# sp_base_death

<Prototype>int sp_base_death(int active_sprite, int base_sequence)</Prototype>

`sp_base_death()` sets the death `base_sequence` for the `active_sprite`. If a death `base_sequence` is set, this sprite will choose the sequence closest to its last direction and play it upon death.

If no death `base_sequence` is set, the sprite will attempt to play sequence ##5 in its `sp_base_walk` sequence. If this does not exist, it will play sequence 164 (a blood spurt).

To disable a sprite's death base sequence, use a `base_sequence` of -1. This function only affects sprites with a `sp_brain` of 9, 10, and 16. `sp_base_death()` will always return the `base_sequence` value that is passed to it.
