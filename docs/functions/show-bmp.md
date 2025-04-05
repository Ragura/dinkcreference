# show_bmp

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype small>void show_bmp(string bmp_file[79], bool show_map_dot, int unused)</Prototype>

`show_bmp()` will display the specified `bmp_file` to the screen and the game will be paused. The `bmp_file` should be a path relative to the D-Mod's root directory, and any directories (tiles, graphics, etc) should be specified. If the bmp file cannot be found, it will look in the main game's root directory.

If `show_map_dot` is set to 1, the sequence 165 will be overlayed on the `bmp_file` and will be centered at the screen equivalent to that of the player's last known 'outside' position. DinkEdit allows you to define screens as 'inside', and if Dink is on one of these screens, his map position will be displayed as the last known screen that was not inside.

The `unused` parameter is not used at all, but it is required. Just set it to 0.

Once the player hits a button, the graphic will disappear and the game will be unpaused.

`show_bmp()` is generally used to show a map, or other full-screen information.

```c
// button6.c
void main ( void )
{
    //player map
    if (&s2-map == 0)
    {
        say("I don't own a map yet.",1);
        kill_this_task();
        return;
    }

    show_bmp("tiles\map1.bmp", 1, 0);
    kill_this_task();
}
```

<VersionInfo dink="1.07">

A couple bugs displaying the map dot: it would not be displayed properly if Dink was warped using DinkC or if he was on the 32nd screen of any row.

</VersionInfo>
