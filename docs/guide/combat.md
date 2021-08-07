# Combat

In combat, strength, defense, and hitpoints interact about like this:

**Step 1.** When Dink or a monster hits the other, a number of hitpoints is randomly selected from the upper half of its strength range. In DinkC terms, you might write it like this:

```c
int &hit_work = sp_strength(<hitting-sprite> , -1);
int &hits = math_mod(&hit_work, 2);
&hit_work / 2;
int &add_remainder = &hit_work;
&add_remainder += &hits;
&hits = random( &add_remainder , &hit_work );
&hits += 1;
```

While the above example is true for melee combat, the damage calculation works slightly different for missiles.
When the missile's strength is an *odd* value, it's maximum possible damage potential will be one less than it's strength. In DinkC terms, it would look like this:

```c
int &hit_work = sp_strength(<hitting-sprite>, -1);
&hit_work / 2;
int &hits = random(&hit_work, &hit_work);
&hits += 1;
```

**Step 2.** Now the defense of the sprite that got hit is figured in:

```c
&hits -= sp_defense( <sprite-getting-hit>, -1 );
if (&hits < 0)
{
    &hits = 0;
}
```

**Step 3.** Make sure the sprite cannot always get off scott-free (this algorithm is used in [hurt()](../functions/hurt.md) and when Dink gets hit; it does not seem to always apply to Dink hitting a monster, especially when he hits it with magic):

```c
if (&hits == 0)
{
    &hits = random( 2, 0 ); // random() returns 0 or 1
}
```

**Step 4.** Finally, apply the hit:

```c
int &health = sp_hitpoints( <sprite-getting-hit>, -1 );
&health -= &hits; sp_hitpoints( <sprite-getting-hit>, &health );
if (&health <= 0)
    die();          // note: Dink's die() is in script "dinfo"
```

The mock code above is only given to help show the interrelationships between strength and defense in battle. It must be noted that Dink's attributes are kept in variables: `&strength` instead of [sp_strength()](../functions/sp-strength.md); `&defense` instead of [sp_defense()](../functions/sp-defense.md); `&life` instead of [sp_hitpoints()](../functions/sp-hitpoints.md).
