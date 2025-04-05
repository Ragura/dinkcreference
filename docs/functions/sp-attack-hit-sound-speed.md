# sp_attack_hit_sound_speed

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype small>void sp_attack_hit_sound_speed(int active_sprite, int sound_speed[-1])</Prototype>

`sp_attack_hit_sound_speed()` gets or sets the attack hit `sound_speed` for the `active_sprite`. The attack hit sound speed is the hertz the sound number set with [sp_attack_hit_sound()](./sp-attack-hit-sound.md) will be played every time the sprite hits something using its attack sequence, or in the case of a missile causing damage.

Note that unlike most sprite functions, `sp_attack_hit_sound_speed()` works equally well for Dink.

```c
// excerpt from item-sw1.c
void arm(void)
{
    // ...
    sp_attack_hit_sound(1, 10);
    sp_attack_hit_sound_speed(1, 8000);
    // ...
}
```
