# draw_background

<Prototype>void draw_background(void)</Prototype>

`draw_background()` redraws the background (tiles and background sprites), leaving all active sprites intact. This is useful to restore a screen after a `fill_screen()` or similar effect that draws over the background. Note that all active sprites drawn to the background (dead bodies, etc.) will be missing.

This command can be used in place of draw_screen if no sprites are messed up by whatever special effect causes the need to refresh the background. Choose between `draw_screen()` and `draw_background()` based on whether scripts should be re-run: `draw_screen()` runs the main procedures of the map's "base" script and all the sprites' attached scripts, while `draw_background()` causes no attached scripts to be re-run.
