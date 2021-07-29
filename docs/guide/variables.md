# Variables

A variable is a word that stores a number. This word must always start with an ampersand `&` symbol. The number must be in the range −2,147,483,648 to +2,147,483,647. There is a limit of 248 local and global variables active at any given time.

Each variable must be declared to some extent, and variables can have several mathematical operations performed on them. While variables can only store numbers, sometimes these numbers have a type with a deeper meaning.

## Local variables

A local variable can only be read and changed by the active script. This is very useful for temporary values that other scripts don't need to use. To declare a local variable, you use the int keyword followed by the variable name.

Here's a quick example:

```c
//var.c
void main(void)
{
    int &variable = 5;
    say("I am &variable years old!", 1);
}
```

## Global variables

A global variable can be read and changed by every script. This is very useful for values that you want to remember all of the time, like Dink's gold amount. To declare a global variable, you must use the make_global_int function in main.c.

```c
// Excerpt from main.c
void main()
{
make_global_int("&exp",0);
make_global_int("&strength", 3);
// ...
}
```

All global variables are automatically saved and loaded in save game files.

For an example of using non-required global variables, see Plot.

## Required global variables

There are several global variables that are **required** by the Dink engine. These variables **must** be declared in main.c. If they are not declared, the game may randomly crash.

| Name              | Description                                                                                                                                         |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `&cur_magic`      | The magic slot the player currently has selected.                                                                                                   |
| `&cur_weapon`     | The inventory slot the player currently has selected.                                                                                               |
| `&defense`        | The player's defense.                                                                                                                               |
| `&enemy_sprite`   | The last known active sprite to attack something. In the case of missiles, will store the player sprite (1).                                        |
| `&exp`            | The player's experience.                                                                                                                            |
| `&gold`           | The player's gold.                                                                                                                                  |
| `&last_text`      | The active sprite number of the most recently created text sprite.                                                                                  |
| `&level`          | The player's level.                                                                                                                                 |
| `&life`           | The player's current life (hitpoints).                                                                                                              |
| `&lifemax`        | The player's maximum life (hitpoints).                                                                                                              |
| `&magic`          | The player's magic.                                                                                                                                 |
| `&magic_cost`     | Determines how long it takes to fill up the magic meter. Values less than 100 may crash the game.                                                   |
| `&missile_target` | The last known target to be hit by a missile.                                                                                                       |
| `&missile_target` | The last known target to be hit by a missile.                                                                                                       |
| `&missle_source`  | The last known active sprite to attack something. In the case of missiles, will store the missile's sprite. And yes, missle is spelled incorrectly. |
| `&player_map`     | The current map screen number. The screen will not change unless `load_screen()` and `draw_screen()` are called.                                    |
| `&result`         | The result of a choice statement or `wait_for_button()`.                                                                                            |
| `&strength`       | The player's strength.                                                                                                                              |
| `&update_status`  | If set to 1, the status bar will be updated.                                                                                                        |
| `&vision`         | The current vision. Reset to 0 every time a new screen is loaded, and only has an effect if changed in the base script of a screen.                 |

Previously, it was thought that the `&speed` and `&timing` variables were also required, but they are not used by the Dink engine.

## Pseudo variables

There are also several fake variables which aren't declared as local or global. It is not possible to change these variables, only retrieve their value.

| Name              | Description                                                                                 |
|-------------------|---------------------------------------------------------------------------------------------|
| `&arg1`           | The first argument passed to a procedure.                                                   |
| `&arg2`           | The second argument passed to a procedure.                                                  |
| `&arg3`           | The third argument passed to a procedure.                                                   |
| `&arg4`           | The fourth argument passed to a procedure.                                                  |
| `&arg5`           | The fifth argument passed to a procedure.                                                   |
| `&arg6`           | The sixth argument passed to a procedure.                                                   |
| `&arg7`           | The seventh argument passed to a procedure.                                                 |
| `&arg8`           | The eighth argument passed to a procedure.                                                  |
| `&arg9`           | The ninth argument passed to a procedure.                                                   |
| `&current_script` | The script number of the currently executing script.                                        |
| `&current_sprite` | The active sprite number attached to the current script.                                    |
| `&return`         | The last known return value from a function or procedure.                                   |
| `&savegameinfo`   | Represents the line of information describing a save game. Only valid in choice statements. |

## Operations

Operations

There are several mathematical operations you can perform on variables. Each operation must have the following syntax:

```c
&variable <operation> <value>;
```

&variable is a variable name, operation is one of the operations below, and value is a number, another variable, or an internal function.

| Operation | Description                                               |
|-----------|-----------------------------------------------------------|
| =         | Sets the variable equal to the value.                     |
| +=        | Adds the value to the variable.                           |
| -=        | Subtracts the value from the variable.                    |
| /=        | Divides the variable by the value. Supported in 1.08+.    |
| /         | Divides the variable by the value.                        |
| *=        | Multiplies the variable by the value. Supported in 1.08+. |
| *         | Multiplies the variable by the value.                     |

Unlike almost any other scripting or programming language ever created, DinkC does not support any special math processing. That means if you want to do something like this:

```c
&life += ((&level + 1) / 2;
```

You have to split it off into single statements, like this:

```c
&temp = &level;
&temp += 1;
&temp /= 2;
&life += &temp; 
```

Also note that you can insert variable names in most internal functions that accept string input (like `say()` and `say_stop()`). Each variable will be displayed as the number it represents.

```c
say("You have &life life points, Dink.", &current_sprite);
```

This might cause the current sprite to say something like *"You have 15 life points, Dink."*

## Variable types

Now, besides storing plain numbers, variables can be used to store several different types of numbers used internally by the Dink engine.

| Name          | Description                                                                                           | Range |
|---------------|-------------------------------------------------------------------------------------------------------|-------|
| Editor sprite | A sprite placed in a map editor. Useful to save `editor_seq` and `editor_frame` information.          | 1-99  |
| Active sprite | A sprite that is currently on the screen. It will usually be different from the editor sprite number. | 1-300 |
| Map           | A map screen                                                                                          | 1-768 |
| Sound number  | A sound loaded using `load_sound()`.                                                                  | 1-99  |
| Soundbank     | A currently playing sound.                                                                            | 1-19  |
| Script number | A currently executing script.                                                                         | 1-299 |

## Special variables

There are a few special variables that refer to specific aspects of the Dink engine.

The active sprite number 1 will always refer to the player.

```c
// This will cause Dink to say "Hi."
say_stop("Hi.", 1);
```

The active sprite number 1000 can only be used with `script_attach()`. Active sprite 1000 isn't a real sprite, but the Dink engine will make any scripts attached to it survive when the player changes screens.

Similarly the active sprite number 0 can only be used with `script_attach()`. Active sprite 0 isn't a real sprite either, and it can be used to force a sprite to terminate when the player changes screens.
