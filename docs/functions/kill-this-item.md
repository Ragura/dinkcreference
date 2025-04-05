# kill_this_item

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void kill_this_item(string[9] script)</Prototype>

`kill_this_item()` removes the first instance of the item using script from the player's inventory.

If the item is currently armed, it will run the item script's `holdingdrop()`, `disarm()`, and `drop()` procedures.

If the item is not armed, it will only run the item script's `drop()` procedure.

It is not necessary for the named script to actually exist. As long as the same script name used was specified by [add_item()](./add-item.md), the item will be removed.


For more information, see [Items](../guide/items.md)
