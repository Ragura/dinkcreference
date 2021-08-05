# show_console

<Prototype>void show_console(void)</Prototype>

`show_console()` will bring up the console that allows the player to type in DinkC commands. When the console is active, the player will not be able to control Dink with the keyboard. However, joystick/gamepad control will continue to work.

The console has two lines. Right above the status bar is the player input line. Everything the player types on a keyboard is echoed here. Hitting enter will cause the game to execute that line as if it were a DinkC line. Above that line is the return value of the last function called.

To scroll through previous console commands, press <kbd>up</kbd> and <kbd>down</kbd>.

To close the console, press <kbd>esc</kbd>.
