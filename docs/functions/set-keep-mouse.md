# set_keep_mouse

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void set_keep_mouse(bool keep_mouse)</Prototype>

`set_keep_mouse()` will allow the user to go back into mouse-mode after the title screen if `keep_mouse` is 1. Note that this command must be set before the player uses the [set_mode(2)](./set-mode.md) command when starting the game for the first time, or when a save game is loaded.

To use the mouse later in the game, set Dink's brain to 13.
