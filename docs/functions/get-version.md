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

Note: FreeDink Engine versions are not returned using this function, it will only return `108` (Or `107` if running in 1.07 mode). If you need to get the FreeDink engine version, this can be accomplished through DinkC, check out: [Version Checker](https://www.dinknetwork.com/file/version_checker/) on [The Dink Network](http://www.dinknetwork.com)
