# sound_set_vol

**Version:** <VersionInfo dink="1.05+" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void sound_set_vol(int soundbank, int volume)</Prototype>

`sound_set_vol()` will decrease the volume of the sound using the given soundbank based on volume. It cannot increase the volume of the sound.

The volume should be negative or zero. 0 is no change, -1000 is about half-volume, and -10000 is extremely quiet.

Note that the soundbank is not the sound number used to declare a sound, but rather the number returned by playsound.

```c
// Example of playing the sound quiet-like
int &soundbank = playsound(87, 22050, 0, 0, 1);
sound_set_vol(&soundbank, -1500);
```

::: warning
<VersionInfo freedink="">

Playsound will return the soundbank number plus 1. To get the actual soundbank number of the sound, you must minus 1 from the returned value.

</VersionInfo>
:::