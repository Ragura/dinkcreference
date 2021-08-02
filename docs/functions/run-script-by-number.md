# run_script_by_number

<Prototype>void run_script_by_number(int script_number, string procedure[19])</Prototype>

`run_script_by_number()` will look for the script defined by `script_number` and attempt to run the specified procedure.

```c
// modified extract of dam-fire.c
int &junk = is_script_attached(&missile_target);
if (&junk > 0)
{
    run_script_by_number(&junk, "die");
    return;
}
```

<VersionInfo dink="< 1.08">If the procedure cannot be found it will still attempt to run the script, and will ruin the last procedure in the script.</VersionInfo><br>
<VersionInfo dink="1.08">The script will only be run if the procedure is found.</VersionInfo>
