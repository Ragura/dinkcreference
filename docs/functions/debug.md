# debug

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void debug(string line[199])</Prototype>

`debug()` will write line to `debug.txt` and display it on the screen if the game is in debug mode. Variable names can be used inside the string.

<VersionInfo freedink="">

Note that when `DEBUG` is active the `DEBUG.TXT` file will quickly grow in size and become bloated by several *"Surface doesn't have a colorkey"* reports.

</VersionInfo>
