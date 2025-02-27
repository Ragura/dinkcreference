# preload_seq

<Prototype>void preload_seq(int sequence)</Prototype>

`preload_seq()` loads the specified graphic sequence into memory if it has not already been loaded.

<VersionInfo dink="< 1.08">

This command was recommended before playing a sequence or creating a sprite that may be new. Otherwise, the sprite could be invisible for a brief amount of time.

</VersionInfo>

<VersionInfo dink="1.08" freedink="all" yedink="all">

The game will automatically load any sequences on-the-fly without delay. However, this will cause a slight pause as the game loads the sequences, so you may want to keep using `preload_seq()` in the `main()` procedure of sprites with several animations to prevent this small pause.

</VersionInfo>

::: tip Note:
<VersionInfo dink="HD">

n DinkHD `preload_seq()` does not do anything. However it may be required in some situations due to DinkHD reaching the graphics allocation limit and purging graphics from memory. As a work-around use [init()](./init.md) to load sequences before using them if you notice this happening.

</VersionInfo>

If `preload_seq()` is used in the `main()` procedure of a screen's base script (before any [wait()](./wait.md) commands), the *Please Wait* banner will be displayed as the game loads the necessary graphics.