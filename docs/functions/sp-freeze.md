# sp_freeze

<Prototype>bool sp_freeze(int active_sprite, bool frozen[-1])</Prototype>

`sp_freeze()` gets or sets the `frozen` value of the `active_sprite`.

A `frozen` value of 1 is equivalent to the `freeze()` function (which disables the sprite's brain indefinitely).

A `frozen` value of 0 is equivalent to the `unfreeze()` function (which enables the sprite's brain).

However, unlike the freeze and unfreeze functions, `sp_freeze()` also returns the current frozen status. This is useful to see if Dink (or another sprite) is able to do or say something without interrupting a cutscene.

```c
// Example modified from Paul Pliska's busy() example
// This script is spawned once, and will cause Dink to say if he's poisoned
// every few seconds
void main(void)
{
    int &isfrozen;
    loop:
    if (&poisoned == 0)
        kill_this_task();
    &isfrozen = sp_freeze(&current_sprite, -1);
    if (&isfrozen == 0)
        say("I'm poisoned...", 1);
    wait(5000);
    goto loop;
}
```

Freezing only has an effect if `active_sprite` has a `sp_brain` of 0, 1, 3, 4, 9, 10, or 16.
