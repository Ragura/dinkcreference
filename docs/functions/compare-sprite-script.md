# compare_sprite_script

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int compare_sprite_script(int active_sprite, string script[9])</Prototype>

`compare_sprite_script()` returns '1' if a script named script is attached to active_sprite.

This command was used several times in the original game in a `hit()` procedure to tell if sprite was hit by a bomb.

```c
// Excerpt from s4-rock.s
void hit( void )
{
    int &rcrap = compare_sprite_script(&missle_source, "dam-bomn");
    if (&rcrap == 1)
    {
        //rock just got hit by a sprite with a script named dam-bomn, I'm
        //gonna guess it was the bomb.
    }
}
```
