# run_script_by_number

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

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

If `script_number` is set to `&current_script`, the script number will be entered into the "script queue" twice, this means when the script reaches a `return`, the script will immediately be called again and keep executing code past that `return` line.

<VersionInfo dink="1.07">
If the procedure cannot be found it will still attempt to run the script, and will run the last procedure in the script.
</VersionInfo>
