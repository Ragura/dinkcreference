# sp_kill_wait

<Prototype>void sp_kill_wait(int active_sprite)</Prototype>

`sp_kill_wait()` will remove (or kill) the wait time for the `active_sprite`.

The wait time is the internal counter that determines when the next frame of animation will be displayed. So if you need something to happen right now, use `sp_kill_wait()`.

`sp_kill_wait()`, while similar in name, has absolutely nothing to do with `sp_kill()`.

This is used in the weapon scripts to make sure that Dink punches right away, so the script and animation are in sync.

```c
// excerpt from item-fst.c
sp_kill_wait(1); //make sure dink will punch right away
```
