# playmidi

<Prototype>void playmidi(string midi_file[14])</Prototype>

`playmidi()` plays the `midi_file` found in the `sound` directory in the D-Mod. If it is not found, it will look in Dink's `sound` directory and play it if it exists there.

If a number is specified, Dink will attempt to play `"###.mid"`.

The numbers 1002-1018 as a `midi_file` have special meaning. They play the audio tracks on the Dink Smallwood CD. All but 1003, 1008, 1014, 1015 and 1017 have MIDI alternatives for those people (the majority) using the freeware version without the original CD in the drive. 1001 and 1020 also play MIDIs if the Dink CD is not present, although with the CD, 1001 has no effect (since track 1 is the data track on the CD) and 1020 stops the music (since the CD has no track 20). These numbers also work for screens (press <kbd>M</kbd> in DinkEdit). Lastly, it's interesting that it will confuse certain audio CDs (such as the 'O Brother, Where Art Thou?' soundtrack) with the Dink CD.

```c
playmidi("1001");
// without the CD, plays "1.mid" (specified number less 1000);
// with the CD, no effect -- will not try to "play" data track
playmidi("1003");
// plays track 3 of CD, or "3.mid" (if dmod has one)
playmidi("1003.mid");
// plays, as specified, "1003.mid"
playmidi("1020");
// with CD, does nothing (no track 20);
// without CD, plays "20.mid" if found
```
