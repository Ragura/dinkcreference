# script_attach

<Prototype>void script_attach(int active_sprite)</Prototype>

`script_attach()` will attach the `active_sprite` number to the current script.

This is mostly used to attach fake sprite number 1000 to a script, so it will survive when the player changes screens.

```c
// Sample script that will warp the player to screen 400
script_attach(1000);
&player_map = 400;
load_screen();
draw_screen();
kill_this_task();
```

Attaching the fake sprite number 0 is similar to sprite number 1000, except that the script will die when the player changes screens.

It should be noted that if you are using `script_attach` to attach actual sprite numbers to a script (rather than just fake sprite numbers 0 or 1000), the script number attached to the sprites will not be updated, so the sprite will still look into their old script for predefined procedures such as `talk()`, `hit()`, etc.
However the scripts survival will be tethered to the new sprite.

To delve into this deeper and get a full understanding of the difference between an active sprite number attached to a script, and vice-versa see the following thread on the Dink Network:
[Testing a demonstration of proper workings of script_attach()](https://www.dinknetwork.com/forum.cgi?MID=206887#206887)


