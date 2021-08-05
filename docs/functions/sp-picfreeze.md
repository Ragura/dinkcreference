# sp_picfreeze

<Prototype>bool sp_picfreeze(int active_sprite, bool frame_freeze[-1])</Prototype>

`sp_picfreeze()` gets or sets the `frame_freeze` value for the `active_sprite`.

If `frame_freeze` is 0 (default), the `active_sprite` will behave as normal.

If `frame_freeze` is 1, the engine will freeze the `active_sprite's` frame upon movement even if it has a valid `sp_base_walk` value.

It is not that useful.

It was used in (and created for) *Mystery Island* to move a boat that had a `sp_base_walk` of 0. This caused the boat to play another sequence when it was moved. If the `sp_base_walk` had been set to -1, it would not be a problem.

```c
// Modified excerpt from s1-geton.c
int &ship = sp(3);
sp_base_walk(&ship, 0);
sp_speed(&ship, 3);
sp_picfreeze(&ship, 1);
move_stop(&ship, 8, -300, 1);
sp_nodraw(1, 0);
sp_picfreeze(&ship, 0);
```
