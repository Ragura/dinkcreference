# set_mode

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int set_mode(int mode)</Prototype>

`set_mode()` will set the game's state to mode. This will almost always be used in `start-1.c` or equivalent to change the game from mouse mode to normal mode.

```c
// excerpt from start-1.c
set_mode(2);
```

`set_mode()` merely returns the mode that was set.

| Mode | Name         | Description                                                                                                                |
|------|--------------|----------------------------------------------------------------------------------------------------------------------------|
| 0    | Startup      | When the game first starts. Will automatically change to Mode 1.                                                           |
| 1    | Title-screen | When the player interacts with the title screen. Must receive DinkC command to go onto Mode 2.                             |
| 2    | Intermediary | Loads the current screen, gets rid of the mouse object if [set_keep_mouse()](./set-keep-mouse.md) was not set. Automatically changes to Mode 3. |
| 3    | Normal       | Normal gameplay commences.                                                                                                |

::: warning
Please note that `set_mode(2)` will trigger a [draw_screen()](./draw-screen.md), but it will not occur until the next [wait()](./wait.md) line. This can cause some issues when loading from the title screen in some circumstances.
To make sure no issues occur you can download the `start2.c` script below with this fix applied:
[Fixed start2.c](https://drive.google.com/file/d/1ReazgS92v9hPHylhglIYIsoogk_O-CMP/view?usp=sharing)
