# fade_down

<Prototype>void fade_down(void)</Prototype>

`fade_down()` causes the screen to fade to black. The script will pause during the fade down process.

It is generally a good idea to [freeze](./freeze.md) Dink before fading down, as the player will still be able to move otherwise.

When the screen has faded to black, all text will appear as white, and all white pixels will remain visible.

<VersionInfo freedink="all">

When the game is in fullscreen mode, or the window is resized in window mode, text will be barely visible. A work around for this is to warp Dink to a screen with no sprites, filled with black tiles, and make Dink invisible using [sp_nodraw()](./sp-nodraw.md). Then do [fade_up()](./fade-up.md) and create your text.

</VersionInfo>
