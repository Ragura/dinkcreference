# Enemies

Ah, enemies. Without them, Dink would just walk around and talk to people... what's the fun in that?

There are three basic types of enemies: **touchers**, **attackers**, and **casters**.

## Touchers

Touchers can only harm Dink if they touch him. In the original game, pillbugs and slimes were touchers.

Creating a toucher enemy is pretty simple. Let's recreate a basic pillbug enemy from scratch. By default, the pillbug graphics are loaded into sequences 131 and 133.

```c
// pillbug.c
void main(void)
{
    // An enemy shares some of the same commands as a character
    sp_base_walk(&current_sprite, 130);
    sp_speed(&current_sprite, 1);
    sp_brain(&current_sprite, 9);

    // Make it hurt Dink at most 4 hitpoints
    sp_touch_damage(&current_sprite, 4);

    // Let's make it die after 10 hitpoints of damage
    sp_hitpoints(&current_sprite, 10);

    // Give Dink a bit of experience if he kills it
    sp_exp(&current_sprite, 5);
}

void die(void)
{
    // It should respawn in 5 minutes
    int &editor_sprite = sp_editor_num(&current_sprite);
    if (&editor_sprite != 0)
        editor_type(&editor_sprite, 6);

    // Randomly create a small powerup
    &save_x = sp_x(&current_sprite, -1);
    &save_y = sp_y(&current_sprite, -1);

    external("emake","small");
}
```

At the start, it uses the same commands as a character, except that it has a `sp_brain` of 9. That means it's constantly moving, which makes more sense for little bugs and the like. The `sp_touch_damage` makes it so that it can actually harm Dink, the `sp_hitpoints` makes sure that it can die, and if it does, Dink will get a bit of experience courtesy of `sp_exp`.

When the pillbug dies, we make it so it will disappear for five minutes thanks to `editor_type()`, and we'll randomly create a powerup. This assumes that we have the `&save_x` and `&save_y` global variables defined. The original game includes the `emake.c` script, which has several functions that will randomly drop powerups for us.

We could make it a bit cooler by making it randomly `sp_target()` Dink, give it some `sp_defense`, or use playsound when it's hit. Check out `en-pill.c` in the original source to see how that works.

## Attackers

Attackers are similar to touchers, except when they get close to Dink they'll play an attack animation. In the original game, boncas, slayers, stone giants, knights, and goblins are attackers.

Let's create a basic Bonca based on our pillbug script.

```c
// bonca.c
void main(void)
{
    // An attacker shares some of the same commands as a toucher
    sp_base_walk(&current_sprite, 530);
    sp_speed(&current_sprite, 1);
    sp_brain(&current_sprite, 9);
    sp_touch_damage(&current_sprite, 2);
    sp_hitpoints(&current_sprite, 10);
    sp_exp(&current_sprite, 10);

    // Define the base sequence of the attack animation.
    sp_base_attack(&current_sprite, 540);

    // Make the tail damage when it hits
    sp_strength(&current_sprite, 5);

    // Swing at Dink if he's 40 pixels away
    sp_distance(&current_sprite, 40);

    // But the Bonca will only reach 35 pixels (giving Dink a bit of a chance)
    sp_range(&current_sprite, 35);

    // Let's try to kill Dink
    sp_target(&current_sprite, 1);

    // Define our attack wait variable for use later
    int &attack_wait = 0;
}

void attack(void)
{
    playsound(31, 22050,0,&current_sprite, 0);
    &attack_wait = random(4000, 0);
    sp_attack_wait(&current_sprite, &attack_wait);
} 

void die(void)
{
    // It should respawn in 5 minutes
    int &editor_sprite = sp_editor_num(&current_sprite);

    if (&editor_sprite != 0)
        editor_type(&editor_sprite, 6);

    // Randomly create a small powerup
    &save_x = sp_x(&current_sprite, -1);
    &save_y = sp_y(&current_sprite, -1);

    external("emake","medium");
}
```

As you can see, an attacker is fairly similar to a toucher, just with more commands.

In the main procedure, we define the `sp_base_attack`, `sp_strength`, `sp_distance`, and `sp_range` to make sure that the Bonca will attack correctly. We also make it `sp_target()` Dink right away.

Next we create a new procedure that wasn't in the pillbug script: attack. This is run whenever the Bonca tries to attack Dink. We make it so the Bonca can't attack over and over again with `sp_attack_wait()`: it must wait a random time between 0 and 4 seconds before it can attack.

The die procedure is almost the same, except we give the player a bit better of an award in `emake.c`.

We could make it a bit cooler by making it randomly `sp_target()` Dink, target any enemies that attack it, give it some `sp_defense`, or use `playsound()` when it's hit. Check out `en-bonc.c` in the original source to see how that works.

## Casters

Casters are similar to touchers, except that they randomly cast spells on their enemies. In the original game, dragons and the final boss were casters.

Here's an example of a magic pillbug that will randomly hurt Dink.

```c
// magicpil.c
void main(void)
{
    // An enemy shares some of the same commands as a character
    sp_base_walk(&current_sprite, 130);
    sp_speed(&current_sprite, 1);
    sp_brain(&current_sprite, 9);
    sp_touch_damage(&current_sprite, 4);
    sp_hitpoints(&current_sprite, 10);
    sp_exp(&current_sprite, 5);

    // Target Dink
    sp_target(&current_sprite, 1);

    // Wait between 1 and 3 seconds before casting a spell
    set_callback_random("harm", 1000, 2000);
}

void harm(void)
{
    say("`%<Casts Harm>", &current_sprite);
    hurt(1, 2);
}

void die(void)
{
    // It should respawn in 5 minutes
    int &editor_sprite = sp_editor_num(&current_sprite);

    if (&editor_sprite != 0)
        editor_type(&editor_sprite, 6);

    // Randomly create a small powerup

    &save_x = sp_x(&current_sprite, -1);
    &save_y = sp_y(&current_sprite, -1);

    external("emake","small");
```

Using `set_callback_random` allows us to specify our own custom spell of sorts. While this example uses hurt, we could even make the enemy attempt to shoot a fireball at Dink, or perform any other action made possible by DinkC.

Note that dragons (such as in `en-drag.c`) work a little bit differently. Sprites with a `sp_brain` of 10 will call their attack procedures randomly based on `sp_attack_wait`, regardless if they have a target within range.
