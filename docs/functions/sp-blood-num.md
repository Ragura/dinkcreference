# sp_blood_num

<Prototype>int sp_blood_num(int active_sprite, int random[-1])</Prototype>

`sp_blood_num()` sets the `random` number of sequences for the `active_sprite` to choose as blood when attacked, the return value is the value of [sp_blood_seq()](./sp-blood-seq.md). Using the default value of 3, the `active_sprite` will play a blood sequence between 187 (the default sp_blood_seq) and 189 (187 + 2).

Note that the `sp_blood_num` default is actually 0, but the engine will interpret this as 3 to maintain backwards compatibility.

To use a custom blood, both the [sp_blood_seq()](./sp-blood-seq.md) and `sp_blood_num()` must have a non-default value.
