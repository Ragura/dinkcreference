# sp_distance

<Prototype>int sp_distance(int active_sprite, int distance[-1])</Prototype>

`sp_distance()` gets or sets the `distance` value for the `active_sprite`. This `distance` value serves a single purpose.

For an `active_sprite` with `sp_brain` 9 targeting another sprite (through `sp_target()`), the active sprite will try to walk within `distance` pixels of its target. If the `distance` value is 0, it will default to 5. Once within range, the `active_sprite` will attack the target if it has a `sp_base_attack` set and is not waiting to attack (from `sp_attack_wait()`).
