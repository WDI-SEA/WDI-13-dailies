# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Data Types, Variables, Arrays (120 mins)


| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Introduction](#introduction) | Opening |
| 10 min | [Intro to New Material](#intro) | Variables |
| 5 min | [Intro to New Material](#intro-data) | Data Types |
| 15 min | [Guided Practice](#guided-practice) | Data Types |
| 5 min| [Intro to New Material](#intro-strings ) | Strings and Numbers |
|15 min| [Guided Practice](#arithmetic-operators) | Arithmetic Operators |
| 15 min| [Guided Practice](#guided-string) | String Concatentation and Coercion |
| 10 min | [Guided Practice](#guided-assignment)| Assignment Operators |
| 15 min | [Guided Practice](#guided-special-arithmetic) | Special Arithmetic Methods |
|15 min | [Guided Practice](#helper-methods) | Helper Methods |
| 5 min | [Conclusion](#conclusion) |Wrap-Up |

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Describe the concept of a 'data type' and how it relates to variables.
- Describe use cases of different 'data types.'
- Declare, assign to, and manipulate data stored in a variable.
- Practice proper JS syntax and semantic variable naming.

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*
- Break down simple coding problems using pseudocode.
- Have basic understanding of JavaScript.
- Be comfortable with a text editor.

---
<a name="introduction"></a>
## Opening (5 mins)
- Review pre-work, projects, or exit ticket, if applicable.
- Review current lesson objectives.

***
<a name="intro"></a>
## Intro to New Material: Variables (10 mins)
Variables are used to store data types into the memory of the computer so that they can be referenced later.

Think of them as special containers that can hold information for you.

<img src="assets/variable_container.png" width="150">

#### Always use var!

In order to use a variable in JS, you must announce that you want to use it.

You make this announcement by using the keyword `var` and declaring a variable name next to it.

![](assets/var.png)

Note: There must be a space after the keyword 'var.'

Now that we've declared our variable names, we need to give them values.

If you declare a variable without assigning any value to it, its type is `undefined`.

```javascript
var name;
=> undefined
```

So let's try assigning a value to variable:

```javascript
var name = 'Santa';
=> undefined

name
=> 'Santa'
```
Notice that the value is a word (not a number), so we put quotation marks around it.

We always put quotation marks around strings (values that consists of letters and/or other characters). We'll be talking about strings later in this lesson.

#### Variable Syntax

Notice the spaces before and after the `=` sign and the semicolon after the string.

Making sure these are in place is a good habit to develop and will be important when your code gets more complicated later on.

```js
var name = "Santa";
```

JS is a programming language, and like any language it has its own grammar and rules of operation. Let's look at four rules of thumb:

1. When creating/declaring a variable for the first time, use the `var` keyword.
2. Variable names should be written in camelCase.
2. Add a space before and after the equal sign `=` .
3. Statements need to end with a semicolon `;`.


Note that, in JavaScript, the equal sign doesn't evaluate things the way it does in math; rather, it assigns values to things, such as variables.

We call this an _assignment operator_.


#### Reassigning Variables
JavaScript runs synchronously and top-down, meaning it updates itself to the latest information given (on the bottom).

So the values we give our variables furthest down will become our new values at the end.

Let's take a look at a brief example. Say that we want to create variables for a character's name, age, and location.

```js
var name = "Santa";
var age = 1748;
var location = "North Pole";
```

We can later replace, or reassign, the values of these variables, like so:


```js
var name = "Santa";
var age = 1748;
var location = "North Pole";

name = "Bruce";
age = 35;
location = "Gotham";

```

Here's a brief [video](https://generalassembly.wistia.com/medias/66kaqbwoc1) summarizing how to assign and reassign variables.



***
<a name="intro-data"></a>
## Intro to New Material: Data Types (5 mins)

Earlier, we briefly mentioned that you can add different types of values to JS variables. JS knows when you are using letters and when you are using numbers.

This will come in handy later, when you start combining words or adding numbers together in your code. For now, it's important to know that these distinctions are called 'data types.'


_In computer science and programming, a data type (or simply 'type') is a classification identifying one of various types of data that determines the possible values for that type, the operations that can be done on values of that type, the meaning of the data, and the way values of that type can be stored._  

Data types are really similar across different languages.

Being confident in working with these concepts will enable you to interact with any programming language, equipped with some translatable base knowledge.

![Data Types Chart](assets/data-types-chart.png)

We'll elaborate on all of these &mdash; except Booleans, for now. We'll talk about how they behave in JavaScript, show you some helper methods to work with each type, and then practice these helper methods to manipulate data using JavaScript.

***
<a name="guided-practice"></a>
## Guided Practice: Data Types (15 mins)

#### Chrome's Developer Console

For the exercises in this lesson, we suggest you use the Google Chrome Developer Tool Console by following these steps:

- Open up Google Chrome in a separate window (and place it next to the window with this document).
- Right-click anywhere on the browser and click on "Inspect."
- In the new "Elements" window that appeared, click on "Console" on the top menu.

>Perform the following steps in the console:

1. Declare a variable called `legs` with the value `4`.
  Note: The console returns undefined when declaring a variable using var, because the `var` statement returns no value. This will be the case for every `var` declaration.
2. Declare variables for the traits `color` and `sound` (using quotations for string values).
3. Update values for each variable. No need to use `var` this time!
  To check the value of our variable `legs,' simply type `legs;` and press enter. Repeat for the other two variables.


> Check: Make sure students have typed in the correct statements.

#### Loosely Typed Language

Notice that, in JavaScript, you do not need to declare what type of data you are using.

For example, when you code:

```
var a = 13;
var b = "thirteen";
```

JS will know that var a is a number and that var b is a string, because strings always have quotation marks. Using quotation marks is a way of communicating with the processor what type of data to expect.

In Java, a different programming language, you do have to declare the type of values when you code in the following way:

```
int a = 13;
string b = "thirteen"
```


JavaScript is a loosely typed language. As we mentioned before, this means that there is no need to specify the data type (string, number, etc.) you are using.

A strongly typed language is one that requires you to explicitly say the type of variable you're declaring (like Java).

While a loosely typed language reduces the amount of code you must write, it increases the possibility of type errors when a value is not of the expected data type.

For example, if you put quotations marks around a number, like `"9"`, the processor will read it as a string. You should always be mindful of the type of data you use moving forward.

#### typeof

When we start writing more complex code, there may be times when we forget which type of data we're manipulating.

Luckily, the computer already knows which type of data we're working with, so we can use the `typeof` command in the console to find out.

`typeof` returns a string that tells us which type of data we're seeing.

Take a look at some examples:

![typeof](assets/typeof.png)

Notice how we can choose whether or not to use the parenthesis.

For consistency's sake, it's a good idea to pick one way and stick with it.

Make sure to remember the `typeof` command in case you ever need to find out the type of data you're working with.


#### Independent Practice

Perform the following steps in the console:

1. `typeof 'hello';`
  - The console returns 'string'.
2. `typeof 24;`
  - The console returns 'number'.
3. `typeof (3.45);`
  - The console returns 'number'.
4. `typeof true;`
  - The console returns 'boolean'.
5. `typeof ("JS is fun!");`
  - The console returns 'string'.

> Check: Make sure students have filled in the correct input.

***
<a name="intro-strings"></a>
## Strings and Numbers (5 mins)

Strings are collections of letters and symbols known as *characters*, and we use them to deal with words and text in JavaScript. Strings are just another type of **value** in Javascript.

```js
'John'
'Jane'
'123'
```

> Instructor note: Using your console, demonstrate for students the difference between double quotes and single quotes, and when to use each.

#### Numbers

In JavaScript, numbers can always be divided into two groups:

**Integers (whole numbers)**

```
..., -1,0, 2, 3, 4, 5, ...
```

**Floats (decimals)**
```
2.718, 3.14, .5, .25, etc
```

This means that JS numbers can be positive, negative, or have a decimal point.

#### Guided Exercise:

Try typing the following into your console:

1. `typeof 13`
2. `typeof 13.5`

What do you notice?

***
<a name="arithmetic-operators"></a>
## Guided Practice: Arithmetic Operators (15 mins)

In this section, we'll talk about expressions. What are expressions? Watch this [video](https://generalassembly.wistia.com/medias/e1c21pib0n) to find out:

How do we combine numbers and operators to come up with more complex expressions in JS?

It's simple — we use arithmetic operators.

![Arithmetic Operators](assets/arithmetic_operators.png)

All of the standard arithmetic operators learned in grade school (addition, subtraction, division, and multiplication) are supported in JS. These should look familiar.

But if you don't have a background in programming, that last operator — the modulus operator — might be new.


The modulus operator shows the remainder of a division problem.

For example, 9 divided by 4 equals 2 with a remainder of 1. The modulus operator takes two numbers as inputs and returns what's leftover from the division.

![Modulus](assets/modulus_operator.png)

The modulus operator `%` is particularly useful in programming if we want to find out if a number is even or odd.

If we divide by 2 and have a remainder of 1, we know the number is odd. If we have a remainder of 0, we know that the number is even.

Let's look at some examples:

Odd numbers:
```javascript
5 % 2;
=> 1

7 % 2;
=> 1
```

Even numbers:
```javascript
4 % 2;
=> 0

2 % 2;
=> 0
```

This may seem tedious now, but it'll come in handy later on.

####Exercise:
Look at the following five problems. Using what you have learned about numbers and operators, write down the console returns for each:

1.  `1 + 2`
2.  `2 - 5`
3.  `5 / 2`
4.  `6 * 2`
5.  `10 % 4`


>_(Answers: 1.The console returns 3.  2.The console returns -3.  3.The console returns 2.5.  4.The console returns 12.  5.The console returns 2.)_

***
<a name="guided-string"></a>
## Guided Practice: String Concatentation and Coercion (15 mins)

Now let's see how you can use string values (textual information) in JS.

When given string values, the `+` operator actually behaves differently — it concatenates, or combines, two strings together to make one big string.

Take a look at this brief [video](https://generalassembly.wistia.com/medias/rysrb53amn).

As you can see, putting single or double quotation marks around a value turns it into a string. (Again, don't worry about the `console.log()` command for now.)

So even though both "4" and "3" look like numbers to us humans, JS sees that they're in quotation marks and therefore treats them as strings.

![](assets/quotes_around_numbers.png)


Using the `+` operator to put the two strings together literally puts them next to each other, instead of evaluating their total.

This is called concatenation (when strings are glued together).

Here's another example of concatenation.

JS glued the two strings together, but do you notice anything wrong?

![](assets/missing_space.png)

There is no space between the two words!

This is because we didn't add the spaces in ourselves. It's just one of many reasons why we have to carefully watch our spacing and grammar.

To fix this, we'll have to add in the space ourselves.
We can either insert it after the string "Almost" or before the string "Done."

Here, we added a space after "Almost."

![](assets/added_space.png)

#### Syntax Guidelines

A good habit to help you avoid coding headaches: Mind your syntax.

Here are some syntax rules that are crucial to keep in mind:

1. **JS is case-sensitive**

  For example: `numberofstudents` is not the same as `numberOfStudents`, which is not the same as `NuMbErOfStUdEnTs`.

 When you want to use a variable name consisting of several words, you will get an error if you have spaces between the words. Instead, you can combine all the words together into one long variable name. The first letter in this variable name should be lowercase, and then the first letter in each word that follows should be uppercase. This is called camelcase (see how it resembles a camel with humps)?

  Here's another example:
  `var camelsAreAwesome = true;`

2. **End statements with a semicolon ;**

  `x = x + 1;`

 After each line of instruction, be sure to use a semicolon. Although you may be able to get away without using semicolons in some browsers, JavaScript often does nasty things when it guesses where to put semicolons itself. It's better to be explicit and tell the interpreter exactly where a statement should end.

3. **Use // for comments**

  Developers often use comments to make notes for themselves and other developers. You can use a comment to add content that will be ignored by the interpreter but can be read by anyone looking through the code.

  To add a comment, begin a line with two forward slashes `//`. This is an example of a great use case for pseudocode.

  Example:
  ```
  var x = 10; // declare variable x first
  var y = 5; // then declare y
  x + y // add the two variables
  ```

4. **Surround strings with quotations " "**

 Any time you have textual information, surround strings with single or double quotation marks ( `'JS is fun'`, `"O'Doyle rules!"` ). Also, use single or double quotation marks when you want numbers to function as strings (as we did in the `"4" + "3" = "43"` example).


***ES6 Syntax***
The newest version of ES6 gives us a more elegant pattern called string interpolation, using a new datatype called `string templates`.

Rather than single quotes, we use back ticks \`\`.

```javascript
var firstWord = 'hello'
var secondWord = 'world'

`${firstWord} ${secondWord}`
=> 'hello world'
```

> Exercise: Take a few minutes to concatenate strings in your console using both the `+` method and string templates \`\`, as well as string interpolation `${}`.


***
<a name="guided-assignment"></a>
## Guided Practice: Assignment Operators (15 mins)

Now, let's get back to some math and look at assignment operators.

You're already familiar with the `=` assignment operator, but there are also ones we can use to add or subtract value from a variable. Take a look:

<img src="assets/assignment_operators.png" width="500px">

The `+=` operator adds a value to an existing variable.

The `-=` operator subtracts a value from an existing variable.

There are also a couple of arithmetic operators we can use to add or subtract one from the value of a variable:

<img src="assets/increment.png" width="500px">

####Exercise:

>1.  Type `var num = 10`;
>2.  Now, type num += 4;. What do you think the value of num will become?
>3.  Type num -= 8; the console. Before you press enter, take a moment to think about what value the console will return.

>_(Answers: 1. The console returns undefined when declaring a variable using var, because the var statement returns no value  2. The console returns 14, because our value was 10 and we added 4 to it.  3. The console returns 6, since the new value was 14 and we subtracted 8 from it.
)_


***
<a name="guided-special-arithmetic"></a>
## Guided Practice: Special arithmetic methods (10 mins)
Apart from simply adding and subtracting numbers from variables, JavaScript also allows you to use special code to perform other arithmetic operations on numbers, such as finding the square root.

Some of this code will contain a dot `.`. We will cover the dot notation in more depth in a later lesson. For now, let's practice with some of the simpler arithmetic methods.


> Check: 
> 
> Take 5 minutes to look at the [Math documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and pick a function to quickly explain to the class. We'll popcorn around the room; each person will get 30 seconds to explain what their function is/does. Don't worry if you chose the same one as someone else. Repetition leads to retention!


Type the following code into the Chrome Developer Tools Console:

*  Need to take a number to a specific power? Then just use `Math.pow()`.

```javascript
// 3^2 becomes
Math.pow(3,2)
=> 9

// 2^4 becomes
Math.pow(2,4)
=> 16
```



* Taking a square root of a number? Then use `Math.sqrt()`.

```javascript
// √(4) becomes
Math.sqrt(4)
=> 2
```

* Need a random number? Use `Math.random()`.

```javascript
// The following only returns a random decimal
Math.random()
=> .229375290430
/*
The following will return a
random number between 0 and 10
*/
Math.random()*10

```

* Since Numbers can be **Floats** or **Integers**, we often want to get rid of remaining decimal places, which can be done using `Math.floor`.

```javascript
// Remove the decimal
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3

```

While it may seem like we've covered a lot of math in this section, don't worry — you're not going to be doing any calculus in this course.

When it comes down to it, computers operate on a pretty simple and straightforward logic, and there will be many times that you'll solve a problem by using one of these basic mathematical principles.


***
<a name="helper-methods"></a>
## Guided Practice: Helper Methods (15 mins)

#### String helper methods

To find the length of a string, access its [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length) property:

```javascript
'hello'.length;
=> 5
```

Strings have other [methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods) as well that allow you to manipulate the string and access information about the string:

```javascript
'hello'.charAt(0);
=> 'h'

'hello, world'.replace('hello', 'goodbye');
=> 'goodbye, world'

'hello'.toUpperCase();
=> 'HELLO'
```

#### Converting Strings to Integers with parseInt() and parseFloat()

You can convert a string to an integer using the built-in [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) function. This takes the base for the conversion as an optional second argument, which you should always provide:

```javascript
parseInt('123');
=> 123

parseInt('010', 10);
=> 10
```

This will be important later when we're taking user input from the web or from the command line and using it on our server or in our browser to do some type of numeric calculation.

Similarly, you can parse floating point numbers using the built-in [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) function, which always uses base 10 (unlike its `parseInt()` cousin).

```javascript
parseFloat('11.2');
=> 11.2
```

You can also use the unary `+` operator to convert values to numbers:

```javascript
+'42';
=> 42
```

>Check: 
>
>Let's take two minutes to use `parseInt()` and `parseFloat()` in the console.

#### NaN

The `parseInt()` and `parseFloat()` functions parse a string until they reach a character that isn't valid for the specified number format, then return the number parsed up to that point. However, the '+' operator simply converts the string to `NaN` if there is any invalid character in it.

A special value called [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) (short for 'Not a Number') is returned if the string is non-numeric:

Username example:

```js
parseInt('colin1990');
=> NaN

parseInt('1990colin');
=> 1990
```

You can test for `NaN` using the built-in [`isNaN()`](ttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) function:

```js
isNaN(NaN);
=> true
```


#### Null and Undefined

JavaScript distinguishes between:

- `null` a value that indicates a deliberate non-value.
- `undefined` that indicates an uninitialized value — that is, a value hasn't even been assigned yet.



#### Converting Numbers to Strings

* If you want to turn a number into a string you can use a helpful method called `toString()`.

```javascript
(1).toString()
=> '11'
/**
be careful though,
since numbers can be floats
javascript might
misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```

<a name="conclusion"></a>
## Conclusion (5 mins)

- Describe use cases of different data types.
- What is the difference between `undefined` and `null`?
- What is an example of a semantically-named variable?

Feel free to read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) about JavaScript fundamentals.


### ADDITIONAL RESOURCES
- Exercises
	- [Data Types Exercise](exercises/data_types_exercise.md) (Beginner)
	- [Temperature Converter](exercises/temperature_converter.md) (Beginner with Advanced Bonus Exercises)
- Videos
  - GA JS Circuit - [Assigning and Reassigning Variables](https://generalassembly.wistia.com/medias/66kaqbwoc1)
  - GA JS Circuit - [Expressions](https://generalassembly.wistia.com/medias/e1c21pib0n)
  - GA JS Circuit - [Concatenation vs. Addition](https://generalassembly.wistia.com/medias/rysrb53amn)
  - GA JS Circuit - [Intro to Arrays](https://generalassembly.wistia.com/medias/upd8qxyabg)
  - GA JS Circuit - [Arrays Deep Dive](https://generalassembly.wistia.com/medias/uey023vfx6)
- Readings
  - [JavaScript - A misunderstood Language](http://javascript.crockford.com/javascript.html)
  - [Eloquent JavaScript - Data Types](http://eloquentjavascript.net/01_values.html)
  - [Eloquent JavaScript - Variables](http://eloquentjavascript.net/02_program_structure.html)
