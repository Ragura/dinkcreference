# sp_sound

<Prototype>int sp_sound(int active_sprite, int sound_number[-1])</Prototype>

`sp_sound()` gets or sets the `sound_number` for `active_sprite`.

Setting a sound is equivalent to `playsound(sound_number, 22050, 0, active_sprite, 1)` Note that the sound will repeat, and will be attached to the `active_sprite`.

<VersionInfo dink="< 1.08">

Trying to retrieve the sound number by passing -1 would crash the game.

</VersionInfo>

<VersionInfo dink="1.08" freedink="all">

No longer crashes the game when attempting to retrieve the sound number by passing a -1.

</VersionInfo>
