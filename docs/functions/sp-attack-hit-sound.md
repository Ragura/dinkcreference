# sp_attack_hit_sound

<Prototype>int sp_attack_hit_sound(int active_sprite, int sound_number[-1])</Prototype>

`sp_attack_hit_sound()` gets or sets the attack hit `sound_number` for the `active_sprite`. The attack hit sound number will be played every time the sprite hits something using its attack sequence, or in the case of a missile causing damage.

Note that unlike most sprite functions, `sp_attack_hit_sound()` works equally well for Dink. It is often used in weapon scripts to change his attack sound.

```c
// excerpt from item-sw1.c
void arm(void)
{
    //...
    sp_attack_hit_sound(1, 10);
    sp_attack_hit_sound_speed(1, 8000);
    // ...
}

void disarm(void)
{
    sp_attack_hit_sound(1, 0);
    // ...
}
```
