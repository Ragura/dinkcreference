# free_magic

<Prototype>int free_magic(void)</Prototype>

`free_magic()` counts how many of the 8 magic inventory slots remain unused. It is a good idea to check before calling [add_magic()](./add-magic.md). See [free_items()](./free-items.md) for a related example.

For more information, see [Items](../guide/items.md)

<VersionInfo yedink="<= 0.94">
In YeoldeDink <=0.94 `free_magic()` will report 1 free slot when there is 0.
</VersionInfo>