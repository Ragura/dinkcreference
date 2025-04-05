# sp_x

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_x(int active_sprite, int x_coordinate[-1])</Prototype>

`sp_x()` gets or sets the `x_coordinate` of `active_sprite`.

The `x_coordinate` is where the sprite exists on the screen horizontally. The far left of the screen is 0, just right of the left status border is 20, just left of the right status border is 620, and the far right of the screen is 640.

::: tip

Getting the X position of a brain 15 sprite by passing -1 as `x_coordinate` is unreliable. Sometimes it will return an incorrect value. 
Get the X position of the parent sprite of the shadow instead.

:::
