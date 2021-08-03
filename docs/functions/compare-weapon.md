# compare_weapon

<Prototype>bool compare_weapon(string script[9])</Prototype>

`compare_weapon()` returns '1' if the currently armed weapon is script. This could be used in a sprite's hit procedure to see if it was hit by a certain weapon, if used in conjunction with `&missle_source` and `&enemy_sprite`.

```c
void hit(void)
{
    // Make sure this sprite is hit by Dink and not a fireball
    if (&enemy_sprite != 1) return;
    if (&missle_source != 1) return;
    int &is_sword = compare_weapon("item-sw1");
    if (&is_sword == 1)
    {
      say_stop("You hit me with a sword!", 1);
    }
}

For more information, see [Items](../guide/items.md)