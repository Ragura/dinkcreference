# is_script_attached

<Prototype>int is_script_attached(int active_sprite)</Prototype>

`is_script_attached()` returns the script number of `active_sprite`. If there is not a script attached to `active_sprite`, 0 is returned. This is only really useful if used in conjunction with `run_script_by_number()`.

```c
// excerpt from dam-fire.c
&junk = is_script_attached(&missile_target);
if (&junk > 0)
{
    //Script is attached to this tree! script
    Let's run its die
    run_script_by_number(&junk, "DIE");
    return;
}
// otherwise burn the tree the normal way...
```
