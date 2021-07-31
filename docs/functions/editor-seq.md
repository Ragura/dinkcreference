# editor_seq

<Prototype>int editor_seq(int editor_sprite, int seq)</Prototype>

`editor_seq()` sets the editor seq value for the given `editor_sprite`. This value is kept with the editor sprite even if the user exits the screen and comes back, or saves and loads the game.

The valid values for seq are 0-65535.
