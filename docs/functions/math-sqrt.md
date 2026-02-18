# math_sqrt

**Version:** <VersionInfo dink="1.08" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int math_sqrt(int value)</Prototype>

`math_sqrt()` returns the square root of the absolute value of `value`.

Please note the following exception:
<VersionInfo dink="">Math_sqrt(-2147483648) returns 0</VersionInfo>
<VersionInfo freedink="" dinkhd="" yedink=""><br>Math_sqrt(-2147483648) returns -2147483648</VersionInfo>