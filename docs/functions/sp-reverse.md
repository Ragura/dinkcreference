# sp_reverse

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>bool sp_reverse(int active_sprite, bool reverse[-1])</Prototype>

`sp_reverse()` gets or sets the reverse animation value for `active_sprite`.

If reverse is 0 (default), any animation performed by `active_sprite` will be in order from 0 to the end of the sequence.

If `reverse` is 1, any animation performed by `active_sprite` will be backwards starting from the last frame of the sequence to 0.

Note that it is possible to toggle the `sp_reverse` flag during the course of an animation.

```c
// Excerpt from start-1.c
void buttonon(void)
{
    sp_pframe(&current_sprite, 2); // "light up" button
    playsound(20,22050,0,0,0); // play sound
    &crap = create_sprite(204, 86, 0, 199, 1); // create arrow
    sp_reverse(&crap, 0); // set seq to forward
    sp_noclip(&crap, 1); // don't clip if in status areas
    sp_seq(&crap, 199); // play arrow sequence
}

void buttonoff(void)
{
    sp_pframe(&current_sprite, 1); // turn off" button
    playsound(21,22050,0,0,0); // play sound
    sp_reverse(&crap, 1); // set seq. to reverse
    sp_seq(&crap, 199); // play arrow sequence
    sp_brain(&crap, 7); // kill when seq. done
}
```
