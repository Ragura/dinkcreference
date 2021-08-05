# sp_active

<Prototype>int sp(int editor_sprite)</Prototype>

`sp()` returns the active sprite number of the given `editor_sprite`.

You shouldn't have to use this unless you want to mess around with sprites you placed in the editor. And really, you'd be better off attaching scripts and using global variables than relying on the `editor_sprite` number remaining the same.
