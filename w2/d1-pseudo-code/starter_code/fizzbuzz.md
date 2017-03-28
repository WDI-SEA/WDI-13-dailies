## Bonus Exercise: Pseudocode FizzBuzz

Break into small groups and solve this puzzle:

You're given a robot. The robot has no imagination or creativity whatsoever, but it's good at following rules.

The robot can only obey nine commands:

- Add two numbers together.
- Subtract two numbers.
- Multiply two numbers.
- Divide two numbers.
- Find the remainder of one number divided by another.
- Remember a number.
  - For example: "Number A is 42."
- Say something.
- Go back to an earlier step in the instructions.
- Tell if two numbers are equal, and if they are, do one thing; otherwise, do another thing.
  - For example, "If Number A equals 42, say 'Hello.' Otherwise, go back to step 3."

#### Our task

Using only the above commands, we need to instruct the robot to perform the following actions.

When the robot is given a number &mdash; say, 10 &mdash; for each number between 1 and 10:

- If the number is divisible by 3, it says "Fizz."
- If the number is divisible by 5, it says "Buzz."
- If the number is divisible by 3 and 5, it says "FizzBuzz."
- If the number isn't divisible by 3 or 5, it says the number.

So if the provided number was 15, the robot would say:

```
"1"
"2"
"Fizz"
"4"
"Buzz"
"Fizz"
"7"
"8"
"Fizz"
"Buzz"
"11"
"Fizz"
"13"
"14"
"FizzBuzz"
```

To start, consider:

- How would you get the robot to count to 10? You can't just say, "Count to 10." That's not one of the commands the robot knows. Of the nine commands you've been given, which might be helpful?

- How can you tell if one number is divisible by another? (For example, 8 is divisible by 2, but not by 3.)
