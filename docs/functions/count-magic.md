# count_magic

<Prototype>int count_magic(string script[9])</Prototype>

`count_magic()` counts the number of items with the script script in the magic inventory. Interestingly, the specified script need not actually exist: it only has to be the same as the corresponding [add_magic()](./add-magic.md) command's script-name argument.

For more information, see [Items](../guide/items.md)

<VersionInfo yedink="<= 0.94" freedink="all">
In YeoldeDink <= 0.94 `count_magic()` also counts the first item slot. This shouldn't actually pose a problem since you shouldn't be searching for anything that would match the first item slot with `count_magic()`. 
</VersionInfo>