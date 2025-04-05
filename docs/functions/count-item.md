# count_item

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int count_item(string script[9])</Prototype>

`count_item()` counts the number of items with the script *script* in the weapon/item inventory. Interestingly, the specified script need not actually exist: it only has to be the same as the corresponding [add_item()](./add-item.md) command's script-name argument.

For more information, see [Items](../guide/items.md)