# sp_clip_top

<Prototype>int sp_clip_top(int active_sprite, int pixels[-1])</Prototype>

`sp_clip_top()` gets or sets the number of `pixels` to clip off of the top of the `active_sprite's` sequence and frame. If the `active_sprite` changes sequence or frame, the clipping will remain.

This is similar to [sp_clip_left()](./sp-clip-left.md), but differs to the way [sp_clip_bottom()](./sp-clip-bottom.md) and [sp_clip_right()](./sp-clip-right.md) work, where the set value is the number of pixels to be visible, and any exceeding that value will be clipped.

It should also be noted that clipping has to be initialized, otherwise it will not work. <br>
To initiliase clipping an initial [sp_clip_bottom()](./sp-clip-bottom.md) and [sp_clip_right()](./sp-clip-right.md) value must be set, with the value being equal to or greater than the sprite's dimensions.

Example:
```c
void main(void)
{
 //First intialize clipping - rather than measuring the sprite, we can just initliase it to the size of the screen
 //as long as the value is equal to or greater than the sprite's dimensions, it will initialize the clipping.
 sp_clip_right(&current_sprite, 640);
 sp_clip_bottom(&current_sprite, 480);
 
 //now the actual clipping. This will clip 10 pixels off the top of the sprite.
 sp_clip_top(&current_sprite, 10);
}
```

This is equivalent to the clipping performed in the map editor.
