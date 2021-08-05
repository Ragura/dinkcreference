# set_font_color

<Prototype>void set_font_color(int color_number, int red, int green, int blue)</Prototype>

`set_font_color()` will change the color_number to the color specified by the red, green, and blue values. The color values must be in the range 0 to 255.

Font colors are not saved or loaded in save game files, and are only set to the defaults when the player starts the game for the first time.

| Number | Color code | Color description | Red | Green | Blue |
| ------ | ---------- | ----------------- | --- | ----- | ---- |
| 1      | `` `1 ``   | <ColorBlock code="1" />Light magenta     | 255 | 198   | 255  |
| 2      | `` `2 ``   | <ColorBlock code="2" />Light green       | 131 | 181   | 74   |
| 3      | `` `3 ``   | <ColorBlock code="3" />Bold cyan         | 99  | 242   | 247  |
| 4      | `` `4 ``   | <ColorBlock code="4" />Orange            | 255 | 156   | 74   |
| 5      | `` `5 ``   | <ColorBlock code="5" />Magenta           | 222 | 173   | 255  |
| 6      | `` `6 ``   | <ColorBlock code="6" />Light orange      | 244 | 188   | 73   |
| 7      | `` `7 ``   | <ColorBlock code="7" />Light gray        | 171 | 173   | 173  |
| 8      | `` `8 ``   | <ColorBlock code="8" />Dark gray         | 85  | 85    | 85   |
| 9      | `` `9 ``   | <ColorBlock code="9" />Sky blue          | 148 | 198   | 255  |
| 10     | `` `0 ``   | <ColorBlock code="0" />Bold green        | 0   | 255   | 0    |
| 11     | `` `! ``   | <ColorBlock code="!" />Yellow            | 255 | 255   | 2    |
| 12     | `` `@ ``   | <ColorBlock code="@" />Yellow            | 255 | 255   | 2    |
| 13     | `` `# ``   | <ColorBlock code="#" />Hot pink          | 255 | 132   | 132  |
| 14     | `` `$ ``   | <ColorBlock code="$" />Yellow            | 255 | 255   | 2    |
| 15     | `` `% ``   | <ColorBlock code="%" />White             | 255 | 255   | 255  |
