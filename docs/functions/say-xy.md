# say_xy

<Prototype>int say_xy(string dialogue[199], int x, int y)</Prototype>

`say_xy()` behaves like [say()](./say.md), except the dialogue is attached to sprite 1000 and it will appear centered around the given x and y coordinates. Also, the dialogue will not start new lines every couple hundred pixels.

::: tip
The text will actually be displayed at `int x` plus 320. 
For example, if you would like your text to display at x position 320, you would set `int x` to 0.

The y coordinate does not behave this way - it will display at the given coordinate.
:::