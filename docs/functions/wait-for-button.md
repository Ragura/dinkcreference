# wait_for_button

<Prototype>void wait_for_button(void)</Prototype>

`wait_for_button()` will redirect any input temporarily to perform certain events that follow it based on the `&result` variable. The player should be frozen with [freeze(1)](./freeze.md) before calling this command, otherwise the player can still move as normal.

// Example script to show you which button is what, from Seth.

```c
void main( void )
{
    freeze(1);
    say("wait_for_button() active. Press Esc to quit.", 1);
    wfb_loop:
    wait_for_button();
    //input is read from keyboard and gamepad
    if (&result == 1) 
        say("You pressed button 1 [or the Ctrl key]", 1);

    if (&result == 2)
        say("You pressed button 2 [or the Space bar]", 1);

    if (&result == 3)
        say("You pressed button 3 [or the Shift key]", 1);

    if (&result == 4)
        say("You pressed button 4 [or the Enter key]", 1);

    if (&result == 5)
        say("You pressed button 5 [or the Esc key]", 1);

    if (&result == 6)
        say("You pressed button 6 [or the 'M' key]", 1);

    if (&result == 7)
        say("You pressed button 7 [or the '7' key]", 1);

    if (&result == 8)
        say("You pressed button 8!", 1);

    if (&result == 9)
        say("You pressed button 9", 1);

    if (&result == 10)
        say("You pressed button 10", 1);

    if (&result == 12)
        say("You pressed DOWN", 1);

    if (&result == 14)
        say("You pressed LEFT", 1);

    if (&result == 16)
        say("You pressed RIGHT", 1);

    if (&result == 18)
        say("You pressed UP", 1);

    if (&result != 5)
    {
        goto wfb_loop;
    }

    unfreeze(1);
    kill_this_task();
}
```
