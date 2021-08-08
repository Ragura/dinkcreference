# kill_cur_magic

<Prototype>void kill_cur_magic(void)</Prototype>

`kill_cur_magic()` will remove the currently armed magic from Dink's inventory. It will run the procedures `disarm()`, `holdingdrop()`, and `drop()` in the magic script. Note that this is slightly different from the `kill_this_magic()` order.

<VersionInfo dink="< 1.08">

The game would stop executing the script once this command was called.

</VersionInfo>
