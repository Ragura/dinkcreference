# kill_all_sounds

<Prototype>void kill_all_sounds(void)</Prototype>

Despite its name, `kill_all_sounds()` only kills all sounds that are repeating and not attached to a sprite. This is useful if a sound effect is set to survive and is playing in the background (like rain or wind) and you want to kill it without messing around with the soundbank numbers.


To see an example on how to actually kill **all** currently playing sounds, check out [sound_set_kill()](./sound-set-kill.md).
