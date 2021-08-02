# random

<Prototype>int random(int range, int base)</Prototype>

random will return a random integer between base and base + range.

```c
// returns 0 or 1
random(2, 0);
// returns 1 or 2
random(2, 1);
// returns 50, 51, or 52
random(3, 50);
```
