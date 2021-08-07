# draw_hard_sprite

<Prototype>void draw_hard_sprite(int active_sprite)</Prototype>

If `active_sprite` is hard, `draw_hard_sprite()` will add or remove `active_sprite's` hardness to or from the screen.

Note: If a sprite is hard and moves, its old hardness will remain behind. `draw_hard_sprite()` only adds or removes hardness on the sprite's current location. So to properly move a rock, you would have to do something like this:

```c
// rock.c
void push(void)
{
    int &dir = sp_dir(1, -1);
    if (&dir == 6)
    {
        // Remove the old hardness
        sp_hard(&current_sprite, 1);
        draw_hard_sprite(&current_sprite);
        move(&current_sprite, 6, 400, 1);
        // Draw the new hardness
        sp_hard(&current_sprite, 0);
        draw_hard_sprite(&current_sprite);
    }
}
```

Of course, you could just call [draw_hard_map()](./draw-hard-map.md) once after the rock was moved.

This could be useful if you needed to draw a lot of custom hardness on the screen without using hard-tiles, like an invisible maze.

```c
//Draw a line of hardness in the center of the screen
int &sprite = create_sprite(320, 200, 0, 95, 1);
sp_hard(&sprite, 0);
draw_hard_sprite(&sprite);
sp_y(&sprite, 180);
draw_hard_sprite(&sprite);
sp_y(&sprite, 160);
draw_hard_sprite(&sprite);
sp_y(&sprite, 140);
draw_hard_sprite(&sprite);
sp_y(&sprite, 120);
draw_hard_sprite(&sprite);
sp_y(&sprite, 100);
draw_hard_sprite(&sprite);
sp_active(&sprite, 0);
```
