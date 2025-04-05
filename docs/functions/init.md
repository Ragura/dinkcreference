# init

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void init(string[199] dink_ini_line)</Prototype>

`init()` allows you to execute a line normally run from the `dink.ini` file. It can be used to replace graphics on the fly, such as for Dink's weapons, or anything else.



```c
// excerpt from item-sw1.c
init("load_sequence_now graphics\dink\sword\walk\d-sw1- 71 43 64 69 -14 -10 14 10");
init("load_sequence_now graphics\dink\sword\walk\d-sw2- 72 43 35 70 -21 -10 19 10");
init("load_sequence_now graphics\dink\sword\walk\d-sw3- 73 43 28 69 -13 -9 13 9");
init("load_sequence_now graphics\dink\sword\walk\d-sw4- 74 43 66 75 -14 -12 20 12");
```
<br>
<VersionInfo dink="1.07">
`init()` only works well if the graphics are in `dir.ff` format. If the graphics are plain bmps, and the replaced sequence is played, it may include frames from other sequences.

If replacing sequences with different numbers of frames, the longest sequence should be loaded first in the `dink.ini`, otherwise it might replace frames in other sequences.
</VersionInfo>

For more information on `dink.ini` lines, see [Graphics](../guide/graphics.md)
