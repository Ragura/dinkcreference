# sp_que

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_que(int active_sprite, int que[-1])</Prototype>

`sp_que()` gets or sets the `que` value for the `active_sprite`.

If the `que` is 0, the sprite will default to using its [sp_y()](./sp-y.md) value as its que.

If the `que` is any other value, it will use that as its que.

The que determines whether sprites appear in front or behind other sprites.

If every sprite's que is 0, sprites that have lower [sp_y()](./sp-y.md) values (near the top of the screen) will appear behind sprites that have higher [sp_y()](./sp-y.md) values (near the bottom of the screen). This is how Dink can appear to walk in front of a fence if his [sp_y()](./sp-y.md) value is greater than the fence's, and behind a fence if Dink's [sp_y()](./sp-y.md) value is less than the fence's.

However, sometimes it is necessary to define a sprite's `que` value. For instance, if you plan on creating a table and intend to place food on it, there is a good chance the food will have a lower [sp_y()](./sp-y.md) value than the table, making it appear to be under the table. To fix this, use `sp_que()` to set a que at least one greater than the table's [sp_y()](./sp-y.md) value.

You might be tempted to always use 1000 or -1000 to make sure sprites appear above and below each other. However, if the player walks in front of the table, then the food would appear to be over his head! This isn't very good. So, it is best practice to use as small differences in que values as possible.

To put another way... setting the `sp_que` value is sort of like saying *"Hey, don't move the sprite, but pretend that it has a `sp_y` value of que so that it appears correctly in regards to other sprites."*
