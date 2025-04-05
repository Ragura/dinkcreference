# sp_gold

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_gold(int active_sprite, int value[-1])</Prototype>

`sp_gold()` gets or sets the gold `value` for the `active_sprite`. But, surprisingly, this gold `value` isn't used by the game engine at all. All alterations to the player's gold amount must use the `&gold` required global variable.

However, D-Mod authors can use it for their own purposes (where the gold value signifies something for other scripts to interpret).
