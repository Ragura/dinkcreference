# copy_bmp_to_screen

<Prototype>void copy_bmp_to_screen(string bmpfile[79])</Prototype>

`copy_bmp_to_screen()` copies the specified image *bmpfile* onto the screen. The image must use the resolution 640px x 480px, and should be in the current palette, unless running in true-color mode. If a different palette is used, the game will start using that palette (similar to load_palette).

The specified bmp will cover the background-area of the screen (status bar and tiles), but all sprites will still be visible and act like normal.
