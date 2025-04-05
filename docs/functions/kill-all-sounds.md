# kill_all_sounds

**Version:** <VersionInfo dink="1.05+" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void kill_all_sounds(void)</Prototype>

Despite its name, `kill_all_sounds()` only kills all sounds that are repeating and not attached to a sprite. This is useful if a sound effect is set to survive and is playing in the background (like rain or wind) and you want to kill it without messing around with the soundbank numbers.