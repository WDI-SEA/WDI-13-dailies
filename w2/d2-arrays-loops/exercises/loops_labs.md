# Loops Exercises

#### LAB 1 - Sum the elements of an array

Write a program to sum the elements of an array (assume all of the elements are numbers):

Starter:

```javascript
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;

// TODO: add a for loop here to add up all of the numbers into the variable sum

console.log('sum = ' + sum);
```

Solutions are below:

* [Classic For Loop Solution](../solutions/array-sum-1.js)
* [Solution Using Reduce](../solutions/array-sum-2.js)

> Wow, the second solution is only three lines of code and we don't need a loop at all!!!

#### LAB 2 - Add the Elements of Two Arrays Together

Write a program to add all of the elements of two arrays together. For instance, given the arrays:

```javascript
var x = [1, 2, 3];
var y = [4, 5, 6];
```

The sum of the arrays is [5, 7, 9].

Starter:

```javascript
// add 2 integer arrays (add elements)
function sumOfArrays(a, b) {
  var result = [];
  // TODO: write a for loop that adds the elements of a and b.
  //       and pushes each sum into the result array.
  return result;
}

var a = [1, 2, 3];
var b = [4, 6, 8];
console.log("sum of arrays = " + sumOfArrays(a, b));
```

You can view the solution [here](../solutions/add-2-arrays.js).

Bonus (work in pairs): Assume that the arrays may be of different lengths, and assume zero values for the shorter array:

You can view the solution [here](../solutions/add-2-arrays-bonus.js).

You can view an even shorter bonus solution [here](../solutions/add-2-arrays-bonus-2.js).

#### Multi-Dimensional Arrays

```javascript
var board = [ [ 'X', 'O', 'X' ],
              [ 'O', 'X', 'O' ],
              [ 'X', 'O', 'X' ]
            ];
```

#### LAB 3 - Print Tic-Tac-Toe Board - PAIR UP!

Write a program to print the above board in a nice format.
Hint: Only use a single for loop (not nested for loops).

You can view the solution [here](../solutions/print-tic-tac-toe.js).
