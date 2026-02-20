# YeDink ini parms

**Version:** <VersionInfo yedink="0.95+" standalone />

The following dink.ini parms were added and will change various settings at launch:

- `dinklua_enable` switches on the DinkLua scripting backend.

- `dinkc_off` switches off DinkC.

- `gfx_diag_idle_enable` allows for all 8 directions for player sprite idle sequences.

- `gfx_alttext_enable` switches on alternate text display, for multiple colours in text.

- `gfx_alttext_disable` switches off alttext display and locks it from the player.

- `scripts_enable_divequals` fixes the `/=` operator bug when using an internal function as the divisor.

- `sprite_enable_smart_movement` stops brain 9 monsters from getting caught in corners.

- `sprite_enable_large_talkbox` allows for the player to talk to NPC-brained sprites from a greater distance.

- `sprite_pig explosion_seq` sequence replaces sequence 164 default sequence with "sequence" for the pig brain.

- `sprite_duck_explosion_seq` sequence as above for ducks.

- `sfx_bass_boost` mult applies a multiplier to the bass frequencies of sound effects as per "mult". 1.5 is a good starting value.

- `gfx_tiles_anim_off` switches off the animation of water and fire tiles.

- `gfx_tiles_water_start` sheet sets "sheet" as the first in the sequence for water tiles

- `gfx_tiles_water_length` sheets determines how many sequential tilesheets to use for water tiles.

- `gfx_tiles_fire_start` sheet sets "sheet" as the first in the sequence for fire tiles.

- `gfx_tiles_fire_length` sheets determines how many sequential tilesheets to use for fire tiles.

- `gfx_full_fade_enable` fades down everything without leaving white. Text will be invisible.

- `input_controller_set_key` key sets the key script to be used with the L1 button on the controller. 67 would be "C", for example.
<br>
<br>
*The above was copied from the YeoldeDink Guide*