# external

<Prototype small>void external(string script[9], string procedure[19], [int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8]);</Prototype>

`external()` creates a new instance of script and runs procedure. The script using `external()` will wait until procedure has finished before it resumes operation. `script` will automatically kill itself once it has finished.

<VersionInfo dink="1.08" freedink="all"></VersionInfo> It is possible to pass multiple arguments to a given procedure. The arguments are completely optional, and interpreted as `&arg1`, `&arg2`, etc. See [Advanced Procedures](../guide/procedures.md#advanced-procedures) for more information.

::: warning Common external bug
Calling a procedure with `external()` can randomly cause the calling script to continue past `}` and into code afterwards. In some cases it may even continue past a `return;`. A solution to this is using `goto` at the end of the calling procedure, and jump to the end of the script. Check out [Jumps](../guide/control-structures.md#Jumps) for how to use `goto`
:::
