# playsound

<Prototype small>int playsound(int sound_number, int min_speed, int rand_speed_to_add, int active_sprite, bool repeat)</Prototype>

`playsound()` will play the sound loaded with [load_sound()](./load-sound.md) into the given `sound_number`.

The sound will play at speed `min_speed` plus a random value between 0 and `rand_speed_to_add`. The overall speed is in hertz (typical values are 16000 and 22050 Hz). To play a sound at normal speed, enter a `min_speed` of the `.wav` file's recorded hertz, and set the `rand_speed_to_add` to 0.

If `active_sprite` is greater than 1, the sound will be attached to that sprite, so it will have a 3-dimensional stereo effect when the sprite moves in relation to the player.

If `repeat` is set to 1, the sound will repeat until it dies. Typically this will be once the sprite it is attached to dies, or when Dink changes screens.

`playsound()` returns a soundbank number which can be used in other sound-related functions.

::: warning
<VersionInfo freedink="109.6">

Playsound will return the soundbank number plus 1. To get the actual soundbank number of the sound, you must minus 1 from the returned value.

</VersionInfo>
:::


Note that when `active_sprite` is greater than 1, and `repeat` is set to 1, a sound will NOT play unless `active_sprite` has a soundbank number attached to it. This is set using [sp_sound()](./sp-sound.md), and does not have to be a real soundbank number.
See example below:
```c
//To make an active sprite play a repeating sound, first we must set a soundbank number
void main( void )
{
 //For this example we are using a fake soundbank number of 999
 sp_sound(&current_sprite, 999);
 
 //now we can play a repeating sound attached to an active sprite
 playsound(24, 22050, 0, &current_sprite, 1);
}
```