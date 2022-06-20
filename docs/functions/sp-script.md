# sp_script

<Prototype>int sp_script(int active_sprite, string script[9])</Prototype>

`sp_script()` kills any scripts currently owned by `active_sprite`, sets the script for the `active_sprite`, executes the `main` procedure of the script, and returns the script number of the new script.

<VersionInfo dink="< 1.08">

If a sprite replaced it's own script, there was a chance odd things would happen.

</VersionInfo>

<VersionInfo dink="1.08" freedink="all">

A sprite can replace it's own script without issues. When a sprite replaces it's own script, the old script will be killed off automatically at that time (unless using [script_attach(0)](./script-attach.md) to keep the script alive).

</VersionInfo>