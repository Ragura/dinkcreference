# create_sprite

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int create_sprite(int x, int y, int brain, int sequence, int frame)</Prototype>

`create_sprite()` creates a new sprite with the given *x, y, brain, sequence,* and *frame*. It returns the active sprite number. Note that the sequence and frame are equivalent to [sp_pseq()](./sp-pseq.md) and [sp_pframe()](./sp-pframe.md).

It is strongly recommended to specify the brain, sequence, and frame, and don't set them to 0. There is a bug in the dink engine that can cause a newly-created sprite to run its touch procedure otherwise.

`create_sprite()` can be used to create rewards for killing a monster, like this red heart:

```c
int &redheart = create_sprite(&save_x, &save_y, 6, 54, 1);
sp_script(&redheart, "heart");
```
