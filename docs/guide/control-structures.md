# Control Structures

So far, we've treated DinkC scripts almost like a script for a play or movie. Things have happened in order... sure, sometimes our scripts would reference parts of other scripts, but there hasn't been any crazy stuff going on.

Until now.

When you think about a DinkC script, you should think of things flowing from one statement to the next. Without control structures, things just flow along normally, without any bumps or jumps. However, with control statements, things get very interesting, and there are loop-de-loops, huge jumps, teleportation, and more.

One important note for those familiar with other programming and scripting languages: DinkC only supports if, else, and goto control structures. This will prove to be very, very annoying, but you'll adjust to it.

## Bumps

Dink has very limited support for if statements. Here's the general syntax.

```c
if (<left> <condition> <right>)
{
    // Do stuff!
}
```

Note that we use curly braces to define which lines of code will be processed by the if statement, just like procedures use curly braces to define which lines of code are in the procedure.

The &lt;left&gt; and &lt;right&gt; values can be numbers or variable names, and the &lt;condition&gt; must be one of those in the table below. Dink does not support multiple operations per if statement using `&&` or `||`.

| Condition | Description                                                                 |
|-----------|-----------------------------------------------------------------------------|
| ==        | Returns true if the left and right values are equal.                        |
| !=        | Returns true if the left and right values are not equal.                    |
| &lt;         | Returns true if the left value is less than the right value.                |
| &lt;=        | Returns true if the left value is less than or equal to the right value.    |
| &gt;         | Returns true if the left value is greater than the right value.             |
| &gt;=        | Returns true if the left value is greater than or equal to the right value. |

DinkC is sensitive about white space in some circumstances. Particularly, make sure that there is no white space after the opening bracket '('.

It is possible to embed some [internal functions](../functions/) in if statements, but it only works with a handful. It is strongly recommended that you assign the result of an [internal function](../functions/) to a variable, using the variable in the if statement.

Here's a simple example, where Dink will say something only if he's completely healthy.

```c
void talk(void)
{
    freeze(1);
    if (&life == &lifemax)
    {
        say_stop("I'm as healthy as a horse!", 1);
    }
    say_stop("I'll say this no matter what.", 1);
    unfreeze(1);
}
```

So if Dink's life is at its maximum, he will say both *"I'm as healthy as a horse!"* and *"I'll say this no matter what."* However, if he's been damaged a little bit, the game will skip over the horse line, and Dink will only say *"I'll say this no matter what."*

If you're thinking of the script as flowing, just envision the flow bumping over the contents of the if statement if the condition doesn't match.

Dink also has support for else statements, which will be executed if the if statement is false.

```c
void talk(void)
{
    freeze(1);
    if (&life == &lifemax)
    {
        say_stop("I'm as healthy as a horse!", 1);
    }
    else
    {
        say_stop("I don't feel so good.", 1);
    }
    say_stop("I'll say this no matter what.", 1);
    unfreeze(1);
}
```

If you want to check if more than one condition is true, you can put if statements within if statements, like this:

```c
void talk(void)
{
    freeze(1);
    if (&life == &lifemax) 
    {
        if (&strength > 10)
        {
            say_stop("I feel super good!", 1);
        }
        else
        {
            say_stop("I feel good.", 1);
        }
    }
    unfreeze(1);
}
```

Also, curly braces are (sometimes) optional. For instance, you might see something like these examples in some scripts.

```c
void talk(void)
{
    freeze(1);
    if (&life == &lifemax) say_stop("I feel super good!", 1);
    say_stop("I'll say this no matter what.", 1);
    unfreeze(1);
}
```

```c
void talk(void)
{
    freeze(1);
    if (&life == &lifemax)
        say_stop("I feel super good!", 1);
    say_stop("I'll say this no matter what.", 1);
    unfreeze(1);
}
```

DinkC knows that if there are not any curly braces after an if statement that it will only apply to the next statement.

However, there is one critical error. This does not work for anything involving variables.

```c
void talk(void)
{
    int &temp = 0;
    // This will not work!!!!!
    if (&life == &lifemax) &temp = 1;
}
```

To properly assign variables in if statements, you must use the curly braces.

```c
void talk(void)
{
    int &temp = 0;
    // This works fine.
    if (&life == &lifemax)
    {
        &temp = 1;
    }
}
```

## Jumps

DinkC also supports jumping by using goto statements. Goto basically says *"goto this line right now!"*

For example, let's say you want Dink to say that he's healthy if he has full life or if he has a strength greater than 10. The only way to do this is to use a couple goto statements, like this:

```c
void talk(void)
{
    freeze(1);
    if (&life == &lifemax)
    {
        goto healthy;
    }

    if (&strength > 10)
    {
        goto healthy;
    }

    say_stop("I'm not feeling so good, Jack.", 1);
    goto done;

    healthy:
    say_stop("I'm healthy as a horse!", 1);

    done:
    say_stop("I will say this no matter what.", 1);

    unfreeze(1);
}
```

Imagine that a little dude on skis is skiing down the script. He skis past the freeze statement, and meets a fork in the trail. If `&life` equals `&lifemax`, he goes down this path, and sees the goto healthy statement. It's like this huge, killer ramp on the ski trail. He clenches his teeth and launches off of the ramp and jumps all the way down to the healthy statement, and skis through the rest without any excitement.

Note that the goto statement is followed by a label name. This label name must exist in the current script followed by a colon `:`.

## Loops

Loops are like jumps that go backwards a number of times. If we imagine our little skiing dude skiing down the script, a loop is almost like him finding a ski-lift half-way down the mountain, and going through the same trail again.

Here's an example of a basic loop.

```c
void talk(void)
{
    freeze(1);
    int &counter = 0;

    loop:
    say_stop("I'm going to say this 10 times!", 1);
    &counter += 1;
    if (&counter < 10)
    {
        goto loop;
    }
    say_stop("Whew, glad I'm done with that!", 1);
    unfreeze(1);
}
```

Much as it implies, Dink says *"I'm going to say this 10 times!"* 10 times, and finally says *"Whew, glad I'm done with that!"* after he's done.

Note that loops are somewhat dangerous. For example, it is possible to create a loop that runs forever, freezing the game.

```c
void talk(void)
{
    loop:
    say("Ack, I've frozen the game!", 1);
    goto loop;
}
```

One way to fix this is to add a [wait()](../functions/wait.md) statement. The [wait()](../functions/wait.md) statement allows other events to occur, such as player input.

```c
void talk(void)
{
    loop:
    say("I'll say this a lot, but I won't freeze the game!", 1);
    wait(100);
    goto loop;
}
```
