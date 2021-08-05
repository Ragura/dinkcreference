# sp_sound

<Prototype>int sp_sound(int active_sprite, int sound_number[-1])</Prototype>

`sp_sound()` gets or sets the `sound_number` for `active_sprite`.

Setting a sound is equivalent to `playsound(sound_number, 22050, 0, active_sprite, 1)` Note that the sound will repeat, and will be attached to the `active_sprite`.

<VersionInfo dink="1.08"></VersionInfo>No longer crashes the game when attempting to retrieve the sound number by passing a -1.
