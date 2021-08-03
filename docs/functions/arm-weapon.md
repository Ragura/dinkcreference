# arm_weapon

<Prototype>void arm_weapon(void)</Prototype>

`arm_weapon()` arms the item in the inventory slot (1-16) specified by `&cur_weapon`. If another item is currently armed, it will run that weapon's `disarm()` procedure, and then it will run the new weapon's `arm()` procedure.

```c
// typical use in start-1.c
add_item("item-fst", 438, 1);
&cur_weapon = 1;
arm_weapon();
```

For more information, see [Items](../guide/items.md)
