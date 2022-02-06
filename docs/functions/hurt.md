# hurt

<Prototype>void hurt(int active_sprite, int damage)</Prototype>

`hurt()` damages `active_sprite` with damage amount of damage. Note that it will damage an exact amount, but it does take defense into account. Also, there is still a chance of 1 damage if the defense of `active_sprite` is higher than `int damage`.

This function will always trigger the `hit()` procedure of `active_sprite` (even if no damage is dealt).
::: warning Common error
If `active_sprite` is currently executing a procedure when it is hurt using `hurt()`, and the `hit` procedure is called, the hit procedure will continue past `}` and into code afterwards.
:::

<br>
If the `active_sprite` receives damage, blood spurts are added, free of charge.

<VersionInfo dink="< 1.08">

- A negative damage value would cause the game to freeze.

- If the script that calls this function is attached to a sprite, [Required global variable](../guide/variables.md#required-global-variables) `&enemy_sprite` will be updated to `&current_sprite`.

- If the script that calls this function is not attached to a sprite [Required global variable](../guide/variables.md#required-global-variables) `&enemy_sprite` will be updated to `0`.

</VersionInfo>

<VersionInfo dink="1.08" freedink="all">

- Ignores the command safely when a negative value is given.

- If the script that calls this function is attached to a sprite, [Required global variables](../guide/variables.md#required-global-variables) `&enemy_sprite` and `&missle_source` will be updated to `&current_sprite`.

- If the script that calls this function is not attached to a sprite [Required global variables](../guide/variables.md#required-global-variables) `&enemy_sprite` and `&missle_source` will be updated to `0`.

</VersionInfo>
