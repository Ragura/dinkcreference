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

There are three simple concepts that the engine uses to link scripts to the game: Attachment, Calling, and Summoning.

### Attachment

Scripts can be linked to sprites (monsters, people, houses, etc) and screens through a process called attachment.

Usually this is done in the map editor, but you can also use the internal function sp_script to attach a script to a sprite while the game is running.

An attached script defines the behaviour of the sprite or screen by automatically running several predefined procedures under certain circumstances, such as when the script is first run.

If you create a sprite in the map editor and attach our grocery.c script to it, Dink will say the grocery list whenever he first sees that sprite in the game.

### Calling

Calling is when a script creates and executes another script. This is done using the external and spawn internal functions.

Using external is almost like engaging in a telephone conversation, where the caller script will wait until the other script is done before continuing on:

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

`spawn()` will create a completely new script that will survive and do things long after the spawner script has died:

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

Note that the above example is a bit flawed... scripts that are spawned will survive forever unless explicitly killed with `kill_this_task()`. To fix this, we could add `kill_this_task();` after the `unfreeze(1);` line of `grocery.c`.

### Summoning

Sometimes the game itself will summon some scripts in response to specific events or input by the player. This includes item and magic scripts that are added to the player's inventory with `add_item()` and `add_magic()`.

Take a look at the list of all scripts summoned by the game (except input, magic and item scripts). Usually these summoned scripts will run forever unless explicitly killed with `kill_this_task()`. Also, the engine will usually attempt to run the `main` procedure, though exceptions are noted for `lraise` and `dinfo`.

| Script     | When is it run?                                                         |
|------------|-------------------------------------------------------------------------|
| `dinfo`    | When Dink dies. `die()` procedure.                                      |
| `dnomagic` | When Dink tries to use magic, but doesn't have any magic armed.         |
| `dnotalk`  | When Dink talks and no talking sprites are around.                      |
| `lraise`   | When Dink gains enough experience to gain a level. `raise()` procedure. |
| `main`     | When the game first starts up.                                          |
| `start`    | When the game is first active, after `main.c`.                          |
| `start`    | When the game is first active, after `main.c`.                          |
