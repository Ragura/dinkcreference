# sp_y

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_y(int active_sprite, int y_coordinate[-1])</Prototype>

`sp_y()` gets or sets the `y_coordinate` of `active_sprite`.

The `y_coordinate` is where the sprite exists on the screen vertically. The top of the screen is 0, just above the status bar is 400, and the bottom of the screen is 480.

::: tip

Getting the Y position of a brain 15 sprite by passing -1 as `y_coordinate` is unreliable. Sometimes it will return an incorrect value. 
Get the Y position of the parent sprite of the shadow instead.

:::
