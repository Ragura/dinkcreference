# What is DinkC?

DinkC is a scripting language created specifically for Dink Smallwood. The language powers almost everything game-related, such as conversations, cutscenes, enemies, and more.

- The format superficially resembles C/C++.
- Supports procedural structure.
- Up to 249 concurrent variables at one time.

Both local and global dynamic variable creation with custom names. All globals you create are saved with the player data file automatically.

Ability to attach a DinkC script to an object, person, monster, or screen.

Up to 200 DinkC scripts can be running at the same time.

If an object has a script attached to it, and that object is hit, talked to, killed, etc., it will automatically look in its script for predefined procedures like `hit()`, `die()`, `attack()` or `talk()`.

Run with the `-DEBUG` command-line option, Dink.exe will report all errors/debug strings in `DEBUG.TXT`.

::: warning Bloated DEUBG.TXT in FreeDink
<VersionInfo freedink="109.6"></VersionInfo>Note that when DEBUG is active the DEBUG.TXT file will quickly grow in size and become bloated by several "Surface doesn't have a colorkey" reports.
:::


You will be writing DinkC scripts that control the events and underlying rules of your D-Mod. If you have a firm grasp on programming language basics, you might want to skim along these introductory sections to understand the limitations of DinkC.
