# get_version

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int get_version(void)</Prototype>

`get_version()` returns the current DinkC version number times 100. This is very useful if you use functions or features that aren't supported in earlier versions of Dink.

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
