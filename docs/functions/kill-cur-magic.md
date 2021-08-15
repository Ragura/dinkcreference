# kill_cur_magic

<Prototype>void kill_cur_magic(void)</Prototype>

`kill_cur_magic()` will remove the currently armed magic from Dink's inventory. It will run the procedures `disarm()`, `holdingdrop()`, and `drop()` in the magic script. Note that this is slightly different from the `kill_this_magic()` order.

<br>

::: warning 
The game will stop executing the script once this function is called. The magic will be killed, but the item image will remain in the status bar until [draw_status()](./draw-status.md) is called.

Be careful not to call `kill_cur_magic` from a spawned script, or it will stop executing and survive forever.
:::

<br>

Here is a nice work around to fix the flaw in this function, using [set_callback_random()](./set-callback-random.md) to callback a procedure in the script, after it stops executing:

```c
void main(void)
{
 //set a callback to the 'killscript()' proc, with a wait time of 1.
 //so after we run the flawed 'kill_cur_magic()' function, it immediately runs 'killscript()'
 set_callback_random("killscript", 1, 1);

 //flawed 'kill_cur_magic()' function - will stop the current script executing
 kill_cur_magic();
}

void killscript(void)
{
 //this will run immediately after 'kill_cur_magic()'
 //draw the status to make the magic image vanish properly
 draw_status();

 //kill off this script so it doesn't remain in memory.
 kill_this_task();
}
```


For more information, see [Items](../guide/items.md)