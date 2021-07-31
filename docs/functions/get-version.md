# get_version

<Prototype>int get_version(void)</Prototype>

`get_version()` returns the current version number times 100. This is very useful if you use functions or features that aren't supported in earlier versions of Dink.

```c
//start.c example
int &version = get_version();
if (&version < 108)
{
    choice_start();
    title_start();
    Dink Smallwood v1.08 is required to run this D-Mod!
    title_end();
    "Exit"
    choice_end();
    kill_game();
}
```
