# get_rand_sprite_with_this_brain

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int get_rand_sprite_with_this_brain(int brain, int active_sprite_ignore)</Prototype>

`get_next_sprite_with_this_brain()` returns a random active sprite number that is on the screen with [sp_brain()](./sp-brain.md) brain. It will not include `active_sprite_ignore`, so a sprite can check for other brains of its type if needed. If no matching sprite is found, 0 is returned.

Used by the dragons to target the town folk in the original game.

```c
//excerpt from en-drag.c
&mtarget = get_sprite_with_this_brain(16, &current_sprite);
if (&mtarget > 0)
{
    &mtarget = get_rand_sprite_with_this_brain(16, &current_sprite);
    sp_target(&current_sprite, &mtarget);
}
```
