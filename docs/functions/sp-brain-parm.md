# sp_brain_parm

<Prototype>int sp_brain_parm(int active_sprite, int value[-1])</Prototype>

`sp_brain_parm()` gets sets or sets a `value` for the `active_sprite` that has a special meaning for some brains.

| Brain | Meaning                                                                                                                                                                |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 8     | Damage Text Sprites: The active sprite number of the sprite that was hurt.<br>Experience Text Sprites: 5000.                                                           |
| 11    | An active sprite number the missile cannot damage.                                                                                                                     |
| 12    | The size value to grow or shrink to.                                                                                                                                   |
| 14    | 0 if the player sprite not currently over the button, and 1 if the player sprite is currently over the button.                                                         |
| 15    | The parent active sprite number that the shadow sprite mirrors the x, y, and size value. Once the parent is no longer active, the shadow will be killed automatically. |
| 17    | An active sprite number the missile cannot damage.                                                                                                                     |
