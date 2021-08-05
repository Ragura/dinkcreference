# scripts_used

<Prototype>int scripts_used(void)</Prototype>

`scripts_used()` will return the number of scripts being used right now.

In a well-behaved, well-debugged dmod, the count will be a total of the following:

- 1 if a script is attached to the screen Dink is currently on (in DinkEdit terms, if this "map" has a "base script").
- 1 for Dink's currently-armed weapon.
- 1 for Dink's currently-armed magic spell, if he knows magic.
- 1 for every sprite on the screen with an attached script, regardless of whether the same or different scripts are attached. (For example, in a screen with four pillbugs, the count will include 4 for the pillbugs, even though `en-pill.c` might be attached to each one. Every sprite gets its own separate "instance" of an attached script.)
- 1 for any script that has done a `script_attach(1000)` and not done a `kill_this_task()`.
- 1 for any script that has done a `script_attach(0)` while Dink was on the current screen.
· 1 for any active `key-##` summoned scripts.

If there are more scripts than expected, you probably have not been using `kill_this_task()` from spawned or `script_attach(1000)` scripts.
