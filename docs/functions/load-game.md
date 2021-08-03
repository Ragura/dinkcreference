# load_game

<Prototype>void load_game(int slot)</Prototype>

`load_game()` loads the save game with the filename in `SAVEslot.DAT`. The save game must exist in the D-Mod's directory. All variables and other pertinent information are replaced with the values in the save game file.

A D-Mod normally has, or at least has access to, three `load_game()` commands:

1. `start-2.c`, which drives the "Continue" button or its counterpart on the D-Mod's opening screen.
2. `escape.c`, run when the player presses the <kbd>sscape</kbd> key.
3. `dinfo.c`, Dink's `die()` procedure.

All running scripts are cancelled by `load_game()`. Period, even if the load fails. It is unclear what happens in that case, but the script that did the `load_game()` does not continue running no matter what. Use `game_exist()` first so that a failed load can be anticipated and prevented.

As stated, all currently-running scripts are cancelled by `load_game()`, but these are started to replace them:

1. The base script for the `&player_map` screen
2. All the `main()` procedures of all the scripts attached to any sprite on the screen
3. The `disarm()` and then the `arm()` procedures for Dink's currently armed weapon and/or magic, if any.
