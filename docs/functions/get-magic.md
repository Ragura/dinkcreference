# get_magic

**Version:** <VersionInfo dink="1.08" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int get_magic(string script[9])</Prototype>

`get_magic returns()` the first slot of the given script in the player's magic inventory. Returns 0 if not found. This is useful if you want to arm the fireball, but you don't know what inventory slot it is in.

```c
int &temp = get_magic("item-fb");
if (&temp > 0)
{
    &cur_magic = &temp;
    arm_magic();
}
```

For more information, see [Items](../guide/items.md)