# wait

<Prototype>void wait(int period)</Prototype>

`wait()` will cause the current script to pause at least `period` milliseconds before continuing.

It is not uncommon to include a short wait after every `say_stop()` in a conversation, for example, to slow it down a little and make it more realistic.

As the engine only executes one script at a time, setting a `period` of 1 millisecond will cause the script to 'yield the floor', allowing other scripts to execute, brains to think, and other actions to take place.
