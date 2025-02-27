# enable_all_sprites

<Prototype>void enable_all_sprites(void)</Prototype>

`enable_all_sprites()` enables all sprites that have been disbled with [disable_all_sprites()](./disable-all-sprites.md) or [sp_diabled()](./sp-disabled.md). 

<VersionInfo dink="all" freedink="all">
In Dink Smallwood, DinkHD and FreeDink, this will not affect the most recently created sprite.
</VersionInfo>

Here is a nice work around that will accomplish the true intention of this command, and will disable all sprites instantly for those engines that don't do so correctly:

```c
//there can be a maximum of 299 actve sprite numbers
//check every active sprite number for active sprites and enable them all
int &getsp = 1;
int &sprite_exist;
loop:
//check if a sprite exists with this active sprite number
&sprite_exist = sp_active(&getsp, -1);
if (&sprite_exist > 0)
{
    //this sprite exists - so enable it.
    sp_disabled(&getsp, 0);
}
if (&getsp < 299)
{
    //increment active sprite number '&getsp' and loop.
    &getsp += 1;
    goto loop;
}
```
