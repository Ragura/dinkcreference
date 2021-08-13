# game_exists

<Prototype>bool game_exist(int save_game_number)</Prototype>

`game_exist()` will return 1 if the given `save_game_number` exists.

```c
// escape.c
// ... choice() code based on "&savegameinfo" pseudo variables; then...
if (game_exist(&result) == 0)
{
    unfreeze(1);
    wait(2000);
    say("Wow, this loaded game looks so familiar.", 1);
    kill_this_task();
}
```

This is one of the few known ways to communicate 'information' between two save games. For example, if you want to add something to the title screen after the player has won the game, you could use [save_game()](./save-game.md) to create a save game file with a predefined value (say 5678), and use `game_exist()` to check if that exists and modify the title screen accordingly.
