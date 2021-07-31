# fill_screen

<Prototype>void fill_screen(int dink_palette_index)</Prototype>

`fill_screen()` fills the entire screen (tiles, background sprites, and status bar) with the color given by `dink_palette_index`. 0 is black, and 255 is white. All active sprites will remain unaffected.

Here is an example script that will fill the screen with 50 random colors:

```c
void main(void)
{
    int &ctr = 50;
    int &col;
    int &wt;
    loop:
    if (&ctr)
    {
        &ctr -= 1;
        &col = random(256, 0); 
        fill_screen(&col);
        &wt = random(100,10);
        wait(&wt);
        goto loop;
    } 
    wait(50);
    draw_background();
    draw_status();
    kill_this_task();
}
```
