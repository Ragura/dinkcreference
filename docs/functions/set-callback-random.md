# set_callback_random

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int set_callback_random(string procedure[19], int base, int range);</Prototype>

`set_callback_random()` will call the procedure in the current script randomly between base milliseconds and base + range milliseconds.
It also returns a callback number which can be used to kill the callback later in the script using [callback_kill()](./callback-kill.md)

This example will call the dragon's target procedure after waiting between 500 and 2500 milliseconds:

```c
// dragon.c
set_callback_random("target", 500, 2000);
```

Interestingly, the `wait()` command is equivalent to the `set_callback_random()` command with no procedure specified:

```c
wait(500);
set_callback_random("", 500, 0);
```
<br>
<VersionInfo dink="1.07">
A callback number is not returned.
</VersionInfo>
