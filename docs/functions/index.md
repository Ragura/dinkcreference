---
sidebarDepth: 2
---

# Internal functions

This section is dedicated to the dozens of internal functions provided by the Dink engine. Reading through them all probably won't be very useful. After reading this introduction section, you'll probably want to skip to Techniques.

Each function lists one or more categories, a prototype, version, and description. For version, if only a Dink Engine name is listed in the version tag with no version number, that means the function is available in *all* versions of that engine.

A prototype tells you what kind of value the function returns, and what kind of values you can give the function. For example:

*int sp_custom(string key[19], int active_sprite, int value[-1]);*

The first `int` implies that the function returns an integer value.

The `string key[19]` tells you that the first parameter must be a string (i.e. within quotes), and can only contain up to 19 characters. This is a rough guideline, and it may work fine with more characters. However, strange behavior may result if this limit is exceeded (such as the game crashing).

The `int active_sprite` tells you that the second parameter must be an active sprite number.

The `int value[-1]` tells you that the third parameter is the value related to this function. Passing in a -1 will not modify the sprite's value, and will cause it to return the current value. Passing in any other number will modify the sprite's value.

A bool is just a fancy way of saying 1 or 0. It is possible to pass in other values, but you may not like the strange results.
