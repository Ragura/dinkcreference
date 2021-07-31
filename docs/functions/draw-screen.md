# draw_screen

<Prototype>void draw_screen(void)</Prototype>

`draw_screen()` draws the last screen loaded, either explicitly loaded by `load_screen()` or implicitly loaded when Dink walked onto the current screen. It also runs the `main()` procedures of any scripts attached to the screen or its sprites.

This command is generally used after a `load_screen()` or to redraw the current screen after it has been messed up by certain commands such as `fill_screen()` or `copy_bmp_to_screen()`. It can also be used to change visions, if the base script is setup accordingly (i.e. `&vision` can only be changed in the base script, not in the script calling `draw_screen()`).

If the script executing `draw_screen()` is attached to a screen or a sprite, that script is abandoned when the `draw_screen()` command is started. Use `script_attach(1000)` to prevent this from happening. Alternatively, just make sure that `main()` in the new screen's script does any cleanup after the warp, such as a `fade_up()` or `sp_nodraw(1,0)`.
