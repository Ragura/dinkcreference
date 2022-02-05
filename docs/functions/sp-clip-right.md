# sp_clip_right

<Prototype>int sp_clip_right(int active_sprite, int pixels[-1])</Prototype>

`sp_clip_right()` gets or sets the number of `pixels` of the `active_sprite's` sequence and frame that will be visible (any pixels exceeding the value will be clipped off the right). If the `active_sprite` changes sequence or frame, the clipping will remain.

This is similar to [sp_clip_bottom()](./sp-clip-bottom.md), but differs to the way [sp_clip_top()](./sp-clip-top.md) and [sp_clip_left()](./sp-clip-left.md) work, where the set value is the number of pixels to be clipped off.

It should also be noted that clipping has to be initialized, otherwise it will not work. <br>
To initiliase clipping an initial `sp_clip_right` and [sp_clip_bottom()](./sp-clip-bottom.md) value must be set, with the value being equal to or greater than the sprite's dimensions.

Example:
```c
void main(void)
{
 //In this example, &current_sprite is a sprite 90 pixels in length and we want to clip 10 pixels from the right.
 
 //First intialize clipping - rather than measuring the sprite, we can just initliase it to the size of the screen
 //as long as the value is equal to or greater than the sprite's dimensions, it will initialize the clipping.
 sp_clip_right(&current_sprite, 640);
 sp_clip_bottom(&current_sprite, 480);
 
 //now the actual clipping. This will make the first 80 pixels visible, and clip the remaining 10 from the right.
 sp_clip_right(&current_sprite, 80);
}
```

This is equivalent to the clipping possible in the map editor.