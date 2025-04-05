# sp_flying

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>bool sp_flying(int active_sprite, bool flying[-1])</Prototype>

`sp_flying()` gets or sets the `flying` status of the `active_sprite`. When `flying` is set to 1, the `active_sprite` will be able to move over low tile hardness (often used for water). This is almost always used so missile sprites can move safely over water.

<VersionInfo dink="1.07">

`sp_flying()` would work poorly for the player brain.

</VersionInfo>
