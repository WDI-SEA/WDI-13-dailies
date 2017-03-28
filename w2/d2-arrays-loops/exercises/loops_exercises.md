## Data Collections

### Arrays

JavaScript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...
* Add an element to the back of an array.
* Remove an element from the back of an array.
* Add an element to the front of an array.
* Remove an element from the front of an array.
* Concatenates all the elements in an array into a string.
* Separates the characters of a string into an array.

```js
// Your answers go here.
```

What are the contents of the below arrays after the code samples are executed? Come up with an answer before testing it out in the console.
> **HINT:** You might find it helpful to draw the arrays out as you run each line of code.

```js
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );
```

```
Your answer goes here.
```

What is the return value of the below code sample? Come up with an answer before testing it out in the console.

```js
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );
```

```
Your answer goes here.
```

What are the contents of the below array after the below code sample is executed? Come up with an answer before testing it out in the console.

```js
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
```

```
Your answer goes here.
```

## Loops

Your task is to create a loop that prints out all the odd numbers between 1 and 100... twice! Use a different type of JavaScript loop each time.

```js
// Your answer goes here.
```
