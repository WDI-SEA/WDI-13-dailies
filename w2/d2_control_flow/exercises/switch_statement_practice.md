## Switch Statement Practice

Now that you have some experience with ternary statements, let's talk a bit more about the use of switch statements. First, you'll write out the following scenario as a long if...else statement; then you'll refactor the if...else statement to be a switch statement in the next step.

#### Instructions

First, declare a variable grade and set it equal to "B." Then, create an `if...else` statement that checks to see if the student got an A, B, C, D, or F.

*   If the student received an A, log "Awesome Job" to the console.
*   If the student received a B, log "Pretty Great" to the console.
*   If the student received a C, log "Pretty Average" to the console.
*   If the student received a D, log "Need to Study" to the console.
*   If the student received an F, log "Bad Job" to the console.

Here's what the scenario would look like as an if...else statement:

```js
var grade = "B";

if (grade === "A") {
	console.log("Awesome Job");
} else if (grade === "B") {
	console.log("Pretty Great");
} else if (grade === "C") {
	console.log("Pretty Average");
} else if (grade === "D") {
	console.log("Need to Study");
} else if (grade === "F") {
	console.log("Bad Job");
}
```


Now, rewrite the `if...else` statement as a switch statement.  

Here's what this `if...else` statement will look like when refactored into a switch statement:

```js
var grade = "B";

switch (grade) {
case "A":
  console.log("Awesome Job");
  break;
case "B":
  console.log("Pretty Great");
  break;
case "C":
  console.log("Pretty Average");
  break;
case "D":
  console.log("Need to Study");
  break;
case "F":
  console.log("Bad Job");
  break;
default:
  console.log("Nonexistent");
}
```

Which is faster: the if...else statement or the switch statement?


Consider how many computations run in each approach. 

When evaluating for grade `D` using the `if...else` approach, the condition `grade === 'x'` is evaluated four times. What if the `if...else` statement had 10 conditions? 100? How would this impact the speed of the program? 

By contrast, when using a switch statement, the condition is only evaluated one time.

As our scripts grow in size and complexity, we want to make sure that each time we work on a piece of code, we think about how we can make that code perform as effectively as possible. 

Throughout this course, we'll cover small ways to improve performance that will have a big impact, especially on projects with much more code. 

We saw earlier how `break;` plays a major role in switch statements. Again, if there is no `break;` at the end of a case, the computer will not skip to the end. Instead, it will start executing the next case's code (even if the case's value is different from the variable's) and do so until it hits a `break;` statement. 

Can you guess what would happen if you removed the breaks from the switch statement you created? Run the code to find out! 

