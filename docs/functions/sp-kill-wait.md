# sp_kill_wait

<Prototype>void sp_kill_wait(int active_sprite)</Prototype>

`sp_kill_wait()` will remove (or kill) the wait time for the `active_sprite`.

The wait time relates to the timing value, which is the interval when the brain functions will next be called. 

`sp_kill_wait()`, while similar in name, has absolutely nothing to do with [sp_kill()](./sp-kill.md).

You'll see this used a lot in the weapon scripts in Dink Smallwood to "make Dink punch right away". In fact, `sp_kill_wait` doesn't do anything for `active_sprite` 1; by default the player sprite has no timing value set.

