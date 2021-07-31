# load_sound

<Prototype>void load_sound(string wav_file[11], int sound_number)</Prototype>

`load_sound()` loads the `wav_file` into slot `sound_number`. All sounds must be loaded into a slot before they can be played. The `sound_number` must be in the range 1-99, which allows up to 99 sounds in memory at any given time.

By default, this command will look in the D-Mods sounds directory, and if `wav_file` cannot be found, it will look in Dink's sounds directory.

Note that you can replace existing sounds at any time. So if you plan on having speech in a D-Mod, you could reserve slot 99 for speech, and use `load_sound()` to load in each line of dialogue into that slot as necessary.
