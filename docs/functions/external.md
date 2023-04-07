# external

<Prototype small>void external(string script[9], string procedure[19], [int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8]);</Prototype>

`external()` creates a new instance of script and runs procedure. The script using `external()` will wait until procedure has finished before it resumes operation. `script` will automatically kill itself once it has finished.

<VersionInfo dink="1.08" freedink="all">

It is possible to pass multiple arguments to a given procedure. The arguments are completely optional, and interpreted as `&arg1`, `&arg2`, etc.

See [Advanced Procedures](../guide/procedures.md#advanced-procedures) for more information.

</VersionInfo>

::: warning Common error
- Calling a procedure with `external()` will cause the calling script to continue past `}` and into code afterwards.

- Calling a procedure via external immediately on a new screen, either in the main procedure of a script attached to the screen, or the main procedure in a sprites script, will cause the summoned procedure to terminate when it reaches any `wait` or command similar to wait. This can be fixed by making sure you do a `wait(0)` before calling a procedure via external.
:::
