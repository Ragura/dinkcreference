# kill_this_magic

<Prototype>void kill_this_magic(string[9] script)</Prototype>

`kill_this_magic()` removes the first instance of the magic spell using script from the player's inventory.

If the magic is currently armed, it will run the magic script's `holdingdrop()`, `disarm()`, and `drop()` procedures.

If the magic is not armed, it will only run the magic script's `drop()` procedure.

It is not necessary for the named script to actually exist. As long as the same script name is used as was specified by `add_magic()`, the magic will be removed.

<br>

::: warning 

If the magic being killed off is currently armed when this function is called, the *item* image in the status bar will also vanish, and the green magic charge bar can sometimes be left behind.

:::

<br>

Here is a work around to fix the flaw in this function:

```c
void main(void)
{
 //store '&cur_weapon' in a local variable
 int &fix_weap = &cur_weapon;

 //kill off the fireball spell
 kill_this_magic("item-fb");

 //fix unwanted side effects with magic charge bar and empty slot staying equipped
 &cur_magic = 0;
 &magic_cost = 0;
 &magic_level = 0
 arm_magic();

 //restore &cur_weapon, arm it, and draw the status
 &cur_weapon = &fix_weap;
 arm_weapon();
 draw_status();
}
```

For more information, see [Items](../guide/items.md)
