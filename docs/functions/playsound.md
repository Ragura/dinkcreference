# playsound

<Prototype small>int playsound(int sound_number, int min_speed, int rand_speed_to_add, int active_sprite, bool repeat)</Prototype>

test

`playsound()` will play the sound loaded with [load_sound()](./load-sound.md) into the given `sound_number`.

The sound will play at speed `min_speed` plus a random value between 0 and `rand_speed_to_add`. The overall speed is in hertz (typical values are 16000 and 22050 Hz). To play a sound at normal speed, enter a `min_speed` of the `.wav` file's recorded hertz, and set the `rand_speed_to_add` to 0.

If `active_sprite` is greater than 1, the sound will be attached to that sprite, so it will have a 3-dimensional stereo effect when the sprite moves in relation to the player.

If repeat is set to 1, the sound will repeat until it dies. Typically this will be once the sprite it is attached to dies, or when Dink changes screens.

`playsound()` returns a soundbank number which can be used in other sound-related functions.

::: warning
<VersionInfo freedink="109.6">

Playsound will return the soundbank number plus 1. To get the actual soundbank number of the sound, you must minus 1 from the returned value.

</VersionInfo>
:::
