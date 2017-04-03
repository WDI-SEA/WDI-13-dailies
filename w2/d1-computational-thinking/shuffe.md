# How to Shuffle A Deck Of Cards

## Activity

Develop your algorithm using just three cards, so examples are simpler.

Write out the steps you could take to shuffle a deck of cards.

EX: A B C

Shuffling ...

C A B
(or maybe C B A...)
(or maybe A B C...)

Write out pseudocode for your algorithm. Physically test it a few times.

Bonus: Are all possible orders equally likely, using your algorithm?
Can you prove it?

## What are all the possible orders?

* A B C
* A C B
* B C A
* B A C
* C A B
* C B A

## Possible Solutions

### Super Awesome Easy Shuffle
  1. Roll die.
  2. Choose based on die: n! = (3 * 2 * 1)
    * Rolled a 1 => A B C
    * Rolled a 2 => A C B
    * Rolled a 3 => B C A
    * Rolled a 4 => B A C
    * Rolled a 5 => C A B
    * Rolled a 6 => C B A

### Somewhat-Random Shuffle:
  
  1. For spot 1:
    Roll 3-sided Dice. Rolled a n => swap spot 1 with spot n 
  2. For spot 2:
    Roll 3-sided Dice. Rolled a n => swap spot 2 with spot n 
  3. For spot 3:
    Roll 3-sided Dice. Rolled a n => swap spot 3 with spot n 

```
A B C
for spot 1: (rolls 1 => swap spot 1 with spot 1)
A B C
for spot 2: (rolls 3 => swap spot 2 with spot 3)
A C B
for spot 3: (rolls 3 => swap spot 3 with spot 3)
A C B
```

> What if you just have a 6-sided dice? Well, you could take the result (1-6) and assign 1-2 = 1, 3-4 = 2, and 5-6 = 3. Or, you could just re-roll if you see a 4, 5, or 6.

This is close, but are all possible outcomes equally likey? Let's examine how many different paths our algorithim can take:

  3 (3 equally likely decisions from step 1) * 3 (3 equally likely decisions from step 2) * 3 (3 equally likely decisions from step 3) paths = 27.
  
  27 (number of paths) / 6 (number of different possible orders) = 4.5. How can we evenly distribute 27 into 6? You can't. Some orders will be more likely. End proof- this is not an unbiased shuffle.

### Actual-Random Order (similar: [Fisher-Yates Shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)):

  While there are Cards in Unshuffled Cards:

  1. Take a random card from Unshuffled cards
  2. Put on top of shuffled cards.


```
Unshuffled Cards: A B C
Shuffled Cards:

Random number between 1-3: 2

Unshuffled Cards: A C
Shuffled Cards:   B

Random number between 1-2: 1

Unshuffled:     C
Shuffled Cards: B A

Between 1 and 1: 1

Unshuffled:     
Shuffled Cards: B A C
```

If you work out the number of different paths for this algortihm, you get 3 (round 1) * 2 (round 2) * 1 (last round) = 6. We can evenly split up 6 paths into 6 orders- so, there's a good chance this is an unbiased shuffle (In fact, it is).
