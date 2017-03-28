# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Chrome Dev Tools and Debugging JS (90 mins)


| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | What is an Error? |
| 10 min | [Independent Practice](#independent-practice) | Common Errors |
| 10 min | [Intro to New Material](#reading-error-messages) | Reading Error Messages |
| 20 min | [Intro to New Material](#tools-debugging) | Tools for Debugging |
| 10 min | [Independent Practice](#debug) | Debug |
| 10 min | [Intro to New Material](#debugger) | Debugger |
| 10 min | [Intro to New Material](#find-answers) | How to Find Answers |
| 20 min | [Independent Practice](#fizz-buzz) | Fizzbuzz Errors |
| 5 min | [Conclusion](#conclusion) |Q&A |

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Identify and resolve common and uncommon "logical errors" that affect the results of your program.
- Use logs to troubleshoot errors in an application.

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*

- Create variables in JavaScript.
- Differentiate between data types (strings, numbers, Booleans).
- Use conditionals to control program flow based on Boolean conditions.
- Create arrays and access/manipulate elements in arrays.


---
<a name="opening"></a>
## Opening (5 mins)
- Review current lesson objectives.

Oftentimes, the toughest part of troubleshooting is identifying the exact cause of the problem.

In this course, we'll teach you to identify and decipher errors.

What does it mean to have an error in JS?

Errors don't just happen. Chrome doesn't just "break." In fact, it's not Chrome that's throwing the error at all &mdash; it's JavaScript.

Whenever you run into an error, it's because somewhere in the code you're running (or in JavaScript's source code) there's a line that says: "When this happens, throw an error."

#### What's an Error?

Let's see how to throw an error.

Here's a piece of HTML/JS that manually "throws" an error...

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS Errors</title>
    <script>
    	throw(new Error("Oh, noes."));
    	console.log("Such is life.");
    </script>
  </head>
  <body></body>
</html>
```

The result:

```
Uncaught Error: Oh, noes.       index.html:6
```

Note that the line with `console.log("Such is life.")` will _never run_. This is one of the things that can make writing JavaScript frustrating at first. One little error in your code can prevent any of your code from running!

> **Note**: Don't worry too much about the syntax of how to throw an error; you won't be creating your own custom errors very often in this class. We're just showing this so you know what "magic" is going on under the surface.

<a name="assets/#common-errors"></a>
## Independent Practice: Common Errors (10 mins)

Now that we know a little bit about what an error is and when it is thrown, let's look at some of the most common errors that you will run into in JS.

#### Encountering Common Errors in JS

For the following exercise:

1. Open Chrome.
2. Open Dev Tools (right click, "inspect").
3. Open the console tab.


Take five minutes to independently work through this exercise.

You will first copy the code under each step and paste it into the console, and then hit "enter."

When you do, you should see an error message with a description of the error added to the console.

For each step, fix the error and then run the code in your console again until the code for that step is error-free.

Resist the urge to fix the error before running the code in your console if you spot it right away. The goal here is to see what errors you might encounter in a program.

1.

```js
var myString = "awesome";

function printString (str) {
  console.log(str);
}

printString(str);
```

2.

```js
var total = 0;

var cashRegister = {
  addToTotal: function (amount) {
    return total + amount;
  }
}

total = cashRegister.add(4);
```

3.

```js
function shoutLongWords (word) {
  if (word.length > 5)
    console.log(word.toUpperCase());
  } else {
    console.log(word)
  }
}
```
<a name= "assets/#reading-error-messages"></a>
## Reading Error Messages (10 mins)

JavaScript has [7 error types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types). Three of them will account for 99% of the errors you encounter in this class, so we're going to focus on those.



Check: What might these three words mean in the context of JavaScript?

- Syntax
- Reference
- Type

<br>
  > Answers:

  > Syntax: The way the code is actually written.

  > Reference: The process of calling variables and functions.

  > Type: The different kinds of data JavaScript can handle, such as strings and numbers.


<a name="tools-debugging"></a>
## Tools for Debugging (20 mins)

> **Note**: If the `"Preserve log"` checkbox is checked in your Chrome console, uncheck it. When it's checked, it doesn't clear error messages when you refresh your page. This can make your console get *really* ugly *really* quickly.

#### Reading Error Messages

Let's say I get this error message:

```
Uncaught SyntaxError: Unexpected token {      controller.js:8
```

##### Question: In what file and on what line is the error?

  > Answer: Line 8 of `controller.js`.


Click on `controller.js:8` and it will show you that specific line of code.

#### `console.log`-ing

More often than not, errors are usually caused by some variable not having the value you expect. 

The easiest way to debug variables is to see how the value of a variable changes over time by placing `console.log` statements in our script. 

From there, we open the console and look for the place where our variable stops having the value we expect it to have. That will help us pinpoint the error.

Be thoughtful about your debugging! Instead of just placing `console.log` statements everywhere in your code, first start by making small hypotheses about what could be wrong. Then use `console.log` statements to prove those hypotheses to be true or false, leading to intentional and specific changes in your code.

Let's see this in action by taking a quick look at a code example.

<a name="debug"></a>
## Independent Practice: Debug (10 mins)

Check out the starter code inside [starter\_code/practice\_01](starter_code/practice_01) for a calculator program that isn't running correctly.
Don't scan the JS file for errors. Open up your Dev Tools and follow their errors to figure out what's wrong.

> **Note**: No need to clone, just follow along with the instructor on the board.


<a name="find-answers"></a>
## How To Find Answers (10 mins)

But let's say you've tried to solve the problem and think for yourself, and you're still stuck?

We're going to cover all the topics you need in this course, but we also want to provide you with important self-help resources. One of the best is surprisingly simple: Google.

Professional web developers often joke that a third of being a real programmer is just knowing how to find answers via Google.

This may be an exaggeration, but the point is not to worry if you ever find yourself scouring the web for the solution to a difficult coding problem. Even professionals do this, and it's totally normal.

#### Google Fu

When you search Google, it's important to include the programming language you're using in your search to narrow the results.

For example, if you're looking to add an alert message to your page using JavaScript, you should search "alert JS" or "alert JavaScript."

Only searching for "alert" will likely provide results that are far too broad.

As you know, Googling something doesn't always lead to a perfect answer or an exact solution.

Let's say we get the following error in the console...

```bash
Uncaught ReferenceError: robins_spatula is not defined
```

How should we go about Googling a solution to this error?

##### A Developer's Guide to Google Fu:

1. Copy and paste the exact text of your error into Google, and then remove any words that are specific to your script.
    * For example, instead of:
    ```
    Uncaught ReferenceError: robins_spatula is not defined
    ```
    ...search for:
    ```
    Uncaught ReferenceError: is not defined
    ```

2. If you're looking for a specific phrase, put it in quotes.
    * `is not defined` will return any page with the words `is`, `not`, and `defined`.
    * `"is not defined"` will return any page with the exact phrase `is not defined`.


3. Use `-` to exclude stuff.
    * `ReferenceError -jquery` will return any page with `ReferenceError` and **without** `jquery`.


4. Use `site:sitename.com` to search within a site
    * `site:stackoverflow.com ReferenceError` will search for pages with `ReferenceError` inside Stack Overflow only.


#### Stack Overflow

Stackoverflow.com is a Q&A forum where most of the questions you'll run into have probably already been asked and answered (we suggest you scroll down to find the answer with the most number of votes).

When the instructors look at things on Stack Overflow, we tend not to read the actual content of the question; we skip straight to the answers.

If the answer doesn't look promising, go to the next one. Repeat until the answers have very few upvotes.

If none of the answers are promising, go on to the next thing that turned up on Google.

You can get [badges](assets/stackoverflow.com/help/badges) and [special privileges](assets/stackoverflow.com/help/privileges) on Stack Overflow by asking good questions and giving good answers!


> Instructor Note: Be sure to demo this for students. Show them what questions and answers look like and how to navigate Stack Overflow.

#### Mozilla Developer Network

Mozilla Developer Network (MDN) is another excellent resource. It contains loads of tutorials, references, and documentation for any questions you might have regarding HTML, CSS, and JavaScript.

<a name="fizz-buzz"></a>
## Independent Practice (20 mins)

Check out the starter code inside [starter\_code/practice\_02](starter_code/practice_02) for a fizzbuzz program that isn't working.
Don't scan the JS file for errors. Open up your Dev Tools and follow their errors to figure out what's wrong.

***

<a name="conclusion"></a>
## Conclusion (5 mins)
- Review independent practice solution

In this lesson, we've taken some steps toward being able to more efficiently solve problems and figure out how to find answers when we encounter errors in our code.

Debugging is a skill that takes time and practice to learn. We recommend you keep your console open at all times when working through JavaScript problems.

Developer tools are the first place developers look for clues when something is not working as expected. It takes much less time to quickly glance and see an error message pinpointing the issue and the file/line of code than to scan through all of your JavaScript and manually try to pick out the error.


***


### ADDITIONAL RESOURCES
- Exercises
	- CodeSchool [Discover DevTools Course](https://www.codeschool.com/courses/discover-devtools)
- Videos
	- [Inspect Element](https://generalassembly.wistia.com/medias/3nsqx78lwo)
	- WDI8 Screencasts
		- [Part 1](https://youtu.be/dCukspxmNDs)
		- [Part 2](https://youtu.be/VbfB1qB20Yk)
- Readings
	- [Google Tutorial - Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools/)
	- [Scotch - Guide to Chrome Dev Tools](https://scotch.io/tutorials/debugging-javascript-with-chrome-devtools-breakpoints) (Beg - Very thorough)
	- [Debugging in JS](http://eloquentjavascript.net/08_error.html)


> Instructor Note: When possible, provide a brief description of Additional Resources, classifying whether they are for advanced or beginner students.  
