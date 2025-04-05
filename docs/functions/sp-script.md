# sp_script

**Version:** <VersionInfo dink="" standalone />&nbsp;<VersionInfo freedink="" standalone />&nbsp;<VersionInfo dinkhd="" standalone />&nbsp;<VersionInfo yedink="" standalone />

<Prototype>int sp_script(int active_sprite, string script[9])</Prototype>

`sp_script()` kills any scripts currently owned by `active_sprite`, sets the script for the `active_sprite`, executes the `main` procedure of the script, and returns the script number of the new script.

When a sprite replaces it's own script, the old script will be killed off automatically at that time (unless using [script_attach(0)](./script-attach.md) to keep the script alive), but the script will be entered into the "script queue" twice, this means when the script reaches a `return`, the script will immediately be called again and keep executing code past that `return` line.
