# loopmidi

<Prototype>void loopmidi(bool loop_midi)</Prototype>

`loopmidi()` sets whether or not midis will automatically loop. If `loop_midi` is 1, midis will loop, and if it is 0, midis will not loop.

This setting is not stored in the save game file. If you load a game to a screen that doesn't automatically play a midi and midis are set to loop, the game may start the previously-playing midi over again.
