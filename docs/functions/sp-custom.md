# sp_custom

<Prototype>int sp_custom(string key[199], int active_sprite, int value[-1])</Prototype>

`sp_custom()` gets or sets the custom `key` `value` for the `active_sprite`. Each sprite can store unlimited keys. This will not work for sprite 1 (the player sprite).

```c
// Place '1' in the 'Pie' key
sp_custom("Pie", &current_sprite, 1);
// Place '0' in the 'Cake' key
sp_custom("Cake", &current_sprite, 0);
// Get the values
int &pie = sp_custom("Pie", &current_sprite, -1);
int &cake = sp_custom("Pie", &current_sprite, -1);
// Dink will say "1 - 0"
say("&pie - &cake", 1);
```
