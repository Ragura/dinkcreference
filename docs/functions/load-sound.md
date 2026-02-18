# load_sound

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>void load_sound(string wav_file[11], int sound_number)</Prototype>

`load_sound()` loads the `wav_file` into slot `sound_number`. All sounds must be loaded into a slot before they can be played. The `sound_number` must be in the range as per the `Sound number` limit specified in [Variable Types](../guide/variables.md#variable-types)

By default, this command will look in the D-Mods sounds directory, and if `wav_file` cannot be found, it will look in Dink's sounds directory.

Note that you can replace existing sounds at any time. So if you plan on having speech in a D-Mod, you could reserve a specific `sound_number` for speech, and use `load_sound()` to load in each line of dialogue into that slot as necessary.

<VersionInfo dink="">

Replacing a sound in the way described above won't free the previous sound buffer, so this leaks memory. It might not matter much if you're conservative with replacing sounds, but if you load some large sound files on every sprites main(), for example, it will add up quickly.

</VersionInfo>