# hurt

<Prototype>void hurt(int active_sprite, int damage)</Prototype>

`hurt()` damages `active_sprite` with damage amount of damage. Note that it will damage an exact amount, but it does take defense into account. Also, there is still a chance of 1 damage if the defense of `active_sprite` is higher than `int damage`.

This function will trigger the `hit()` procedure of `active_sprite` (even if no damage is dealt), unless `active_sprite` is set to [nohit](./sp-nohit.md)
::: warning Common error
If `active_sprite` is currently executing a procedure when it is hurt using `hurt()`, and the `hit` procedure is called, the hit procedure will continue past `}` and into code afterwards.
:::
<br>

If the `active_sprite` receives damage, blood spurts are added, free of charge.

<VersionInfo dink="< 1.08">

- A negative damage value would cause the game to freeze.

- If the script that calls this function is attached to a sprite, [Required global variable](../guide/variables.md#required-global-variables) `&enemy_sprite` will be updated to `&current_sprite`.

- If the script that calls this function is not attached to a sprite [Required global variable](../guide/variables.md#required-global-variables) `&enemy_sprite` will be updated to `0`.

</VersionInfo>

<VersionInfo dink="1.08" freedink="all">

- Ignores the command safely when a negative value is given.

- If the script that calls this function is attached to a sprite, [Required global variables](../guide/variables.md#required-global-variables) `&enemy_sprite` and `&missle_source` will be updated to `&current_sprite`.

- If the script that calls this function is not attached to a sprite [Required global variables](../guide/variables.md#required-global-variables) `&enemy_sprite` and `&missle_source` will be updated to `0`.

</VersionInfo>

This function can be used to add damage to a previous attack, and the engine will treat it all as one attack (it will show only one text sprite, equal to all the damage, rather than a separate text sprite for the `hurt` damage amount).
For this to work, `hurt()` must be run inside a sprite's hit procedure, before any function that causes the script to "yield the floor", such as [wait()](./wait.md), [say()](./say.md), [say_stop()](./say-stop.md), or similar commands.
If using it this way, you must briefly enable [nohit](./sp-nohit.md) for the `active_sprite`, run the `hurt` command, and then disable [nohit](./sp-nohit.md) again, otherwise `hurt` will trigger the `hit` procedure again, looping it infinitely.
This is much simpler than it sounds, and visualised below in DinkC format, you can see it has it's useful applications. In this example we are giving a random chance for a critical hit, which will add to the damage dealt by the player:

```c
//script attached to an editor place enemy. 
//Hitpoints, brain, base walk and touch damage have been set in the editor.

void main(void)
{
 //declaring local variable required for critical hit chance
 int &crit;
}

void hit(void)
{
 //Give a 1 in 10 chance of critical hit. 
 &crit = random(10, 1);
 if (&crit == 1)
 {
  //get a random value between 5 and 10 to add as critical damage bonus
  &crit = random(6, 5);

  //briefly disable nohit so hurt doesn't trigger the hit procedure again
  //this brief change is too quick to affect or interrupt anything else, so this is safe to do.
  sp_nohit(&current_sprite, 1);
  
  //apply the extra damage using hurt()
  hurt(&current_sprite, &crit);
  
  //disable nohit again
  sp_nohit(&current_sprite, 0);
 }
}
```