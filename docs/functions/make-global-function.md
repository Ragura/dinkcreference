# make_global_function

**Version:** <VersionInfo dink="1.08" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void make_global_function(string script[9], string procedure[19])</Prototype>

`make_global_function()` allows you to declare a shortcut to a function. After declaring it, you can use procedure as a function call without specifying script using `external()`.

You can declare a maximum of 99 global functions.

<VersionInfo dink="" freedink="">

`make_global_function` does not work correctly. If you declare more than global function, none of them will work.

</VersionInfo>

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
