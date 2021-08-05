# spawn

<Prototype>int spawn(string script[9])</Prototype>

`spawn()` creates a new instance of script and returns the script number. This new script will be attached to sprite 1000, and will stay active until `kill_this_task()` is executed (or if the player loads, restarts, or quits the game). The script's `main()` procedure will be started automatically.
