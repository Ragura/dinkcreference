# show_quick_message

<VersionInfo Dink Smallwood="HD">
</VersionInfo>

<Prototype>int show_quick_message(string message[88])</Prototype>

`show_quick_message` will display `message` in the middle of the screen for approximately 2 seconds. The message will fade in and out automatically.

::: tip

The maximum string length of 88 is strictly enforced by DinkHD. 
If `show_quick_message` is detected anywhere in a script(even if it is commented out), and it exceeds the 88 maximum string length, the game will crash.

:::