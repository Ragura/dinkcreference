# draw_screen

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void draw_screen(void)</Prototype>

`draw_screen()` draws the last screen loaded, either explicitly loaded by [load_screen()](./load-screen.md) or implicitly loaded when Dink walked onto the current screen. It also runs the `main()` procedures of any scripts attached to the screen or its sprites.

This command is generally used after a [load_screen()](./load-screen.md) or to redraw the current screen after it has been messed up by certain commands such as [fill_screen()](./fill-screen.md) or [copy-bmp-to-screen()](./copy-bmp-to-screen.md). It can also be used to change visions, if the base script is setup accordingly (i.e. `&vision` can only be changed in the base script, not in the script calling `draw_screen()`).

If the script executing `draw_screen()` is attached to a screen or a sprite, that script is abandoned when the `draw_screen()` command is started. Use [script_attach](./script-attach.md)(1000) to prevent this from happening. Alternatively, just make sure that `main()` in the new screen's script does any cleanup after the warp, such as a [fade_up()](./fade-up.md) or [sp_nodraw](./sp-nodraw.md)(1,0).
