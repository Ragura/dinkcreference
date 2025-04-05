# Warps

You can easily create warps in the Dink engine by setting a warp destination point, but performing the same task in DinkC is a bit tricky.

Here's an example script that performs the same task as a warp sprite. If you need to warp to a different screen in the middle of a cutscene, just copy the necessary lines out of the touch procedure.

```c
// warp-eg.c by Ted Shutes
void main(void)
{
    // temporarily disable the touch() procedure
    sp_touch_damage(&current_sprite, 0);

    // set brain and pframe in case they weren't set by create_sprite():
    sp_brain(&current_sprite, 6);
    sp_pframe(&current_sprite, 1);

    // override create_sprite's pseq; start the warp sprite's animation:
    sp_seq(&current_sprite, 170);

    // set the animation rate to about 30 frames a second:
    sp_timing(&current_sprite, 33);

    // activate the touch() procedure after a second:
    wait(1000);
    sp_touch_damage(&current_sprite, -1);
}

void touch(void)
{
    // prevent more instances of touch() from starting:
    sp_touch_damage(&current_sprite, 0);

    // freeze Dink until the new screen is loaded:
    freeze(1);

    // keep script active after current screen and sprites are gone
    script_attach(1000);

    // optional pause for effect
    wait(500);

    // another optional effect - if not using, use sp_nodraw(1,1) instead
    fade_down();

    // screen to warp to, 1 to 768
    &player_map = 768;

    // Dink's X,Y coordinates on the new screen
    sp_x(1, 320);
    sp_y(1, 200);

    // face Dink in an appropriate direction, usually toward the player
    sp_dir(1, 2);

    // load screen specified by &player_map
    load_screen();

    // start music if desired
    playmidi("5.mid");

    // draw the screen's tiles and sprites
    draw_screen();

    // if sp_noclip() is in use in this dmod, redraw the status area
    draw_status();

    // undo fade_down(), or do a sp_nodraw(1,0) to undo a sp_nodraw(1,1)
    fade_up();

    // kill script manually, since we did a script_attach(1000) earlier
    kill_this_task();

    // note that no unfreeze(1) is required.
}
```

::: warning
- When making a scripted warp attached to a sprite, make sure the "warp" sprite property is disabled in the editor. If you have both scripted warp and editor warp set on the same sprite, it has the random chance to cause a bug where it will warp the player to screen 0 instead of the actual intended location.

- Brain 6 sprites set to warp in the editor can cause the game to freeze when the warp is triggered. Alternatively, use a scripted warp instead.
:::
