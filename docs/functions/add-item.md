# add_item

<Prototype>void add_item(string script[9], int sequence, int frame)</Prototype>

`add_item` adds an item to the weapons/items section of Dink's inventory. If the script argument names an existing script, it is loaded and executed as described in the chapter on [Procedures](../guide/procedures.md). Whether or not it names a real script, the script argument still serves to identify the item to the other commands in this category, such as `count_item()` and `kill_this_item()`.

If Dink has more than 16 items, this command is ignored. It is always a good habit of using `free_items()` to make sure that Dink has less than 16 items, and include some sort of *"Hey, you can't do that"* notification to the player.

The sequence and frame specify an icon to represent this item in the inventory and status area. In the default settings, sequence 438 contains weapon inventory icons. Icons should use the dimensions 63px x 55px.
