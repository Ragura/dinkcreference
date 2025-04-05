# load_palette

**Version:** <VersionInfo dink="1.08" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void load_palette(string[49] 256_color_bmp_file)</Prototype>

load_palette replaces the current palette with the palette found in `256_color_bmp_file`. This will only work in 256 color mode, so if you plan on using palettes extensively, you may wish to use [get_truecolor](./get-truecolor.md) in `start.c` to force this.

By default, the palette is defined in `Tiles/TS01.bmp`.

::: danger Flawed

In some situations this function can cause the colors to mess up and change in a way unintended by the specified palette.
A better option is to apply your palette to a BMP file and use [copy_bmp_to_screen()](./copy-bmp-to-screen.md) to change the palette.

:::