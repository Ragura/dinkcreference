# sp_script

<Prototype>int sp_script(int active_sprite, string script[9])</Prototype>

`sp_script()` kills any scripts currently owned by `active_sprite`, sets the script for the `active_sprite` and returns the script number of the new script.

It is not a good idea for a sprite to replace its own script. Odd things will happen. There is a nice work-around, though:

```c
// Example from Ted Shutes
int &cave = &current_sprite;
script_attach(0);
sp_script(&cave, "cavewarp");
kill_this_task();
```
