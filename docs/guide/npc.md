# Non-player characters

Your D-Mod will probably have several non-player characters (NPC) walking about. They might give the player quests or just provide some amusement. But they should walk around before the player talks to them, right?

So how might you create such a digital person? First, in the map editor, place a character on the screen. Select whatever type of person you want. Note what the sequence number of this person is. If we select Dink's mom, for instance, we'll note that the sequence number is 351.

Then, attach a script to the character. Let's call it 'person' for now. Then we create `person.c` in the D-Mods story directory, and start out with this template:

```c
// person.c
void main(void)
{
    // Take whatever sequence you had and round it down by 10.
    // 351 = 350, 383 = 380.
    sp_base_walk(&current_sprite, 350);

    // Give it a speed so it actually moves around.
    sp_speed(&current_sprite, 1);

    // Use the smart person brain so the character walks around intelligently.
    sp_brain(&current_sprite, 16);
}
```

And that's it. Every character should have, at the very least, a `sp_base_walk`, `sp_speed`, and `sp_brain`. With this, our character will walk, stop, look around, and walk again.

If you notice that the character moves but doesn't animate, make sure the `sp_base_walk` is set.

If you notice that the character doesn't move at all, make sure that it is not set as hard in the map editor and that it has a `sp_speed` and `sp_brain`.

## Conversation

A walking and looking character is nice and all... but what about a talking character?

First, we'll have to create a talk procedure. This will be triggered if the player presses the space bar in the general area of our character. The talk procedure should contain three main sections: freezing, saying, and unfreezing.

Let's add this at the bottom of `person.c`:

```c
// person.c
void talk(void)
{
    // Let's freeze them both
    freeze(1);
    freeze(&current_sprite);

    // Converse!
    say_stop("Hi", 1);
    wait(250);
    say_stop("`8Hello, Dink. My text is a different color!", &current_sprite);
    wait(250);
    say_stop("Indeed it is.", 1);
    wait(250);
    say_stop("Well, I'll be going now, see you later.", 1);
    wait(250);
    say_stop("`8Bye Dink!", &current_sprite);

    // Remember to unfreeze them!
    unfreeze(1);
    unfreeze(&current_sprite);
}
```

It is always a good idea to freeze the player and the character before they start talking. Otherwise, the player or the character could just walk away during the conversation! That'd be quite rude.

Saying and waiting are interlinked. If the characters just say stuff over and over without any pause, it just doesn't feel quite right. So we'll usually put a `wait(250);` or so between `say_stop()` statements. We'll also want to give the character a different color text than Dink, so the player can easily tell the difference between what Dink is saying and what the character is saying.

And finally, we'll unfreeze the characters at the end so the player and character can walk around freely.

## Choice Menu

Conversation is quite swell, but sometimes we want characters to say a lot of dialogue. But we don't want to say everything whenever the player talks to the character, so we use choice statements to give the player a choice of what they want to talk about.

Let's delete the previous conversation in person.c, and create a new talk procedure with a choice statement. The talk procedure should contain four main sections: freezing, deciding, saying, and unfreezing.

```c
// person.c
void talk(void)
{
    // Let's freeze them both
    freeze(1);
    freeze(&current_sprite);

    // A decision!
    choice_start();
        "Say Hello"
        "Say Happy Birthday"
        "Leave"
    choice_end();

    // Converse!
    if (&result == 1)
    {
        say_stop("Hi", 1);
        wait(250);
        say_stop("`8Hello, Dink. My text is a different color!", &current_sprite);
        wait(250);
        say_stop("Indeed it is.", 1);
        wait(250);
        say_stop("Well, I'll be going now, see you later.", 1);
        wait(250);
        say_stop("`8Bye Dink!", &current_sprite);
    }

    if (&result == 2)
    {
        say_stop("Happy Birthday!", 1);
        wait(250); say_stop("`8Uh... it isn't my birthday.", &current_sprite);
        wait(250);
        say_stop("Whoops." 1);
    }

    // Remember to unfreeze them!
    unfreeze(1);
    unfreeze(&current_sprite);
}
```

Within the `choice_start()` and `choice_end commands()` are three choices the player can choose from. If the player chooses the first option, *"Say Hello"*, the required global variable `&result` will be 1. We use the if statement to check this, and to say the appropriate thing.

The choice statement can support up to 20 different choices. If you specify so many that it can't display them all at once, the player can press down to scroll through all of them.

Choice statements can get more complicated. For instance, we could insert a title:

```c
choice_start();
title_start();
    What do you want to say?
title_end();
    "Hello"
    "Happy Birthday"
    "Nothing"
choice_end();
```

This title will appear above the choices, giving some context to the choices.
We can also adjust the y coordinate of the choices and the color of the title text:

```c
choice_start();
set_y 240
set_title_color 15
title_start();
    What do you want to say?
title_end();
    "Hello"
    "Happy Birthday"
    "Nothing"
