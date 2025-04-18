# sound_set_survive

**Version:** <VersionInfo dink="1.05+" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void sound_set_survive(int soundbank, int survive)</Prototype>

`sound_set_survive()` will cause a sound playing using the given soundbank to continue playing after the player changes a screen if survive is set to 1.

Note that the soundbank is not the sound number used to declare a sound, but rather the number returned by playsound.

```c
// Example of creating a repeating rain sound that survives after changing screens
// You wouldn't want to do something like this without using a global variable,
// otherwise the sound would keep playing forever (or until the player loads a game)
int &rainbank = playsound(87, 22050, 0, 0, 1);
sound_set_survive(&rainbank, 1);
```

::: warning
<VersionInfo freedink="">

Playsound will return the soundbank number plus 1. To get the actual soundbank number of the sound, you must minus 1 from the returned value.

</VersionInfo>
:::