# sound_set_kill

<Prototype>void sound_set_kill(int soundbank)</Prototype>

`sound_set_kill()` will stop playing the sound using the given soundbank.

Note that the soundbank is not the sound number used to declare a sound, but rather the number returned by playsound.

```c
// Example of playing the first second of a sound
int &soundbank = playsound(87, 22050, 0, 0, 1);
wait(1000);
sound_set_kill(&soundbank);
```
