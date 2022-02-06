# Scripts

## Text files

A script is a text file. Yep, that's it. The only difference between typing a grocery list and a DinkC script is the format.

For instance, here is a grocery list I wrote.

```txt
// grocery.txt
eggs
milk
pizza
diet dr. pepper
```

Now, I can understand that. I'm sure you can understand it too, as long as you know English. And if you don't know English, I'm not quite sure how you're reading this... but I commend you.

But, the Dink Engine doesn't know what the heck 'eggs' are. It doesn't have any common sense. So, being Dink Developers, we must write scripts in such a way that the Dink Engine can understand them.

Here's a quick script that would make Dink say my grocery list in the game:

```c
//grocery.c
void main(void)
{
    freeze(1);
    say_stop("Eggs!", 1);
    say_stop("Milk!", 1);
    say_stop("Pizza! Don't forget it!", 1);
    say_stop("Oh, bleh, DIET Dr. Pepper? That sucks.", 1);
    unfreeze(1);
}
```

This should make a tiny bit of sense. Maybe the 'void' words are odd, and there's a lot of punctuation, but you should be able to figure out that say_stop is being used to display text on the screen, somehow.

All scripts are placed in the `STORY` directory in your D-Mod's folder. Typically, they're named in the format `blah.c`, where 'blah' is at most 8 letters and numbers. You can add scripts within subfolders in your `STORY` directory, but this is not recommended, as the engine only keeps track of the first 9 characters of the script name, and strange things may happen.

::: warning Common Error
Scripts must have the `.c` extension. However, newer versions of Windows hide extensions by default, so if you save a script in Notepad as `blah.c` it really saves it as `blah.c.txt`.

To force Notepad to save a script as a `.c` file:

Put the save-as filename in double-quotes: `"blah.c"`.

To force Windows to display all file extensions:

1. Locate the windows search box (on the task bar or in the start menu)
2. Search for 'Folder Options'
3. Select 'Folder Options' or 'File Explorer Options' (whichever is in your search list)
4. Select the 'View' tab
5. Uncheck the 'Hide extensions for known file types' checkbox.

:::

## Comments

Not everything in a DinkC script is a command. Sometimes you want to write something as an additional note using a comment.

A comment in DinkC must start with two forward slashes `//`. Everything after this will be ignored, even if it is a DinkC command.

```c
// comment.c
void main(void)
{
    // this is a comment!
    DinkC will ignore this
    // say("This is a comment too! It won't do anything.", 1);
    say("Hey, this actually does something.", 1);
}
```

You may see some scripts with a comment after a command, like this:

```c
say("Hey, this does something", 1); //But this is a comment!
```

Comments following commands are not fully supported. They seem to work fine for the most part, but they may cause some problems, so it is recommended that you leave comments on their own lines.

In Dink Smallwood 1.08 comments have a character limit of 199(including the slashes). Any comments that exceed this limit can cause the game to crash.
This limit does not apply in certain specific circumstances and does not apply in Freedink. For best compatibility, avoid using comments that exceed 199 characters.

## Execution

Let's say you've created the `grocery.c` example script in your D-Mod's `STORY` directory. That's all fine and good... but how might the game know about `grocery.c`? Or any script?

