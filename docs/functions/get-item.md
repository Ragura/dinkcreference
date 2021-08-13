# get_item

<Prototype>int get_item(string script[9])</Prototype>

`get_item()` returns the first slot of the given script in the player's weapon/items inventory. Returns 0 if not found. This is useful if you want to arm the sword, but you don't know what inventory slot it is in.

```c
int &temp = get_item("item-sw1");
if (&temp > 0)
{
    &cur_weapon = &temp;
    arm_weapon();
}
```

For more information, see [Items](../guide/items.md)
