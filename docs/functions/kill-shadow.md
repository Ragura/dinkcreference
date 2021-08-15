# kill_shadow

<Prototype>void kill_shadow(int active_sprite)</Prototype>

`kill_shadow()` will remove any shadow sprites (`sp_brain` 15) attached to the `active_sprite`. See [sp_brain](./sp-brain.md) on how to create shadow sprites. This is only necessary if the shadow dies before the sprite with a shadow... when an active sprite dies, it will kill any shadows it has.

```c
// Modified excerpt from dam-fire.c
void damage( void )
{
    //sound effect
    playsound(18, 8000,0,0,0);

    // kill just the fireball's shadow
    // ...    
    kill_shadow(&current_sprite);
}
```
