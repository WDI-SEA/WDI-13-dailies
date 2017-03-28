# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) jQuery Events (90 mins)


| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | Intro |
| 10 min | [Guided Practice](#mouse-events) | Mouse Events |
| 10 min | [ Guided Practice](#keyboard-events) | Keyboard Events |
| 10 min | [Guided Practice](#form-events) | Form Events |
| 5 min | [Guided Practice](#document-events) | Document Events |
| 10 min | [Guided Practice](#event-object) | Event Object |
| 5 min | [Intro to New Material](#this) | This |
| 10 min | [Demo](#event-delegation) | Event Delegation |
| 20 min | [Independent Practice](#independent-practice) | jQuery Events |
| 5 min | [Conclusion](#conclusion) |Q&A |

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Add event listeners for mouse, keyboard, form, and document events.
- Describe event bubbling.
- Explain how event delegation can be used to add events to elements that don't yet exist on the page.
- Capture data from specific events using the event object.

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*

- Use selectors and jQuery methods to:
	- Add and remove classes on DOM elements.
	- Get and set information inside DOM elements.
	- Change the value of attributes on DOM elements.
- Write jQuery code to detect and react to the click event in the DOM.

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*

- Have students open entire starter_code folder in Sublime/Atom.

---
<a name="opening"></a>
## Opening (5 mins)
- Review current lesson objectives.

In this lesson, we'll take a look at some of the most popular events with which we can use `on()`.

![](http://circuits-assets.generalassemb.ly/prod/asset/4868/Slide-3_and_37-jQuery-steps_with_code.svg)



To listen for one of these events, we'll need to pass in the name of that event as the first argument for the `on()` method.

```js
$('selectorGoesHere').on('eventGoesHere', function () {
	// Your code here
});
```


For example, if we were listening for a user to press a key in an input field, we would use keypress as the event name:

```js
$('input').on('keypress', function () {
	// Your code here
});
```


***

<a name="mouse-events"></a>
## Mouse Events (10 mins)

In the last lesson, we took a look at how we can use the `click` event in jQuery.

jQuery also provides us with other mouse events that let us respond to all kinds of actions a user might make.

Let's take a look at a few other popular mouse events:

- `dblclick`
- `mouseenter`
- `mouseleave`


#### `dblclick`

Whereas the `click` event triggers when a user clicks on an element once, the `dblclick` event triggers when a user double-clicks an element within a certain timeframe.

Double-click sensitivity (the maximum time between clicks detected as a double-click) can vary by operating system and browser, and is often configurable by users.

```js
$('button').on('dblclick', function () {
	$('.circle').fadeOut();

});
```

You can see that the event is not triggered when a user clicks once, but instead when he or she clicks a second time.

#### `mouseenter` and `mouseleave`

As you may recall, CSS allows us to perform some basic actions when a user hovers over an element.

For example, maybe we want to change the color of an anchor when a user hovers his or her mouse over it.

With jQuery, we have tighter control over which actions can occur when a user places the cursor over an element.

The `mouseenter` and `mouseleave` events allow us to perform separate actions when the cursor enters and leaves an element.


For example, let's say we want to display a message and fade in a photo when a user hovers over a specific button.


> Instructor note: Demo located in [examples/types\_of\_events](examples/types_of_events).

```html
<button>Bring in Elvis!</button>

<p></p>

<img src="images/elvis.jpg" alt="">
```

And here are what the `mouseenter` and `mouseleave` events look like in our JavaScript file:


```js
$('button').on('mouseenter', function() {
  $('p').html('Elvis has entered the building!');
  $('img').fadeIn(350);
});


$('button').on('mouseleave', function() {
  $('p').html('Elvis has left the building!');
  $('img').fadeOut(350);
});


```


When a cursor enters the button element, the message is swapped out and the photo fades in.

Then, when the mouse leaves the button element, the message is again swapped and the photo fades out.

Behold — the power of jQuery!

#### Exercise:

Follow the instructions under **step 1** in the `main.js` file in [starter\_code/events\_practice](starter_code/events_practice).

Be sure to test it out and make sure things are working!


***

<a name="keyboard-events"></a>
## Keyboard Events (10 mins)

We'll start by exploring some of the different kinds of keyboard events:

* `keypress`
* `keydown`
* `keyup`

#### Keypress and Keydown

> Instructor note: Demo is located in [examples/types\_of\_events](examples/types_of_events).

As you may have guessed from their names, `keypress` and `keydown` events are fired when a user presses a key.

So what's the difference between the two?

If a user presses a "special," or non-character key (control, alt, shift, etc.), the `keydown` event will fire, but the `keypress` event will not.



![](http://circuits-assets.generalassemb.ly/prod/asset/4880/2kNLbMCA2DwqpVInGtW0ljg76dKzVuWbp467TNy7fI3r6ANdkNTFjsnsKIifxNzBjZ4MaQeSyOTFnF5MqYUR3OzDmU3TegQ4seTbo06TimU6tezbq16M6wY8ueTdtRCAA7.gif)



If a user holds a key down, the `keydown` event will fire multiple times, while the `keypress` event will only fire once.



![](http://circuits-assets.generalassemb.ly/prod/asset/4881/XDAIAOw__.gif)

#### keyup
> Instructor note: Demo is located in [examples/types\_of\_events](examples/types_of_events).

Now, let's examine the `keyup` event.

If we want to perform an action after the user has typed a character (i.e., when he or she releases the key), we can use the `keyup` event:

```js
$('input').on('keyup', function () {
	var userInput = $(this).val();
	if (userInput === "cat") {
		$('img').fadeIn(350);
	}
});

```

#### Exercise

Follow the instructions under **step 2** in the `main.js` file in [starter\_code/events\_practice](starter_code/events_practice).

Be sure to test it out and make sure things are working!

***

<a name="form-events"></a>
## Form Events (10 mins)

Now that we've got a handle on our mouse and keyboard events, let's take a look at some form events.

* `submit`
* `change`
* `focus`
* `blur`

#### submit

The `submit` event fires when a user submits a form.

This event triggers when a user clicks on an `<input type="submit">` or `<button type="submit">`, or when he or she presses the enter key while certain form fields have focus.

Let's take a closer look at this in action. Here we have a simple HTML form:

> Instructor note: Demo is located in [examples/types\_of\_events](examples/types_of_events).

```html
<form id="myForm">
	<input type="text" value="Enter your favorite color">
	<button type="submit">Submit!</button>
</form>

```

And our JavaScript:

```js
$('#myForm').on('submit', function (e) {
	e.preventDefault();
	$('p').html('Form has been submitted!');
});
```


Note how we selected the form element in our JavaScript &mdash; `$('#myForm')`.


#### change

Let's move on to the `change` event.

The `change` event is available for `<input>` elements, `<textarea>` boxes, and `<select>` elements.

It's fired when a user types a character into an input or textarea, or when the user clicks on a selection in a select box, checkbox, or radio button.


Here's an example:

We have some HTML that contains a checkbox and an empty paragraph:


```html
<input type="checkbox"><label for="">Opt into newsletter</label>

<p></p>
```


In our JavaScript, when the checkbox is changed (i.e., when a user makes a selection using the mouse), we want to display the text: "You have opted in!"

```js
$('input').on('change', function () {
  $('p').html('You have opted in!');
});
```


#### focus and blur

> Instructor note: Demo is located in [examples/types\_of\_events](examples/types_of_events).

The `focus` event fires when a user clicks or tabs into an `input`, and the `blur` event fires when he or she clicks or tabs away from one.

For our HTML, we have a simple `input` field and an empty `p`:



```html
<input type="text" placeholder="Your text here!">
<p></p>
```

And, in our JS, we display the message "input is in focus!" when the user focuses on the `input`, and "input is no longer in focus." when the user tabs or clicks away (i.e., the `blur` event).

```js
$('input').on('focus', function () {
  $('p').html('input is in focus!');
});

$('input').on('blur', function () {
  $('p').html('input is no longer in focus.');
});
```


By using these form methods, we can make our forms seem much more intelligent and responsive. We can respond to every action a user takes, such as making a selection or tabbing away from a field, and check to make sure the format of the information he or she has entered is correct.

By verifying this information before a user submits a form, we're ensuring that we provide the best user experience.


#### Independent Practice - Turn and Talk

Turn to a partner and see if you can think of three practical examples where these events might be used:

* `submit`
* `change`
* `focus`
* `blur`

**Bonus:** Try to find an example or two in use on a webpage, and demo it for the class.

***

<a name="document-events"></a>
## Document events (5 mins)

> Instructor note: Demo is located in [examples/types\_of\_events](examples/types_of_events).
>
Finally, let's take a look at some document events:

* `resize`
* `scroll`

#### scroll

We'll start with the `scroll` event.

The `scroll` event fires whenever a user scrolls to a different location within an element.


If we want something to fade in when a user scrolls down to a certain part of our web page, we can use `$(window)` as our object.

Take a look:


```js
$(window).on('scroll', function () {
	if ($(window).scrollTop() > 350) {
		$('img').fadeIn();
	}
});
```


**Note:** When tying events to the window object, we will **not** use quotes in our jQuery selector.


#### resize

Now, finally, let's take a look at the `resize` event.

The `resize` event fires when a user resizes his or her browser:

```js
$(window).on('resize', function () {
	if ($(window).width() < 700) {
		$('img').fadeIn();
	}
});
```  

#### Independent Practice

Follow the instructions under **steps 3 and 4** in the `main.js` file in [starter\_code/events\_practice](starter_code/events_practice).

Be sure to test it out and make sure things are working!

***

<a name="event-object"></a>
## Event Object (10 mins)
> Instructor note: Use code in [examples/event\_object](examples/event_object) to demo.

The way we access jQuery's event object is very similar to how we access the event object in JavaScript.


To access the event object in jQuery, we first need to provide a name for it within the parentheses of the function that will run when the event occurs.

```js
$('li').on('click', function (e) {
	var typeOfEvent = e.type;
});
```

The name we provide for the event object is what we'll use to access it from within the function: in this case, `e`.

Just like in Vanilla JavaScript, we can provide whatever name we'd like for this parameter.

But we want this name to be descriptive and easily understood by other developers, so we'll use common names such as `evt` or `e`.


Just as with the JavaScript event object, the jQuery event object has properties and methods we can use to learn more about the event that has occurred.

Let's take a look at some of the most common properties and methods we'll want to access:

![](http://circuits-assets.generalassemb.ly/prod/asset/4889/slide-7-properties_methods.svg)


#### type

The type property tells us what `type` of event occurred (i.e., `click` or `focus`).

As we'll see later in this lesson, this property comes in handy when we want to listen for multiple types of events on a single element.

![](http://circuits-assets.generalassemb.ly/prod/asset/5167/slide-9-click.svg)

#### which

We can use the `which` property to tell us which button or key was pressed during a key or mouse event.

Imagine we have a simple input field and need to find out which keys our users press as they fill it out.

Behind the scenes, each key has a number, or keycode, associated with it. For example, the letter "f" has a code of 70 and the letter "m" has a code of 77.

These codes allow us to use the event object to find out which key the user pressed.

```js
$( "input" ).on( "keydown", function( event ) {
	$( "#log" ).html( event.type + ": " + event.which );
});
```

![](http://circuits-assets.generalassemb.ly/prod/asset/4902/8AAAACBYSPqYsFADs_.gif)


#### target

The _target_ property lets us know which specific DOM element triggered an event.

For example, if we are listening for a click on a bunch of list items, we can find out which individual item was clicked.

```js
$('li').on('click', function(evt) {
  var clickedElement = evt.target;
  console.log(clickedElement);
});
```


#### preventDefault()

> Instructor note: Use code in [examples/event\_object](examples/event_object) to demo. There's an anchor toward the bottom of the page.


As we saw when working with Vanilla JavaScript, we can use the `preventDefault()` method to prevent the default action of elements.

For instance, when a user clicks on an anchor, we can use _preventDefault_ to prevent the browser from reloading, and instead have a menu slide out from the side of the page.

Or when a user submits a form, we can use it to check that all fields are filled out correctly before the data is submitted.

```js
$('a').on('click', function (event) {
	// Prevent page from refreshing
	event.preventDefault();

	// Slide a menu out from the side of the page.

});
```

#### `stopPropagation()`
Finally, the `stopPropagation()` method will stop an event from bubbling up to its ancestors.

A quick refresher: Event bubbling refers to when an event starts at the most-specific element node and then flows outward toward the least-specific node.

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4896/Slide-20-Event-Bubbling.svg" width="300px">


Just as with Vanilla JavaScript, we can use the `stopPropagation()` method to stop the event from bubbling up and triggering events on its ancestor elements:

```js
$('li').on('click', function (evt) {
	// Now when a user clicks a list item, events that are tied to any ancestor
	// elements will not also be triggered.
	evt.stopPropagation();

});
```

<a name="this"></a>
## This (5 mins)
As we saw in a previous lesson, when a callback function is executed within the context of an event handler, the `this` keyword refers to the element that we selected when we set up our event handler.

If we want to be able to use jQuery's methods, we simply wrap `this` in `$()`, like so:

```js
$('.task').on('click', function () {
	$(this).addClass('completed');
});
```

By using `$(this)`, we are able to take advantage of jQuery's `addClass()` method to add a class to the `.task` that was clicked.

> Note: In contrast to when we select elements using jQuery, there are no quotation marks around `this`.


<a name="event-delegation"></a>
## Event Delegation (10 mins)

> Instructor note: Use code in [examples/event\_delegation](examples/event_delegation) to demo.

There may be times when we want to tie events to elements that don't yet exist on our web page.

For example, suppose we are building a page that allows our users to enter to-do list items.

In our HTML, we have a simple form for submitting tasks, and an unordered list where new tasks will be added:


```html
<h1>To-Do List</h1>

<form>
	<input type="text" placeholder="What groceries do you need to buy?">
	<button type="submit">Add Item to Grocery List</button>
</form>

<ul id="taskList"></ul>
```

When a user submits a new task, we'll add that task to the list:


```js
// When the user submits the form
$('form').on('submit', function (e) {
  e.preventDefault(); // Prevent the page from reloading

  var newTask = $('input').val(); // Grab the value the user entered into the input
  $('#taskList').append('' + newTask + ''); // Add a new task to the #taskList

  $('input').val(''); // Empty out the input field
});
```

Now we want to provide our users with the ability to "check off" tasks by adding the `.completed` class, which will display a line-through when they click on a task.

**CSS:**

```css
.completed {
  text-decoration: line-through;
}
```

Then, we'll want to listen for a user to click on a list item, and add the completed class to the item they've clicked:

```js
$('li').on('click', function () {
	$(this).addClass('completed');
});
```


It is important to understand that these direct events are only attached to elements at the time that the `on()` method is called.

Since the list items did not exist at the time of the page load, the event was not tied to these elements.

#### Adding events to elements that do not yet exist

So how can we fix this?

By using event delegation, we can listen for events on elements that do not yet exist, such as our to-do tasks.

Event delegation allows us to attach a single event listener to a parent element that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future.

```js
$('ul').on('click', 'li', function () {
	$(this).addClass('completed');
});
```

In this example, we are attaching an event listener to our parent element, the unordered list.

When a user clicks on the list, the function will run if the actual element the user clicked matches our second argument, `'li'`.

We're able to do this because, unlike the list items, the unordered list exists when the page first loads.

We'll want to use this method anytime we need to tie events to elements that don't yet exist on the page.

#### Performance
Event delegation can also improve our site's performance when there are many items we are listening to.

For example, let's say we have a list of 1,000 employees.

Adding an event to an element takes time. If we were to add a click event to all 1,000 employees, it would take much longer than we'd like.

```js
// Here we are adding a click event to all 1,000 list items, one for each employee
$('li').on('click', function () {
  // Display employee profile in sidebar
});
```

Instead, we can add one event to the parent of all of our list items, and then filter down any click events on the parent to check and see whether a user has clicked on a list item.

```js
$('ul').on('click', 'li', function () {
  // Display employee profile in sidebar
});
```

This way, we are adding a click event to one element, instead of 1,000. This makes a big difference in performance when we listen for an event on a large group of similar elements.

<a name="independent-practice"></a>
## Independent Practice (20 mins)

In this exercise, you will practice using events and event delegation.

Take a look at the starter code that has been provided in [starter\_code/comment\_form](starter_code/comment_form). An HTML file with a basic comment form and a CSS file with some basic styles have been created for you.

Instructions:

1. In your JS file, make sure the document is ready before you write any of your jQuery (`$(document).ready(function () { });`).
2. When the form is submitted (Hint: the event here is `submit`):
	- Prevent the default action of the form so the page won't reload.
	- Get the value the user entered into the comment form (hint: look up `.val()`).
	- Append a list item to `#commentList` in the following format:
		`<li>{Comment goes here} <a href="#" class="delete">Delete</a></li>`
3. After a comment has been added, when the user _clicks_ the 'delete' anchor (hint: you'll need to use event delegation here, since the anchors don't exist when the page loads):
	- Delete that comment (Hint: you may need to look up the `parent()` method).

**Bonus:** 
- Check to see if the user entered any input, and only add a new comment to the list if the `textarea` is not empty.
- Add functionality to allow the user to edit a comment. You'll have to add some HTML for this step.

***

<a name="conclusion"></a>
## Conclusion (5 mins)
In this lesson, we took a deeper look at how we can work with events in JavaScript.

Before we wrap things up, take a look at this [https://kinhr.com/](site) and see how many different events you can find being used on the page. Be sure to click on "Try Kin Free" and try filling out the form to see what form events you can pinpoint.

***



### ADDITIONAL RESOURCES
- Exercises
	- [Event Listener Practice](exercises/event_listener_practice) (Beginner - 10 mins)
	- [This Practice](exercises/this_practice) (Beginner - 15 mins)
	- [jQuery from Scratch (lesson and exercises)](exercises/jquery_from_scratch) (Advanced - 90 mins)
	- [Code School - Intro to jQuery](http://try.jquery.com/)
	- [TutsPlus - 30 Days to Learn jQuery](https://code.tutsplus.com/courses/30-days-to-learn-jquery)
- Videos
	- [JS Circuits - This](https://generalassembly.wistia.com/medias/y7on13jsnq)
- Readings
	- [jQuery Documentation](https://api.jquery.com/)
	- [Events and Event Delegation](http://jqfundamentals.com/chapter/events)

> Instructor Note: When possible, provide a brief description of Additional Resources, classifying whether it is for advanced or beginner students.  
