# add_magic

<Prototype>void add_magic(string script[9], int sequence, int frame)</Prototype>

`add_magic()` adds an item to the magic section of Dink's inventory. See [add_item](./add-item.md) for more detailed information. Note that `free_magic()` is used instead of `free_items()` to check how many magic slots are free.

The sequence and frame specify an icon to represent this item in the inventory and status area. In the default settings, sequence 437 contains magic inventory icons.

For more information, see [Items](../guide/items.md)