# sp_blood_seq

<Prototype>int sp_blood_seq(int active_sprite, int sequence[-1])</Prototype>

`sp_blood_seq()` gets or sets the starting sequence that the `active_sprite` will use as blood when attacked. Using the default value of 187, the `active_sprite` will play a blood sequence between 187 and 190 (187 + 3, the default [sp_blood_num()](./sp-blood-num.md)).

Note that the `sp_blood_seq` default is actually 0, but the engine will interpret this as 3 to maintain backwards compatibility.
