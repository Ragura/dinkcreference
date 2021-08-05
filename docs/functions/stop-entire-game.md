# stop_entire_game

<Prototype>void stop_entire_game(bool stop)</Prototype>

`stop_entire_game()` will stop the entire game, except for choice statements, if `stop` is 1.

```c
// Modified excerpt from lraise.c
void raise(void)
{
    playsound(33, 22000, 0, 0,0);
    script_attach(1000);
    playsound(10,22050,0,0,0);
    wait(1000);
    stop_entire_game(1);
    choice_start();
    set_y 240
    title_start();
    YOU ARE NOW LEVEL &level
    You may increase one of your attributes.
    title_end();
      "Increase Attack"
      "Increase Defense"
      "Increase Magic"
    choice_end();

    // handle choices
}
```

Note that there is no direct call of `stop_entire_game(0)`. It is automatically reset to 0 once the choice statement has finished.

However, if stop is set to 0 from within DinkC, all current sprites will be drawn to the background, almost like a snapshot.