choice_end();
```

`set_y` is used in case the title overlaps the choices. We can set the y coordinate to a greater value to make sure the choices appear underneath the title.

`set_title_color` changes the color of the title text, using the `set_font_color` color numbers.

Finally, we can choose to display some choice statements and not others. For instance, say that we have a healing character. We only want it to display a choice to heal Dink if he's hurt. We'll do something like this:

```c
// healer.c
void talk(void)
{
    // Let's freeze them both
    freeze(1);
    freeze(&current_sprite);

    // A decision!
    choice_start();
        (&life < &lifemax) "Heal me!"
        "Leave"
    choice_end();

    // Converse!
    if (&result == 1)
    {
        &life = &lifemax;
        say_stop("`4You are healed!", &current_sprite);
    }

    // Remember to unfreeze them!
    unfreeze(1);
    unfreeze(&current_sprite);
}
```

The parenthesis before the choice act like mini if statement conditions. The `&result` variable will contain the appropriate choice number even if some aren't visible.

It is also possible to stack these conditions on one choice.

```c
choice_start();
    (&life < &lifemax) (&gold > 50) "Heal me!"
    "Leave"
choice_end();
```

## Plot

Chances are your D-Mod will have some sort of plot, where the player accomplishes certain goals, and the characters should respond appropriately.

To start with, we'll need to create a new global variable in main.c. Let's call it `&story`, and give it a default value of 0.

```c
// excerpt from main.c
void main(void)
{
    // .....
    make_global_int("&story", 0);
}
```

Let's create a very, very simple goal for Dink. Let's say we create two characters on a screen. One character will ask Dink to tell the other character something, and give him some gold after Dink does so.

For our first character, we need to ask the player to do something, remind the player what to do, and reward the player after they've done it. But we only want to ask and reward the player once.

```c
// person1.c
void talk(void)
{
    // Let's freeze them both
    freeze(1);
    freeze(&current_sprite);

    // Ask the player to do something
    if (&story == 0)
    {
        say_stop("Hi.", 1);
        wait(250);
        say_stop("`8Hi Dink.", &current_sprite);
        wait(250);
        say_stop("`8Hmm... could you tell that person standing", &current_sprite);
        say_stop("`8over there to stop talking to himself?", &current_sprite);
        wait(250); say_stop("What's in it for me?", 1);
        wait(250);
        say_stop("`850 gold.", &current_sprite);
        wait(250);
        say_stop("I'll think about it", 1);

        // Change the &story variable so we know that Dink has been asked.
        &story = 1;

        // Skip to the end of the conversation so they don't say the next thing.
        goto done;
    }

    // Remind the player
    if (&story == 1)
    {
        say_stop("`8Did you tell him to stop talking to himself?", &current_sprite);
        wait(250);
        say_stop("Gar, I knew there was something I was supposed to do.", 1);
        wait(250);
        say_stop("I'll get 50 gold, right?", 1);
        wait(250);
        say_stop("`8Yep.", &current_sprite);
    }

    // Reward the player
    if (&story == 2)
    {
        say_stop("Alright, I told him to stop.", 1);
        wait(250);
        say_stop("`8Thank you! Here's your gold.", &current_sprite);
        &gold += 50;

        // Change the &story variable so we know that Dink has been rewarded
        &story = 3;

        // Skip to the end of the conversation so they don't say the next thing.
        goto done;
    }

    // Just a quick hello
    if (&story == 3)
    { 
        say_stop("Hi.", 1);
        wait(250);
        say_stop("`8Hi Dink.", &current_sprite);
    }

    done:
    // Remember to unfreeze them!
    unfreeze(1);
    unfreeze(&current_sprite);
}
```

So, the first time Dink talks to the character, she will ask Dink to tell the other guy to shut up. Then it'll keep on reminding him of what to do until the &story variable changes.

For the second character, we need to check if the `&story` variable is 1, and if it is, allow Dink to tell the character to shut up. We'll put it in a choice statement so the player has a choice whether to tell him to shut up or not.

```c
// person2.c
void talk(void)
{
    // Let's freeze them both
    freeze(1);
    freeze(&current_sprite);

    // A decision!
    choice_start();
        "Say hello"
        (&story == 1) "Tell him to stop talking to himself"
        "Leave"
    choice_end();

    // Converse!
    if (&result == 1)
    {
        say_stop("Hi.", 1);
        wait(250);
        say_stop("`4Ahoy..", &current_sprite);
    }

    // Ask them to shut up
    if (&result == 2)
    {
        say_stop("Hey dude, can you please stop talking to yourself?",1);
        wait(250);
        say_stop("`4Uh, sorry, I didn't know I was bothering you.", &current_sprite);
        wait(250);
        say_stop("`4I'll stop now.", &current_sprite);
        wait(250);
        say_stop("Thanks!", 1);

        // Change the &story variable so we know that Dink has done this.
        &story = 2;
    }

    // Remember to unfreeze them!
    unfreeze(1);
    unfreeze(&current_sprite);
}
```

Dink is only given the option of telling the second character to shut up if `&story` is 1, and &story is 1 only if the first character asks Dink to help out.

Sometimes it helps to plot out the values of the variable in `main.c`, so you can just look in one place to figure out what each value is supposed to mean.

```c
// excerpt from main.c
void main(void)
{
    // .....
    make_global_int("&story", 0);
    // 0 – Nothing happened
    // 1 – Person 1 asked Dink to tell Person 2 to shut up.
    // 2 – Dink told Person 2 to shut up
    // 3 – Dink rewarded by Person 1
}
```

This is a pretty simple example. We could have given the player another choice of telling the second character to talk louder just to spite the first character. Then we'd have to make up more values for the &story variable, and change what the characters said.
