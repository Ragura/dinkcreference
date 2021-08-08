# set_callback_random

<Prototype>int set_callback_random(string procedure[19], int base, int range);</Prototype>

`set_callback_random()` will call the procedure in the current script randomly between base milliseconds and base + range milliseconds.

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

<VersionInfo dink="1.08">

`set_callback_random()` returns a callback number which can be used to kill the callback later in the script using `callback_kill()`.

</VersionInfo>
