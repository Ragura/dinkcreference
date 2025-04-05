# show_popup

**Version:** <VersionInfo dinkhd="" standalone />

<Prototype>void show_popup(string rttex_file, int_delay)</Prototype>

`show_popup` will wait `int_delay` milliseconds and then display the specified `rttex_file` to the screen as a popup. The tip_start.wav sound file located in the audio folder of the Dink Smallwood HD directory will also play.

The `rttex_file` should be a path relative to the Dink Smallwood HD root directory, and any directories should be specified. It is this reason that this function may not be very useful for Dmod authors, since on some systems, dmods might be installed outside the Dink Smallwood HD directory and there is no way of knowing where a player will install your dmod.

See the following thread on the Dink Network for a discussion about `show_popup` and how to generate an `rttext_file`:
[show_popup function](https://www.dinknetwork.com/forum.cgi?MID=181270#181270)