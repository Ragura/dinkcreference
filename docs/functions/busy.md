# busy

<Prototype>int busy(int active_sprite)</Prototype>

`busy()` returns the active sprite number of the text sprite the `active_sprite` is currently saying. If 0, `active_sprite` is not currently talking.

It has been used to see if a sprite is busy or not (hence the function name), but problems may occur if `active_sprite` is in the middle of a conversation and isn't currently talking. Checking to see if the sprite is frozen with `sp_freeze()` is probably a better option.
