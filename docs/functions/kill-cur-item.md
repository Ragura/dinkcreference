# kill_cur_item

<Prototype>void kill_cur_item(void)</Prototype>

`kill_cur_item()` will remove the currently armed item from Dink's inventory. It will run the procedures `disarm()`, `holdingdrop()`, and `drop()` in the item script. Note that this is slightly different from the `kill_this_item()` order.

<VersionInfo dink="< 1.08">

The game would stop executing the script once this command was called.

</VersionInfo>
