# script_attach

<Prototype>void script_attach(int active_sprite)</Prototype>

`script_attach()` will attach the current script to the `active_sprite`.

This is mostly used to attach a script to the fake sprite 1000, so it will survive when the player changes screens.

```c
// Sample script that will warp the player to screen 400
script_attach(1000);
&player_map = 400;
load_screen();
draw_screen();
kill_this_task();
```

Attaching the current script to sprite 0 is similar to sprite 1000, except that the script will die when the player changes screens.
