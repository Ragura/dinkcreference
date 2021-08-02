# make_global_int

<Prototype>void make_global_int(string name[18], int default_value)</Prototype>

`make_global_int()` declares a global integer. The `default_value` is only applied to it if this is the first time it has been initialized and it doesn't already exist in the save game file. However, `make_global_int()` is almost always used in the `main.c` script.

The number of global variables is fairly limited... at any given time, you have a pool of 248 variable slots. This includes all global variables and all local variables declared in all scripts.

```c
// excerpt from main.c
make_global_int("&strength", 3);
make_global_int("&story", 0);
make_global_int("&old_womans_duck", 0);
```
