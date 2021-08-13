# initfont

<Prototype>void initfont(string[31] font)</Prototype>

`initfont()` will cause the game to use font for all current and future text. Note that the font must be installed as a normal font (in the Windows/Fonts folder on Windows). The default font is `'Arial'`, and `'Times New Roman'`, `'Arial Narrow'`, and `'Arial Bold'` will work fine, among others.

Note that if you try to use a font in the `Opentype` file format, the Dink Engine might randomly ignore it and revert back to `Arial`. 
For assured functionality, only specify fonts in the `Truetype` format. If you have an `Opentype` font you would like to use, it is best to convert it and include it with your Dmod, with instructions for the player to install it.
