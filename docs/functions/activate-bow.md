# activate_bow

<Prototype>void activate_bow(void)</Prototype>

`activate_bow()` allows bow-type weapons to charge up. The animation is hard-coded to base 100, uses all 8 directions, and each direction uses 6 frames. As the function name implies, it is used almost exclusively for the bow.

```c
//Extract from item-b1.c
void use(void)
{
    activate_bow();
    &mypower = get_last_bow_power();
    //create missile/arrow based on &mypower
}
```

If the <kbd>ctrl</kbd> key is already being pressed when activate_bow is issued (as must be the case in a weapon's `use()` procedure), the script is paused until the <kbd>ctrl</kbd> key is released. Dink can change his direction, but cannot move. During this time, a counter is quickly incremented based on how long the Ctrl key is held. In about one second, the counter reaches a ceiling value of 500. The script remains paused, but the counter is not incremented further. [get_last_bow_power()](./get-last-bow-power.md) then returns the value of the counter when the <kbd>ctrl</kbd> key is released and the script is allowed to continue.
