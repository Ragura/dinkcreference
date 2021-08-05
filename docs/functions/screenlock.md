# screenlock

<Prototype>bool screenlock(bool is_screenlocked[-1])</Prototype>

`screenlock()` will lock the screen so Dink is unable to walk off of it if `is_screenlocked` is 1. The sidebars will also be replaced with the screenlock graphics.

<VersionInfo dink="1.08"></VersionInfo>`is_screenlocked` can be set to -1 to return whether or not the screen is currently locked.

<VersionInfo dink="< 1.08"></VersionInfo>It was possible to walk past hardness on the edge of a screenlocked screen.
