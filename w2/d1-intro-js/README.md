# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to JS (60 mins)



| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Opening](#opening) | Intro |
| 15 min | [Guided Practice](#what-can-js-do) | What Can We Do with JavaScript? |
| 5 min | [Independent Practice](#independent-practice) | JS Exploration |
| 5 min | [Guided Practice](#client-side-programming) | The Client-Side Programming Language |
| 10 min | [Guided Practice](#environment) | Setting up our Environment |
| 10 min | [Guided Practice](#console) | Using the Console |
| 5 min | [Conclusion](#conclusion) |Q&A |

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Describe the role JavaScript plays alongside HTML and CSS.
- Define website behavior and the practical uses of JavaScript.
- Analyze a website and figure out what is accomplished using JavaScript, HTML, and CSS.
- Demonstrate the ability to include JavaScript files in a project.

---
<a name="opening"></a>
## Opening (10 mins)
So far in this course, we've learned how to create a structure for our sites using HTML, and how to add styles and some basic animation using CSS.

There's a bit of interactivity - simple animations and hover effects - we can program through CSS. But not nearly enough!

Enter JavaScript!

#### HTML, CSS and Javascript

We add _structure_ using HTML, _style_ using CSS, and _behavior_ using JavaScript.

If we were to compare these languages to parts of speech in English, HTML would be our noun, providing our page with structure; CSS would be our adjective, as it describes, or styles, our page; and JavaScript would be our verb, because it adds interactivity, or behavior, to our page. ![](http://circuits-assets.generalassemb.ly/prod/asset/4593/Slide-26-HTML-CSS-JS-Annotated.svg)

> JavaScript is a programming language, but CSS and HTML are not. CSS is a stylesheet language, and HTML is a markup languge.

#### Turn and Talk

Sum up the roles HTML, CSS, and JS play on a website in a couple of sentences, providing an example of something that you would use each for.

**Bonus** Think of an analogy!

<a name="what-can-js-do"></a>

## What Can We Do With JavaScript? (15 mins)

#### Access Content

You can use JS to select any element, attribute, or text from an HTML page.

Examples:

- Find out what the user entered into a text input when they submit a form.
- Find out whether the user checked a checkbox.

#### Modify Content

You can use JS to add elements, attributes, and text to the page (or remove them).

Examples:

- Change the size, position, color, or other styles of an element. 
- Add or remove a class from elements to trigger new CSS rules for those elements.

> Instructor note: Show an example of a site with a sidebar that slides out/down when clicking a hamburger icon. Possible example: [GA site](https://generalassemb.ly/) (on small screens).


#### Program Rules

You can specify a set of steps (instructions) for the browser to follow.

Examples:

- Have images/text fade in as the user scrolls down the page.
- Check to make sure the user has entered a valid email address into a form, and display an error message if they haven't.

> Instructor note: Show an example of a form with validation. Possible site: [Earnest Loans](https://www.earnest.com/student/#/check-rate)

#### React to Events

You can specify that a script should run when an event occurs.

Examples:

- When a button is clicked.
- When the cursor hovers over an element.
- When the user types information into a form.
- When a page has finished loading.
- When the user hits 'enter' to submit a form.

#### No Refreshes / User Experience

Examples:

- When I comment on a post, Facebook is able to process my new comment and render it on the page without refreshing the entire page.
- Gives the page a much smoother user experience compared to a static page that doesn't have this sort of functionality.

> Instructor note: Demo using Facebook or another app.

#### Communicate with a server

JavaScript can tell a server that:

	1. A user has done something.
	2. Save that interaction.
	3. Display the results of that interaction to all other users.

> Instructor note: Demonstrate adding a comment on Facebook or Instagram.

<a name="independent-practice"></a>
## Independent Practice (5 mins)

> Instructor Note: Pick any site for this activity, but a site with lots of interactions would be best.

- Spend two minutes looking at [kinhr.com](https://kinhr.com/). Scroll down the page, click on some buttons, and see if you can pinpoint what on the page is done with JavaScript.
- Think about the site's functionality after it loads. 
- Why would you say a particular feature is "run" by JavaScript instead of, say, CSS?

_How about things like style changes when hovering over the buttons? Are these accomplished using JS or CSS?_

<a name="client-side-programming"></a>
## JS: The Client-Side Programming Language of the Web (5 mins)

- Brief history: Created in 10 days by [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich), of Mozilla.
- *Not* related to Java in any way but its name. They are completely different languages.
  - "Java" is to "JavaScript" as "ham" is to "hamster."


#### Why is it the dominant programming language of the web?
- Barriers to entry for learning JavaScript are very low.
  - No additional software required to run it, just a text editor and a browser.
    - You can even run it directly in the browser via its JavaScript console.
      - Example: Hide images on the GA website.
      - You'll learn more about the browser JavaScript console later in this lesson.
- On top of that, it's supported by all web browsers.
- JavaScript has evolved since its creation.
  - One of the biggest additions to JS was AJAX, which allows users to reload parts of a page without refreshing the entire thing (just like on Facebook). This has big implications for user experience.
- A lot of frameworks and libraries &mdash; such as Backbone and jQuery &mdash; have emerged that enable us to do so much more &mdash; and do it quickly &mdash; with JavaScript.

<a name="environment"></a>
## Setting Up Our Environment (10 mins)

#### First, Create Your HTML and JS
> Instructor note: Code along with students.

Let's see what it takes to add JavaScript to your HTML.

Starter code for this portion of the lesson can be found in [starter\_code/adding\_js](starter_code/adding_js).

HTML renders line by line, so it's important to think about where we'll place our JS.

First, we'll need to create a JavaScript file. The process is similar to creating any other file; we just want to use a `.js` extension for JS. Common names for JavaScript files are `main.js` and `script.js`.


On larger sites, we'll want to house all of our JavaScript files in a folder to keep them organized. It's common to call this folder "js" or "scripts."

Just like we need to add a `<link>` tag when we want to tell our browser where it can find the CSS files associated with our HTML page, we need to add a `<script>` tag to let the browser know where it can find the page's associated JS files.



```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Hooking up JS</title>
</head>
<body>
	<h1>Adding a JS file</h1>


	<script src="main.js"></script>
</body>
</html>
```

We recommend you include your JS files right before the closing `</body>` tag in your HTML code.

You can also put your script tag in the head. Putting the tag in the body ensures that the rest of the page loads before your script files run. However, [HTML5 has two new attributes ](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html) that allow for more control in how scripts run, regardless of whether they are placed in the head or body.


#### Working with Libraries

If you have multiple JS files that depend on one another, it matters what order you place them in your HTML.

Because HTML is parsed by the browser from the top down, any **libraries** (defined later on) we add to our project must appear above any other JS files using these libraries.

If not, the JS script will crash when it tries to use any methods defined in that library, because it won't know those methods exist.

A **library** is a file that contains pre-written code you can download and include in your project.

It allows you to take code that other developers have written and use its functionality so you don't always have to write everything from scratch.

We'll be working closely with the jQuery library later in this course.


#### Making Sure Everything is Hooked Up

Now make sure your JS file is hooked up to your HTML correctly:


![](http://circuits-assets.generalassemb.ly/prod/asset/5059/Slide-54.png)

<a name="console"></a>
## Using the Console (10 mins)

Next, open the site in Chrome. Open the Dev Tools.

- Command + Option + I (Or right-click on the page, click "inspect", and click the "console" tab).
- The "Console" is a REPL.
  - "Read-Eval-Print Loop".
  - Programming environment that lets us run Javascript code one line at a time.
  - What does it do?
    1. (R)eads our code.
    2. (E)valuates it.
    3. (P)rints it to the console.
    4. Then it (L)oops back to the beginning, ready to (R)ead the next line of code we feed it.
  - Primarily used for testing and debugging.

> `⌘ + ⌥ + i` enters you into the Chrome Dev Tools (if you're using chrome...). Here you can do a bunch of stuff like inspect elements and look at the HTML. More importantly for this class though, it allows you to access the console, which interacts with the JS you loaded to your page. In our case, we'll see that interaction with the code below.

In your `script.js` file, add the following:
```js
console.log("hello world")
```

> console.log() is just a way to log something in our REPL.

Now open your console and see the message that was logged.


***

<a name="conclusion"></a>
## Conclusion (5 mins)
In this lesson, we took a look at the role that JavaScript plays in web development alongside HTML and CSS.

We also looked at how you can get your environment set up to start writing JavaScript.

In the next lesson, we'll dig into some JavaScript fundamentals &mdash; data types and variables.


***


### ADDITIONAL RESOURCES

- Readings
	- W3 - [What Can You Do with JavaScript?](https://www.w3.org/community/webed/wiki/What_can_you_do_with_JavaScript)
	- Stack Overflow - [What Can JavaScript Do?](http://stackoverflow.com/questions/3387603/what-can-javascript-do)
	- [What Cool Things Can I Make with JavaScript?]
(https://www.quora.com/What-cool-things-can-I-make-with-JavaScript)
	- Codecademy - [Linking HTML and JS files](https://www.codecademy.com/en/forum_questions/518949bb96913300dd000fc3)
