# draw_hard_map

<Prototype>void draw_hard_map(void)</Prototype>

`draw_hard_map()` recalculates all hardness for tiles and sprites on the current screen. By default, hardness is only calculated when the screen is first entered. So if you remove or change any hardness from the screen, you will need to call `draw_hard_map()` or [draw_hard_sprite()](./draw-hard-sprite.md) so these changes take effect.

This command is commonly used to recalculate hardness when removing a sprite with hardness:

```c
//s1-h1-4.c -- make several sprites disappear
void main(void)
{
    if(&story > 3)
    {
        int &who1 = sp(22);
        int &who2 = sp(23);
        sp_active(&who1,0);
        sp_active(&who2,0);
        draw_hard_map();
    }
}
```

It is also useful if the user moves an object with hardness, like a pushing a rock:

```c
//s1-roc.c -- push a rock
void push( void )
{
    int &mydir = sp_dir(1, -1);
    if (&mydir == 6)
    {
        say("It's .. it's moving...", 1);
        freeze(1);
        move_stop(&current_sprite, 6, 350, 1);
        unfreeze(1);
        draw_hard_map();
    }
}
```

If you just want need to modify the hardness of a single sprite, you might want to try `draw_hard_sprite()`.
