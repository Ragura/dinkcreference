# make_global_function

<Prototype>void make_global_function(string script[9], string procedure[19])</Prototype>

`make_global_function()` allows you to declare a shortcut to a function. After declaring it, you can use procedure as a function call without specifying script using `external()`.

::: danger Flawed
`make_global_function()` does not work if you declare more than one global function. If you declare just one it will work fine, but if you declare more than one, none of them will work.
:::

```c
// test.c
void my_function(void)
{
    say("Hello!", 1);
}

// anotherscript.c
void main(void)
{
    // Dink will say hello
    external("test", "my_function");
    // Declare the function...
    make_global_function("test", "my_function");
    // Dink will say hello
    my_function();
}
```

If you call `make_global_function()` again with the same procedure, it will re-direct all future calls to procedure to the new script. You might be able to do some interesting things.

It is recommended that you declare all of your `make_global_function()` statements in `main.c` for clarity.
