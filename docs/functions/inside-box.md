# inside_box

<Prototype small>bool inside_box(int x, int y, int left, int top, int right, int bottom)</Prototype>

`inside_box()` returns 1 if the `x` and `y` coordinates are inside the box defined by `left`, `top`, `right`, and `bottom`. 

```c
// excerpt from item-pig.c to check if Dink is in the pig pen
&junk = inside_box(&mholdx,&mholdy, 200, 180, 400, 306);
if (&junk == 1)
{
    freeze(1);
    wait(200);
    say_stop("Come on pigs, eat!", 1);
    //... continued
}
```

Put another way, this function ensures the `x` coordinate is within the `left` and `right` boundaries, and the `y` coordinate is within the `top` and `bottom` boundaries, like so:

```c
if (&x >= &left)
{
    if (&x <= &right)
    {
        if (&y <= &bottom)
        {
            if (&y >= &top)
            {
                say("I'm inside the box!", 1);
            }
        }
    }
}
```
