# Plot

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
        wait(250); 
        say_stop("What's in it for me?", 1);
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

So, the first time Dink talks to the character, she will ask Dink to tell the other guy to shut up. Then it'll keep on reminding him of what to do until the `&story` variable changes.

For the second character, we need to check if the `&story` variable is 1, and if it is, allow Dink to tell the character to shut up. We'll put it in a [choice statement](./npc.md#choice-menu) so the player has a choice whether to tell him to shut up or not.

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

Dink is only given the option of telling the second character to shut up if `&story` is 1, and `&story` is 1 only if the first character asks Dink to help out.

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
