# sp_active

<Prototype>int sp_active(int active_sprite, bool active[-1])</Prototype>

`sp_active` gets or sets the active value of the `active_sprite`.  In this context, a sprite with an active attribute of 1 is a sprite that exists.  If a sprite is not active, it's gone, vamoose, getteratto.  It is not possible to resurrect an inactive sprite.<br>

`sp_active` will not kill a sprite immediately, it will do so after the next [wait()](./wait.md)

This is similar to setting an [sp_kill()](./sp-kill.md) value of 1 for `active_sprite`. 


One marginally useful purpose of this function is to check to see if a sprite still exists.  This will not always be correct, as the create_sprite function will create new sprites that re-use the sprite numbers of dead sprites.

```c
int &check = sp_active(&some_sprite, -1);
if (&check == 1)
{
      // it's still active! (probably)
}

```


Note that setting an active value to 1 will have no affect, as it can only affect active sprites which already have an active value of 1.

`sp_active` does not seem to have any use in regards to Dink.  It does disable the human brain (including all keyboard input), but that could easily be accomplished with the safer alternative of [sp_freeze()](./sp-freeze.md) and [sp_disabled()](./sp-disabled.md).

