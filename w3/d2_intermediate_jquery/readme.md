
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intermediate jQuery (90 mins)

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | Opening |
| 10 min | [Intro to New Material](#method-chaining) | Method Chaining |
| 10 min | [Intro to New Material](#dom-traversal) | DOM Traversal |
| 55 min | [Independent Practice](#independent-practice) | To-Do List |
| 10 min | [Conclusion](#conclusion) |Q&A |

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Explain how method chaining can be used to write more concise code in jQuery.
- Describe DOM traversal.
- Practice DOM traversal, using the `this` keyword, and event delegation, by building a To-Do List application.

### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*

- Add event listeners for mouse, keyboard, form, and document events.
- Explain how event delegation can be used to add events to elements that don't yet exist on the page.
- Use CSS selectors with the jQuery or `$` method to select elements in the DOM.
- Use selectors and jQuery methods to:
	- Add and remove classes on DOM elements.
	- Get and set information inside DOM elements.
	- Change the value of attributes on DOM elements.

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*

- Review the solution for the To-Do List application.

---
<a name="opening"></a>
## Opening (5 mins)
- Review jQuery selectors and methods.
- Review current lesson objectives.

***

<a name="method-chaining"></a>
## Intro to New Material: Method Chaining (10 mins)
Let's switch gears a bit, and talk about yet another way that jQuery helps us write concise code and improve our workflow: method chaining.

**Method chaining** is when we select an element and then do several things with it at once, by chaining, or tacking on, multiple methods together using dot notation.

#### Without Method Chaining

```js
$('li').addClass('task-complete');
$('li').removeClass('task-incomplete');
$('li').append('Complete!');
```

#### With Method Chaining

```js
$('li').addClass('task-complete').removeClass('task-incomplete').append('Complete!');
```

See how we were able to chain together multiple methods so that we could add a class, remove a class, and add some content to our list item all at once?

#### Method Chaining Use
As you can see, method chaining results in code that is more compact.

But is it clean?

You might have noticed that the example with method chaining was a little trickier to read. When chaining multiple methods together, we can make our code easier to read by placing each new method on a new line:

```js
$('li')
  .addClass('task-complete')
  .removeClass('task-incomplete')
  .append('Complete!');
```

Now we get the benefits of method chaining while still keeping things clean and readable. It's easy to tell at a glance what methods are being executed on the `$('li')` element.


***

<a name="dom-traversal"></a>
## Intro to New Material: DOM Traversal (10 mins)

In a previous lesson, we took a look at how we can select elements using jQuery.

We can also select elements based on their relationship to each other. This is referred to as _traversing the DOM_.

Let's take a look at the seven methods we can use to find relatively positioned elements:

- `parent()`
- `children()`
- `siblings()`
- `next()`
- `prev()`
- `closest()`
- `find()`

#### `parent()`
First, let's look at jQuery's `parent()` method, which allows us to find the direct parent of another element.

<!-- For fundamentals:
To find the parent of the list items, which would be the ul, we make our initial selection, `$('li')`, and then use the `.parent()` method.-->

```js
$('li').parent()
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4657/Screen_Shot_2016-06-07_at_11.33.09_PM.png" width="500px">

We can also _optionally_ pass in a CSS-style selector as an argument for the `parent()` method.

If provided, both the method and selector must match for the element added to the new selection:

```js
$('li').parent('.info');
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4658/parent_with_argument.png" width="500px">


#### `children()`
Next, let's look at the `children()` method, which allows us to find all children of a selection.

```js
$('ul').children()
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4659/Screen_Shot_2016-06-07_at_11.29.52_PM.png" width="500px">

Or:

```js
$('ul').children('#data');
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4660/children_with_argument.png" width="500px">


#### `siblings()`

The `siblings()` method allows us to find all siblings of an initial selection.


```js
$('li:first-child').siblings()
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/5107/Screen_Shot_2016-06-07_at_11.31.30_PM.png" width="500px">


Or:

```js
$('li:first-child').siblings('.selected');
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4661/siblings_with_argument.png" width="500px">


#### `next()`

The `next()` method allows us to find the next sibling of a selection.


```js
$('li:first-child').next()
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4662/Screen_Shot_2016-06-07_at_11.38.58_PM.png"width="500px">

Or:

```js
$('li:first-child').next('.info');
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4663/next_with_argument.png" width="500px">

#### `prev()`
This allows us to find the previous sibling of an initial selection.

```js
$('li:last-child').prev()
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4664/Screen_Shot_2016-06-07_at_11.40.55_PM.png" width="500px">

Or:

```js
$('li:last-child').prev('.info');
```
<img src="http://circuits-assets.generalassemb.ly/prod/asset/4665/prev_with_argument.png" width="500px">

#### `closest`

Now let's look at the `closest()` method.

This will find the nearest ancestor (not just parent) that matches the selector.

Unlike the previous methods we've covered for traversing the DOM, the CSS-style argument here is **required**.

```js
$('li').closest('.main')
```

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4666/closest.png" width="500px">

#### `find()`

Finally, let's walk through the `find()` method, which can be used to find descendents of a selection.

This will find all elements within the current selection that match the selector.

As with the `closest()` method, the CSS-style argument here is **required**.


```js
$('.main').find('li')
```

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4667/find.png" width="500px">

#### jQuery Documentation

These are just some of the most common methods for traversing the DOM; there are many more.

Examine jQuery's [documentation](http://api.jquery.com/category/traversing/) for a full look at the different methods available for traversing the DOM, as well as more examples of how to use each method.

<a name="independent-practice"></a>
## Independent Practice - To-Do List (55 mins)

For the remainder of the class, we'll work on creating a To-Do List application.

You can find the starter code for this exercise [here](starter_code/todo_lab).

This lab will give you practice with many of the concepts that we've learned so far in this course: DOM traversal, event delegation, and the `this` keyword.


> Instructor note: Pace this lab. Give students a time limit for each step, then review the solution for that step before moving to the next step.

#### Step 1 - Pseudocode (10 mins)

> Instructor note: Demo the functionality of the To-Do List for students. Pseudocode for the assignment can be found in the solution code at the bottom of the main.js file.

Work in groups of three or four. Spend 10 minutes writing out pseudocode for the To-Do List app.

#### Step 2 - Adding Tasks to Our List (10 mins)

For the first portion of this exercise, we'll work on adding tasks to our To-Do List.

Here's what the HTML for our task form and the unordered task list looks like:

```js
<form id="taskForm">
	<input type="text" id="newItemDescription" placeholder="What do you need to do?">
	<button type="submit" id="addTask" class="btn">Add Task</button>
</form>
<ul id="taskList">

</ul>
```

- When the `#taskForm` is submitted:
	- Select the `input` field into which the user has typed their To-Do List info. Get the value of that input field. (Hint: You can use the `.val()` method to get the value.)
	- Create a list item for the new task that includes the value the user typed in. Here's what that new list item should look like:

		```html
		<li>
			<input type="checkbox">
			<span class="item">{Item Text}</span>
			<a href="#" class="edit">Edit</a>
			<a href="#" class="remove">Remove</a>
		</li>
		```
	- Append the list item to our ordered To-Do List.


#### Step 3 - Marking Tasks as Complete (5 mins)

- When a checkbox gets toggled (hint: the `change` event):
	- Find the parent of the checkbox that was toggled.
	- Toggle the `.completed` class on the parent. Refer to the CSS file to see what styles will be added with the completed class.

> Hint: Since the list items don't exist when the page first loads, you'll need to use event delegation here.
> Hint #2: Use the `this` keyword and DOM traversal to find the parent of the checkbox that was just toggled.

#### Step 4 - Removing a Task (10 mins)

- When the user clicks on the "remove" anchor inside of a task list item, remove that task.

> Hint: Since the list items don't exist when the page first loads, you'll need to use event delegation here.

#### Step 5 - Editing a Task (10 mins)

- When the user clicks on the "edit" anchor, a form should display in place of the task the user clicked on.

Here's what the form should look like:

```html
<form class="editor">
	<input type="text" value="{itemText}">
	<button type="submit" class="btn">Save</button>
</form>
```

> Hint: Since the list items don't exist when the page first loads, you'll need to use event delegation here.


#### Step 6 - Saving Edits (10 mins)

- When the user clicks on the "save" button while in edit mode, the edit form should be replaced by a list item that contains any edits they entered into the edit form's input field.

Here's what that updated list item should look like:

```html
<input type="checkbox">
<span class="item">{textTheUserEdited}</span>
<a href="#" class="edit">Edit</a>
<a href="#" class="remove">Remove</a>
```
> Hint: Since the list items don't exist when the page first loads, you'll need to use event delegation here.

#### Bonus - Counting Tasks

- Create a function `updateCount`.
- When this function runs, count the number of items in our task list that do not have the class `completed`.
- Display this count in `.count`.
- Call this function from the various events where the count should be updated (when a task is added, removed, etc.).


#### Bonus - Deleting All Tasks

When the user clicks the `#deleteTasks` button, the task list should empty.

#### Bonus - Clearing Completed Tasks

When the user clicks the `#clearCompleted` button, any tasks that have been completed (i.e., that have the class `.completed`) should be removed from the list.


***

<a name="conclusion"></a>
## Conclusion (10 mins)
- Review solution from To-Do lab.

***


### ADDITIONAL RESOURCES
- Cheat Sheets
	- [jQuery Cheat Sheet](../01_intro_to_jquery/assets/jquery_cheat_sheet.pdf)
	- [jQuery Cheat Sheet #2](https://github.com/ATL-WDI-Curriculum/js-jquery/blob/master/jquery-cheat-sheet.md)
- Exercises
	- [Code School - Intro to jQuery](http://try.jquery.com/)
	- [TutsPlus - 30 Days to Learn jQuery](https://code.tutsplus.com/courses/30-days-to-learn-jquery)
- Videos
	- [JS Circuits - This](https://generalassembly.wistia.com/medias/y7on13jsnq)
- Readings
	- [jQuery Documentation](https://api.jquery.com/)
	- [Alternative jQuery Documentation](http://www.jqapi.com/)
	- [Events and Event Delegation](http://jqfundamentals.com/chapter/events)
