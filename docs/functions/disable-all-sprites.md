# disable_all_sprites

<Prototype>void disable_all_sprites(void)</Prototype>

`disable_all_sprites()` disables all sprites on the current screen. The equivalent of this function is setting [sp_disabled()](./sp-disabled.md) to 1 for all sprites.

<VersionInfo dink="all" freedink="all">
In Dink Smallwood, DinkHD and FreeDink, this will not affect the most recently created sprite.
</VersionInfo>

Here is a nice work around that will accomplish the true intention of this command, and will disable all sprites instantly for those engines that don't do so correctly:

```c
 //there can be a maximum of 299 actve sprite numbers
 //we'll start at 2 to exlude Dink.
 //If you want to disable Dink as well, change the following line to 'int &getsp = 1;'
 int &getsp = 2;
 int &sprite_exist;
loop:
 //check if a sprite exists with this active sprite number
 &sprite_exist = sp_active(&getsp, -1);
 if (&sprite_exist > 0)
 {
  //this sprite exists - so disable it.
  sp_disabled(&getsp, 1);
 }
 if (&getsp < 299)
 {
  //increment active sprite number '&getsp' and loop.
  &getsp += 1;
  goto loop;
 }
 ```


To re-enable all disabled sprites, check out [enable_all_sprites()](./enable-all-sprites.md).
