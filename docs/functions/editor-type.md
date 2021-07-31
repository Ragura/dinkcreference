# editor_type

<Prototype>int editor_type(int editor_sprite, int type)</Prototype>

`editor_type()` sets the editor type value for the given `editor_sprite`. This value determines if the given sprite will be visible when the screen is next drawn, according to the following table.

| Type | Description                                                             |
|------|-------------------------------------------------------------------------|
| 0    | Normal sprite, drawn on screen.                                         |
| 1    | Kill sprite completely.                                                 |
| 2    | Draw `editor_seq/editor_frame` as a sprite without hardness.            |
| 3    | Draw `editor_seq/editor_frame` as a background sprite without hardness. |
| 4    | Draw `editor_seq/editor_frame` as a sprite with hardness.               |
| 5    | Draw `editor_seq/editor_frame` as a background sprite with hardness.    |
| 6    | Sprite will return after 5 minutes.                                     |
| 7    | Sprite will return after 3 minutes.                                     |
| 8    | Sprite will return after 1 minute.                                      |
