# sp_attack_wait

<Prototype>int sp_attack_wait(int active_sprite, int wait_period)</Prototype>

`sp_attack_wait()` sets the attack `wait_period` for the `active_sprite`. In order for `sp_attack_wait()` to work with [sp_brain()](./sp-brain.md) 9 sprites, they must have [sp_base_attack()](./sp-base-attackmd) sequences, such as boncas, slayers, and stone giants. By default, an attacking sprite will play its attack sequence over and over without delay if its enemy is in range. This command will force the monster to wait for at least `wait_period` milliseconds before trying to attack again.

This could be set once in an enemy's main procedure, or it could be set to a random value in the attack procedure to keep the enemy on their toes.

```c
// excerpt from en-slay.c
void attack(void)
{
    playsound(27, 22050,0,&current_sprite, 0);
    &mcounter = random(4000,0);
    sp_attack_wait(&current_sprite, &mcounter);
}
```

For sprites with a [sp_brain()](./sp-brain.md) of 10, the sprite will call the attack procedure but not play an animation. In the original game, `sp_attack_wait()` is used to cause a delay in attacks by dragons when they tried to harm the town folk.

This function only affects sprites with a [sp_brain()](./sp-brain.md) of 9 and a `sp_base_attack` not equal to -1 or sprites with a [sp_brain()](./sp-brain.md) of 10.

`sp_attack_wait()` returns the raw time at which the sprite is able to attack next. It is not entirely useful.
