# sp_flying

<Prototype>bool sp_flying(int active_sprite, bool flying[-1])</Prototype>

`sp_flying()` gets or sets the `flying` status of the `active_sprite`. When `flying` is set to 1, the `active_sprite` will be able to move over low tile hardness (often used for water). This is almost always used so missile sprites can move safely over water.

<VersionInfo dink="1.07">

`sp_flying()` would work well for missile brains and poorly for the player brain.

</VersionInfo>

<VersionInfo dink="1.08">

`sp_flying()` will work properly for all brains.

</VersionInfo>
