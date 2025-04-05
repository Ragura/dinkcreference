# editor_frame

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int editor_frame(int editor_sprite, int frame[-1])</Prototype>

`editor_frame()` gets or sets the editor frame value for the given `editor_sprite`. This value is kept with the editor sprite even if the user exits the screen and comes back, or saves and loads the game.

The valid values for frame are 0-255.
