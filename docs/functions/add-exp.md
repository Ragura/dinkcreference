# add_exp

<Prototype>void add_exp(int amount, int active_sprite)</Prototype>

`add_exp()` adds amount experience and creates a text-sprite to float above `active_sprite`.

<VersionInfo dink="< 1.07">Requires that `active_sprite` was last hit by Dink.</VersionInfo><br>
<VersionInfo dink="1.08">Will work with any active_sprite.</VersionInfo>

For most situations `sp_exp()` will work well enough and will automatically add and display the experience addition properly. However, if you change a monster's brain when it dies, Dink won't get the experience points. Here is an example of a work-around:

```c
void die(void)
{
    freeze(&current_sprite);
    // give Dink his experience:
    int &dinks_exp = sp_exp(&current_sprite, -1);
    add_exp(&dinks_exp, &current_sprite);
    // if sprite was placed by the editor, make it not come
    back:
    int &hold = sp_editor_num(&current_sprite);
    if (&hold != 0)
    {
        editor_type(&hold, 1);
    }
    //shrink to this percent then die:
    sp_brain_parm(&current_sprite, 10);
    sp_brain(&current_sprite, 12);
}
```

It could also be useful in giving Dink experience for quests, so the player can see how much experience they got.

```c
void talk(void)
{
    freeze(1);
    freeze(&current_sprite);
    say_stop("`6Yeah, this is one tough quest, talk to me. Jeez.", &current_sprite);
    wait(500);
    say_stop("Where's my exp?", 1);
    wait(250);
    add_exp(300, &current_sprite);
    wait(250);
    say_stop("`6There you go.", &current_sprite);
    unfreeze(&current_sprite);
    unfreeze(1);
}
```
