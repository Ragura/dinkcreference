# kill_this_magic

<Prototype>void kill_this_magic(string[9] script)</Prototype>

`kill_this_magic()` removes the first instance of the magic spell using script from the player's inventory.

If the magic is currently armed, it will run the magic script's `holdingdrop()`, `disarm()`, and `drop()` procedures.

If the magic is not armed, it will only run the magic script's `drop()` procedure.

It is not necessary for the named script to actually exist. As long as the same script name is used as was specified by `add_magic()`, the magic will be removed.
