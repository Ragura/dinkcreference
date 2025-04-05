# screenlock

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>bool screenlock(bool is_screenlocked[-1])</Prototype>

`screenlock()` will get or set the value of `is_screenlocked`. Dink is unable to walk off the screen if `is_screenlocked` is 1, the sidebars will also be replaced with the screenlock graphics.

<VersionInfo dink="1.07">

- it was possible to walk past hardness on the edge of a screenlocked screen.
- it was not possible to get the `is_screenlocked` value; you can only set it.

</VersionInfo>
