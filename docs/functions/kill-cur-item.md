# kill_cur_item

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void kill_cur_item(void)</Prototype>

`kill_cur_item()` will remove the currently armed item from Dink's inventory. It will run the procedures `disarm()`, `holdingdrop()`, and `drop()` in the item script. Note that this is slightly different from the [kill_this_item()](./kill-this-item.md) order.

<br>

::: warning 
The game will stop executing the script once this function is called. The item will be killed, but the item image will remain in the status bar until [draw_status()](./draw-status.md) is called.

Be careful not to call `kill_cur_item` from a spawned script, or it will stop executing and survive forever.
:::

<br>

Here is a nice work around to fix the flaw in this function, using [set_callback_random()](./set-callback-random.md) to callback a procedure in the script, after it stops executing:

```c
void main(void)
{
 //set a callback to the 'killscript()' proc, with a wait time of 1.
 //so after we run the flawed 'kill_cur_item()' function, it immediately runs 'killscript()'
 set_callback_random("killscript", 1, 1);

 //flawed 'kill_cur_item()' function - will stop the current script executing
 kill_cur_item();
}

void killscript(void)
{
 //this will run immediately after 'kill_cur_item()'
 //draw the status to make the item image vanish properly
 draw_status();

 //kill off this script so it doesn't remain in memory.
 kill_this_task();
}
```


For more information, see [Items](../guide/items.md)