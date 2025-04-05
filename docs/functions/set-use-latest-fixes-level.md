# set_use_latest_fixes_level

**Version:** <VersionInfo yedink="0.95+" standalone />&nbsp;<VersionInfo dinkhd="2.08+" standalone />

<Prototype>int set_use_latest_fixes_level(int fixes_level[-1])</Prototype>

`set_use_latest_fixes_level` gets or sets the value of `fixes_level`.  <br>

If `fixes_level` is set equal to or greater than `1`, it fixes missile damage, making it possible to hit for maximum damage when set to an odd value, rather than only hitting for a maximum of 1 less than the odd value.

<VersionInfo dinkhd=""> 

`fixes_level` of `1` also fixes the `/=` operator, allowing it to work correctly when using a function as the divisor, rather than dividing by the last function to have been calculated.

</VersionInfo>