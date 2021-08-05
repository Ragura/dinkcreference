# sp_blood_num

<Prototype>int sp_blood_num(int active_sprite, int random[-1])</Prototype>

`sp_blood_num()` gets or sets the `random` number of sequences for the `active_sprite` to choose as blood when attacked. Using the default value of 3, the `active_sprite` will play a blood sequence between 187 (the default sp_blood_seq) and 190 (187 + 3).

Note that the `sp_blood_num` default is actually 0, but the engine will interpret this as 187 to maintain backwards compatibility.
