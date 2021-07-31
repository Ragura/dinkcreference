# free_items

<Prototype>int free_items(void)</Prototype>

`free_items()` counts how many of the 16 weapon/item inventory slots remain unused. It is a good idea to check before calling `add_item()`.

```c
// modified extract from s1-nut.c
void touch( void )
{
    // disable touching so Dink doesn't touch this many times a second
    sp_touch_damage(&current_sprite, 0);
    int &junk = free_items();
    if (&junk < 1)
    {
        say("I'm full! I can't pick up anything else.", 1);
        wait(500);
        sp_touch_damage(&current_sprite, -1);
    }
    else
    {
        add_item("item-nut",438, 19);
        say("I picked up a nut!",1);
        sp_active(&current_sprite, 0);
    }
}
```
