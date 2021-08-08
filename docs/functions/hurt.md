# hurt

<Prototype>void hurt(int active_sprite, int damage)</Prototype>

`hurt()` damages active_sprite with damage amount of damage. Note that it will damage an exact amount, but it does take defense into account.

If the `active_sprite` is hurt, blood spurts are added, free of charge.

<VersionInfo dink="< 1.08">

A negative damage value would cause the game to freeze.

</VersionInfo>

<VersionInfo dink="1.08">

Ignores the command safely.

</VersionInfo>
