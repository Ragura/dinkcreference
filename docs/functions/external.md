# external

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype small>void external(string script[9], string procedure[19], [int arg1, int arg2, int arg3, int arg4, int arg5, int arg6, int arg7, int arg8]);</Prototype>

`external()` creates a new instance of script and runs procedure. The script using `external()` will wait until procedure has finished before it resumes operation. `script` will automatically kill itself once it has finished.

It is possible to pass multiple arguments to a given procedure. The arguments are completely optional, and interpreted as `&arg1`, `&arg2`, etc.

See [Advanced Procedures](../guide/procedures.md#advanced-procedures) for more information.

<VersionInfo dink="1.07">
It was not possible to pass extra arguments to a given procedure.
</VersionInfo>

::: warning Common bugs and things to note
- Custom procedures called externally will run on thier own script number. Called procedures will not have access to previously declared local variables.

- Calling a procedure with `external()` when a screen is first loaded(immediately, before any waits) , will cause the called procedure to stop executing when it reaches any `wait` or command similar to wait, and further to this; if the summoned script contains a `main()` procedure, that will then execute when the called procedure stops. This can be avoided by making sure you have a `wait(0)` BEFORE calling an external procedure immediately on a new screen.
:::
