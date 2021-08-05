# sp_nodraw

<Prototype>bool sp_nodraw(int active_sprite, bool no_draw[-1])</Prototype>

`sp_nodraw()` gets or sets the `no_draw` value for the `active_sprite`.

If `no_draw` is 1, the `active_sprite` will not be drawn to the screen. However, its brain is still active, and any scripts attached to it will act normally.

If `no_draw` is 0 (default), the sprite will be drawn to the screen.