There are three simple concepts that the engine uses to link scripts to the game: [Attachment](#attachment), [Calling](#calling), and [Summoning](#summoning).

### Attachment

Scripts can be linked to sprites (monsters, people, houses, etc) and screens through a process called attachment.

Usually this is done in the map editor, but you can also use the internal function [sp_script()](../functions/sp-script.md) to attach a script to a sprite while the game is running.

An attached script defines the behaviour of the sprite or screen by automatically running several [predefined procedures](./procedures.md#predefined-procedures) under certain circumstances, such as when the script is first run.

If you create a sprite in the map editor and attach our grocery.c script to it, Dink will say the grocery list whenever he first sees that sprite in the game.

### Calling

Calling is when a script creates and executes another script. This is done using the [external()](../functions/external.md) and [spawn()](../functions/spawn.md) internal functions.

Using [external()](../functions/external.md) is almost like engaging in a telephone conversation, where the caller script will wait until the other script is done before continuing on:

```c
// caller.c
void main(void)
{
    external("grocery", "main");
    // Caller: "Hey grocery.c, why don't you go do your main thing?"
    // [Pause]
    // Grocery: "Alright, I did it, now you can do what you were doing."
}
```

[spawn()](../functions/spawn.md) will create a completely new script that will survive and do things long after the spawner script has died:

```c
// spawner.c
void main(void)
{
    spawn("grocery");
    // Spawner: "Behold, grocery, I bring you to life. you were born to do."
    Do what
    // Grocery: "Alrighty."
    kill_this_task();
    // Spawner: "Erk."
    <DIES>
}
```

Note that the above example is a bit flawed... scripts that are [spawn](../functions/spawn.md)ed will survive forever unless explicitly killed with [kill_this_task()](../functions/kill-this-task.md). To fix this, we could add [kill_this_task()](../functions/kill-this-task.md); after the [unfreeze](../functions/unfreeze.md)(1); line of `grocery.c`.

### Summoning

Sometimes the game itself will summon some scripts in response to specific events or input by the player. This includes item and magic scripts that are added to the player's inventory with [add_item](../functions/add-item.md) and [add_magic](../functions/add-magic.md).

Take a look at the list of all scripts summoned by the game (except input, magic and item scripts). Usually these summoned scripts will run forever unless explicitly killed with [kill_this_task()](../functions/kill-this-task.md). Also, the engine will usually attempt to run the `main` procedure, though exceptions are noted for `lraise` and `dinfo`.

::: tip

Note that the below list is accurate to Dink Smallwood 1.08.
There are some differences in FreeDink 109.6. 

The main alphabetical (A-Z) keys should all be the same as the below list, but some other keys such as the numpad keys and `F#` keys differ in there script name.

If you would like to use some of the less common keys and need to confirm the script for that key, start the game with debug, press that key and then find it in the debug.txt

:::

| Script     | When is it run?                                                         | Script | When is it run?   |
|------------|-------------------------------------------------------------------------|------- |-------------------|
| `button4`   | `Enter`     |                                   `key 84`                                |  `T`      |
| `button6`   | `M`, `6`, or Gamepad Button 6    |              `key-85`                        |          `U`      |
| `button7`  | Gamepad Button 7 |                               `key-86`                       |           `V`      |
| `button8`  | Gamepad Button 8 |                               `key-87`                                |  `W`      |
| `button9`  | Gamepad Button 9 |                               `key-88`                                |  `X`                 |
| `button10` | Gamepad Button 10 |                              `key-89`                                |  `Y`                 |
| `dinfo`    | When Dink dies. `die()` procedure.                                      | `key-90`        | `Z`                  |
| `dnomagic` | When Dink tries to use magic, but doesn't have any magic armed.         | `key-96`       |  `Numpad 0`                 |
| `dnotalk`  | When Dink talks and no talking sprites are around.                      | `key-97`       |  `Numpad 1`                 |
| `lraise`   | When Dink gains enough experience to gain a level. `raise()` procedure. | `key-98`       |  `Numpad 2`                 |
| `main`     | When the game first starts up or `restart_game()` is called.            | `key-99`       |  `Numpad 3`                 |
| `start`    | When the game first starts up or `restart_game()` is called. After Main.c | `key-100`     | `Numpad 4`                  |
| `Escape`   | `Escape`     |                                    `key-101`                               | `Numpad 5`                 |
| `key-33`     | `Page up`     |                                 `key-102`                               | `Numpad 6`                  |
| `key-34`     | `Page down`   |                                 `key-103`                               | `Numpad 7`                  |
| `key-35`     | `End`         |                                 `key-104`                               | `Numpad 8`                  |
| `key-36`     | `Home`        |                                 `key-105`                               | `Numpad 9`                  |
| `key-44`     | `Print Screen` |                                `key-106`                               | `Numpad *`                  |
| `key-45`     | `Insert`      |                                 `key-107`                               | `Numpad +`                  |
| `key-46`     | `Delete`      |                                 `key-109`                               | `Numpad -`                  |
| `key-48`     | `0`      |                                      `key-110`                            |    `Numpad .`               |
| `key-49`     | `1`      |                                      `key-111`                            |    `Numpad /`               |
| `key-50`     | `2`      |                                      `key-112`                            |    `F1`               |
| `key-51`     | `3`      |                                      `key-113`                            |    `F2`               |
| `key-52`     | `4`      |                                      `key-114`                            |    `F3`               |
| `key-53`     | `5`      |                                      `key-115`                            |    `F4`               |
| `key-54`     | `6`      |                                      `key-116`                            |    `F5`               |
| `key-55`     | `7`      |                                      `key-117`                            |    `F6` 
| `key-56`     | `8`      |                                      `key-118`                            |    `F7`         |
| `key-57`     | `9`      |                                      `key-119`                            |    `F8`        |
| `key-65`     | `A`      |                                      `key-120`                            |    `F9` |
| `key-66`     | `B`      |                                      `key-121`                            |    `F10` |
| `key-67`     | `C`      |                                      `key-122`                            |    `F11` |
| `key-68`     | `D`      |                                      `key-123`                            |    `F12` |
| `key-69`     | `E`      |                                      `key-144`                            |    `Num Lock` |
| `key-70`     | `F`      |                                      `key-145`                            |    `Scroll Lock` |
| `key-71`     | `G`      |                                      `key-186`                            |    `;` |
| `key-72`     | `H`      |                                      `key-187`                            |    `=` |
| `key-73`     | `I`      |                                      `key-188`                            |    `,`  |
| `key-74`     | `J`      |                                      `key-189`                            |    `-`  |
| `key-75`     | `K`      |                                      `key-190`                            |    `.`  |
| `key-76`     | `L`      |                                      `key-191`                            |    `/`  |
| `key-78`     | `N`      |                                      `key-192`                            |    ` |
| `key-79`     | `O`      |                                      `key-219`                            |    `[`  |
| `key-80`     | `P`      |                                      `key-220`                            |    `\`  |
| `key-81`     | `Q`      |                                      `key-221`                           |     `]`  |
| `key-82`     | `R`      |                                      `key-222`                            |    `'`  |
| `key-83`     | `S`      |                                                                  |                     |       |