# say

<Prototype>int say(string dialogue[199], int active_sprite)</Prototype>

`say()` will cause `active_sprite` to have the specified dialogue appear above it, and will return the active sprite number of the text sprite. The text sprite will live for at least 2700 milliseconds, or up to 72 milliseconds for every character, or until the player presses the space bar.

If the `active_sprite` was already talking, the old text will be erased (so they don't overlap).

If you need to know the active sprite number of a certain text sprite, you can check `&last_text` at any time.

To make the text a different color, use the <kbd>\`</kbd> character (the reverse apostrophe, left of the <kbd>1</kbd> key) followed by a special color character. See `set_font_color()` for a list of the default colors.

```c
say("`4Hello!", 1); // Orange!
```

By default, the color code will be `` `$ `` (yellow).

<VersionInfo dink="< 1.08"></VersionInfo>There were some problems using the `` `% `` color tag directly followed by certain letters (such as I, D, and J).

```c
say("`%drama queen", 1); // used to not be displayed properly
```

<VersionInfo dink="< 1.08"></VersionInfo> Dink would not interpret lines with a colon correctly, like so:

```c
say("bonus: 5 points", 1); // used to not display any text at all!
```
