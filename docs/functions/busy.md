# busy

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int busy(int active_sprite)</Prototype>

`busy()` returns the active sprite number of the text sprite the `active_sprite` is currently saying. If 0, `active_sprite` is not currently talking.

It has been used to see if a sprite is busy or not (hence the function name), but problems may occur if `active_sprite` is in the middle of a conversation and isn't currently talking. Checking to see if the sprite is frozen with [sp_freeze()](./sp-freeze.md) is probably a better option.

One useful purpose of this function is to check if a sprite is currently saying something when it dies, and if so, kill off the text sprite. This will prevent the bug of the text sprite surviving, and instantly jumping to a different position on the screen.

```c
void die(void)
{
 //if this sprite is saying something, kill the text sprite
 int &gettext = busy(&current_sprite);
 if (&gettext > 0)
 {
  sp_active(&gettext, 0);
 }
}
```