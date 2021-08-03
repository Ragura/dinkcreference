# arm_magic

<Prototype>void arm_magic(void)</Prototype>

`arm_magic()` arms the magic spell in the magic inventory slot (1-8) specified in the `&cur_magic` [required global variable](../guide/variables.md#required-global-variables), or disarms magic if `&cur_magic` is 0. If another magic spell is currently armed, it will run that magic spell's `disarm()` procedure, and it will run the new magic spell's `arm()` procedure. This command does not update the status area: you will usually want to [draw_status()](./draw-status.md) after using this command. Example:

```c
// disarm Dink's magic:
&cur_magic = 0;
arm_magic();
draw_status();
```

For more information, see [Items](../guide/items.md)
