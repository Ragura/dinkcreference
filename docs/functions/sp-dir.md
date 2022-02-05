# sp_dir

<Prototype>int sp_dir(int active_sprite, int direction[-1])</Prototype>

`sp_dir()` gets or sets the `direction` the `active_space` is facing. While a direction can be set for any active sprite, it will only affect sprites with a [sp_base_walk()](./sp-base-walk.md).

The direction is a number, where the numbers 1-9 represent directions based on the numpad. See the table below.

| Direction # | Direction |
|:-----------:|:---------:|
|      1      |     ↙     |
|      2      |     ↓     |
|      3      |     ↘     |
|      4      |     ←     |
|      5      |   Death   |
|      6      |     →     |
|      7      |     ↖     |
|      8      |     ↑     |
|      9      |     ↗     |
