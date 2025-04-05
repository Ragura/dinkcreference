# copy_bmp_to_screen

**Version:** <VersionInfo dink="1.05+" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void copy_bmp_to_screen(string bmpfile[79])</Prototype>

`copy_bmp_to_screen()` copies the specified image *bmpfile* onto the screen. The image must use the resolution 640px x 480px, and should be in the current palette, unless running in true-color mode. If a different palette is used, and the game is *not* in true color mode, it will start using that palette (similar to load_palette).

The specified bmp will cover the background-area of the screen (status bar and tiles), but all sprites will still be visible and act like normal.

[Drawing the background](./draw-background.md) will remove the bmp, reverting back to the original tiles. This is useful if you just want to use this function to change the palette without visibly showing the bmp on screen.

<VersionInfo dink="">

If a save file is loaded after a palette change, all tiles will revert back to the Dink palette, but sprites will still use the previously loaded palette. Also, further palette changes might not take effect.

</VersionInfo>


Copy an image name "tester.bmp" to the screen from the tiles folder:

```c

void main(void)
{
 copy_bmp_to_screen("tiles/tester.bmp");
}

```