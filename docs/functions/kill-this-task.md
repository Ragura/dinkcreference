# kill_this_task

<Prototype>void kill_this_task(void)</Prototype>

`kill_this_task()` will kill the current script completely. Note that this isn't needed to kill normal scripts attached to sprites, which are killed automatically when the sprite is killed.

In fact, if `kill_this_task()` is used with a script attached to a normal sprite, Dink will no longer be able to interact with that sprite.

It should be used in the following scripts to ensure that they are killed appropriately:

- Scripts summoned by the engine (`key-##`, `button6`, etc).
- Scripts created by `spawn()`.
- Scripts that use `script_attach(1000)`

Failure to use `kill_this_task()` when appropriate is to risk running out of an extremely finite resource: variables.
