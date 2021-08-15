# initfont

<Prototype>void initfont(string[31] font)</Prototype>

`initfont()` will cause the game to use `font` for all current and future text. Note that the font must be installed as a normal font (in the Windows/Fonts folder on Windows). The default font is `'Arial'`.

There are some differences in the way `font` is interpreted between Dink/Freedink, and also between font filetypes. 

Depending on the Dink Engine version and the font filetype, you will need to specify `font` as either a font name, or the actual font filename.

::: tip

The Font Name is the name displayed when you preview a font by opening it.

The actual font filename is viewed in the file properites - Right Click on the font and click properties and find the filename.

:::

Below you will find the requirements for `string font` based on filetype and Dink Engine version.

<VersionInfo freedink="all">

Only Truetype fonts(*.ttf) are compatible with `initfont()`

</versioninfo>

| File Type | String `font` requirement                                   |
|-----------|-----------------------------------------------------------|
| *.ttf     | <VersionInfo dink="all">Font name</versioninfo> <br> <VersionInfo freedink="all">File Name</versioninfo>  |
| *.otf     | <VersionInfo dink="all">File name</versioninfo>                           |
| *.fon     | <VersionInfo dink="all">Font name</versioninfo>                    |
| *.ttc     | <VersionInfo dink="all">Font name</versioninfo>    |
