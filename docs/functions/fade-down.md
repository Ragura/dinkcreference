# fade_down

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void fade_down(void)</Prototype>

`fade_down()` causes the screen to fade to black. The script will pause during the fade down process.

It is generally a good idea to [freeze](./freeze.md) Dink before fading down, as the player will still be able to move otherwise.

When the screen has faded to black, all text will appear as white, and all white pixels will remain visible.

<VersionInfo freedink="">

When the game is in fullscreen mode, or the window is resized in window mode, text will be barely visible.

</VersionInfo>

<VersionInfo dinkhd="">

The status bar will not fade down unless &update_status is set to 0 before the `fade_down()`. Text will also not be visible after a `fade_down()`

</VersionInfo>

Please see the following thread on the Dink Network for a simple to use work-around, making `fade_down()` more consistent across all engines. This work around allows a full fade down, read-able text and any text colour after the screen is faded:
[Custom fade_down and fade_up procedures](https://www.dinknetwork.com/forum.cgi?MID=209911&Posts=1)