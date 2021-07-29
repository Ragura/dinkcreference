# Items

With DinkC, you can make unlimited items. The only limit is Dink can only hold 16 in his inventory at one time. This isn't because Seth was a lazy programmer (for once), but because he believed having to manage your items and not being able to stockpile too many healing potions would make Dink a better game.

Everything below also applies to magic. The difference between magic and items/weapons is you only have 8 magic slots, and a different button is used to activate magic. Magic also differs in that its `use()` procedure runs any time <kbd>shift</kbd> is down and `&magic_level` is equal to `&magic_cost`; whereas weapon items run their `use()` procedure once (only) each time the player presses <kbd>ctrl</kbd>. In other words, if Dink's magic recharges fast enough, a magic attack will repeat automatically as long as the <kbd>shift</kbd> key is held down, but the <kbd>ctrl</kbd> key has to be released and pressed again to repeat a melee attack.

So, Dink can carry at most 24 items at once.

This means adding a new weapon that shoots an animation of your face across the screen with its own sound effect is very easy to do! Though, well, creating the weapon won't be very easy. But once you create the graphic for the weapon in the pack, the animation of the weapon in use, its sound effect, and a script to control every aspect of the weapon's behavior, the final step of adding it to the game is indeed easy.

You can completely control the behavior of any item. First, you need to give the player the item using `add_item()` or `add_magic()`.

The rest is handled by the item's script itself. The best way to understand how it works is to look at `item-fst.c` -- but I'll explain anyway.

As soon as an `add_item()` or `add_magic()` command is called, the `pickup()` procedure is called from the script. If simply having this item in your inventory does something magical, the `pickup()` procedure is the place to do it. When the player clicks on it to arm it, the script is loaded into memory and two procedures from it are called.

First it looks for the `arm()` procedure and runs this. This is where you would add 8 to the strength or change the player attack animation using init commands.

Second, it looks for the `armmovie()` procedure - any special thing like Dink saying, *"wow, I just armed so and so"* is said here. This is only called if the *player* arms the weapon. It is not called if `arm_weapon()` is used.

When the item is disarmed, it runs the `disarm()` procedure from the item's script. Use a `kill_this_task()` at the end of it to make sure the item script dies.

Also, note that `load_game()` runs the `disarm()` and then the `arm()` procedure in Dink's currently armed weapon and magic. It does not, however, run `armmovie()`.

Check out predefined procedures for the other procedures the engine will call for item scripts.
