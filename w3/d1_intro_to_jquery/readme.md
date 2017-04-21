# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to jQuery (90 mins)


| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | jQuery Intro |
| 10 min | [Guided Practice](#setting-up-jquery) | Setting Up jQuery |
| 5 min | [Intro to New Material](#jquery-selectors) | jQuery Selectors |
| 10 min | [Intro to New Material](#objects-vs-dom) | jQuery Elements vs. DOM Elements |
| 10 min | [Intro to New Material](#updating-changing-content) | Updating and Changing Content |
| 10 min | [Intro to New Material](#adding-new-content) | Adding New Content |
| 5 min | [Intro to New Material](#removing-content) | Removing Content |
| 10 min | [Intro to New Material](#attributes) | Getting and Setting Attributes |
| 10 min | [Intro to New Material](#animation-and-effects) | Animation and Effects |
| 10 min | [Intro to New Material](#handling-eventss) | Handling Events |
| 5 min | [Conclusion](#conclusion) |Q&A |

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Add jQuery to a project.
- Recognize jQuery syntax.
- Use CSS selectors with the jQuery or `$` method to select elements in the DOM.
- Use selectors and jQuery methods to:
	- Add and remove classes on DOM elements.
	- Get and set information inside DOM elements.
	- Change the value of attributes on DOM elements.
- Write jQuery code to detect and react to the click event in the DOM.


### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*

- Use Vanilla JavaScript to manipulate the DOM.
- Explain CSS selectors.
- Differentiate between the jQuery library and the JavaScript language, and be able to list the benefits of using jQuery vs. Vanilla JavaScript.

### INSTRUCTOR PREP
*Before this lesson, instructors will need to:*

- Have students open entire starter\_code folder in Sublime/Atom.
- Print out this [jQuery Cheat Sheet](assets/jquery_cheat_sheet.pdf) and provide a copy for each student.

---
<a name="opening"></a>
## Opening (< 5 mins)
- Review current lesson objectives.

In the last lesson, we took a look at the difference between using the jQuery library and Vanilla JavaScript.

In this lesson, we'll learn how to use jQuery to "manipulate the DOM" &mdash; or _update_ elements on the page.

We'll also take a look at how we can add event handlers using jQuery.

***

<a name="setting-up-jquery"></a>
## Guided Practice: Setting up jQuery (10 mins)

There are two ways to go about including jQuery on a website.

- In both cases, we include the jQuery script file (`jquery-2.1.4.js`) as we would our usual `main.js` file using a `<script>` element.


#### Download

1. Visit [https://jquery.com/download/](https://jquery.com/download/).
2. Download the uncompressed, development jQuery (version 3.X).
	- Minified vs. Uncompressed:
  		- Minified:
    		- Minification is the process of making a JavaScript file smaller by, among other things, removing all line breaks and whitespace, reducing the length of variable and function names, and stripping out all comments.
    		- Check: Why would we want something minified?
      		- Including the minified version will improve site load time.
      		- The drawback is if something goes wrong with your jQuery code, it's hard to debug since it's all on one line.
      		- Used when a website is ready for production.
  		- Uncompressed:
    		- Unmodified jQuery - can see it all!
    		- Will use this in case we need to debug and take a look at what's going on under the hood.
    		- Used when a website is in development.
3. Move the jQuery library to the folder in your project where your JavaScript files are stored.
	- It's considered best practice to store all files of a certain type (CSS, JS, images, etc.) in a folder within your project to keep things organized.
4. Add a script tag in your HTML file.
	- You'll want to include the `<script>` tag in the `<head>` of your html file, and _before_ `<script>` tags including your `main.js` file.
		- Question: Why would this order be important?
  		- How/when is JavaScript processed by the browser?

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Site</title>
  <script src="js/jquery-3.1.1.js"></script>
  <script src="js/main.js"></script>
</head>
<body>

	<!--HTML Content here-->

</body>
</html>


```

#### Ensuring That the DOM is Ready

Since our script is in the `<head>`, it will be parsed before the DOM. 

If our code references any DOM elements (and since this is a jQuery lesson, it most certainly will), we need to delay our code's execution until the DOM is built by the browser:

```js
$(document).ready(function() {
    alert("Everything is ready, let's do this");
});
```

Here's the shortcut version:

```js
$(function(){
    alert("Everything is ready, let's do this");
});
```

When the content has finished loading, the alert will appear.

Another common approach is to put any `<script>` tags right before the closing body tag. Take a look at this [Stack Overflow thread](http://stackoverflow.com/questions/436411/where-is-the-best-place-to-put-script-tags-in-html-markup) that compares the two approaches.

> Note: The `async` and `defer` attributes are now widely supported by browsers. These attributes tell the browser it's safe to continue parsing while the scripts are being downloaded, which will make our page load more quickly. For more information, see this article [here](https://developers.google.com/speed/docs/insights/BlockingJS) and this thread [here](http://stackoverflow.com/questions/436411/where-is-the-best-place-to-put-script-tags-in-html-markup).

> Note: If you are including your JavaScript file right before your closing `</body>` tag, the document will have already loaded, so this step should not be necessary.


#### Exercise:

Open the index.html file in [starter\_code/my\_blawg](starter_code/my_blawg).

Use a `<script>` tag in `index.html` to include the minified jQuery file in the `js` folder.

Add a `<script>` tag to include the `main.js` file in the `js` folder.

Add the following code to your `main.js` file and open the `index.html` file in your browser to make sure everything is up and running. If things are hooked up correctly, an alert should pop up.

```js
$(document).ready(function() {
    alert("Everything is ready, let's do this");
});
```

#### CDN Hosted Version
You don't have to host jQuery yourself. You can pull it from the web via a Content Delivery Network (CDN).

##### What is a CDN?

- "Serve content to end-users with high availability and high performance."
- Broad term for a distributed system of servers &mdash; sometimes spread across the world &mdash; that serves content to users, whether videos, software, or, in this case, a JavaScript library.


There's a good chance the user already has the jQuery file hosted on the remote server cached, or saved, on his or her computer from visiting other sites.

This means our page will load faster, as the browser won't have to make an additional request for that file.


##### Setup

1. Find the version of jQuery you'd like to include [here](https://code.jquery.com/) and copy the `<script>` tag that's provided when you click on the version.
2. Add the `<script>` tag to your HTML file, as you did with the version of jQuery you downloaded.


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Site</title>
  <script
  src="https://code.jquery.com/jquery-3.1.1.js" integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA=" crossorigin="anonymous"></script>  
  <script src="js/main.js"></script>
</head>
<body>



</body>
</html>


```



<a name="jquery-selectors"></a>
## jQuery Selectors (5 mins)

The most basic concept of jQuery is to "select some elements and do something with them."

#### Syntax

You can use any of the CSS selectors you're familiar with to select an element:

![](http://circuits-assets.generalassemb.ly/prod/asset/4747/Slide-16-Chart.svg)

#### Independent Practice - Turn and Talk

Take a look at the following selectors. What are we selecting for each?

```javascript
$( ".alert" )

$( "#signup-form" )

$( "#blog div" )

$( ".post h2" )

// Yes, you can use CSS pseudo-selectors to select DOM elements!
$( "div:nth-child(2)" )

// You can also select by HTML attribute.
// Format: tag + [ attributeName='attributeValue' ]
// Take note of single quotation marks.
$( "img[ src='img/5.jpeg' ]" )

```

#### How does jQuery do it?

- jQuery runs the equivalent `document.querySelectorAll()` on the DOM element you are selecting.
    - Check: What does `querySelectorAll()` do in Vanilla JS?
    - If you select an element and there's more than one, jQuery will return _all of them_.
    - Returns a jQuery object, which functions _like_ an array &mdash; has zero-index, length &mdash; but it's not one!
    - If a jQuery selector returns multiple elements, you can pull out an individual element using the `.eq()` method.

```javascript
// Returns all h2 elements on a page.
$( "h2" )

// Returns the second h2 element on a page (indices start at 0).
$( "h2" ).eq(1)
```
<a name="objects-vs-dom"></a>
## jQuery Objects vs. DOM Elements (10 mins)

jQuery objects are not the same thing as DOM elements.

- DOM elements are returned when using Vanilla JS selectors.
  - You can only use JavaScript methods on DOM elements.
- A jQuery object is a jQuery-specific collection of DOM elements.

Because of this difference, You can't chain jQuery and Vanilla JS selectors/methods.  

```javascript
// Chaining Vanilla JS is OK.
document.getElementById( "click-me" ).innerHTML;

// Same with jQuery.
$( "#click-me" ).html();

// You cannot, however, mix the two. This will not work...
document.getElementById( "click-me" ).html();

// Neither will this...
$( "#click-me" ).innerHTML;
```

There are some "exceptions" to this no-mixing rule...

You CAN run Vanilla JS inside jQuery, and vice-versa. Let me show you what I mean with another example...

```javascript
// Select a DOM element with an id of click-me
var clickMe = document.getElementById( "click-me" );

// We set up an event listener for clickMe using Vanilla JS
// But then we execute jQuery code inside that event listener!
clickMe.addEventListener( "click", function(){
	$( "body" ).css( "background-color", "lemonchiffon" );
})

// We can flip that around.
// You'll learn jQuery event listeners later...
$( "#click-me" ).on( "click", function(){
	document.body.style.backgroundColor = "lemonchiffon";
})
```

#### Exercise:

Open the Blawg `index.html` file in Chrome and try the following snippets in your console. What's the difference between `[]` and `.eq()`?

```js
console.dir($("h2")[1]);

console.dir($("h2").eq(1));

console.log($("h2")[1].html());

console.log($("h2").eq(1).html());

```

## Exercise - Whiteboarding

Take a look at the `index.html` file for the "My Blawg" project.

Write down how you would select the following DOM objects on "My Blawg." Use only the following methods or attributes:

- `$`
- `eq`
- `html()`

---

1. All `<a>` elements on the page.
- The first `<a>` element on the page.
- Using an `id`, the `<h1>` at the top of the page.
- All elements with class `post`.
- The first element with class `post`.
- The second element with class `post`.
- The HTML content of the first `<a>` element on the page.

Bonus:

- Using a CSS pseudo-selector, the third element with class `post`.
- Using one of its HTML attributes, the fourth `<img>` on the page.



<a name="updating-changing-content"></a>
## Intro to New Material: Updating/Changing Content (10 mins)

Now that we've learned how to select elements, we can start working with them (also known as _manipulating_ elements).

First, let's take a look at the ways we can update and change content.

#### `html()`

![](http://circuits-assets.generalassemb.ly/prod/asset/5103/Screen_Shot_2016-06-15_at_11.08.31_AM.png)


The `html()` method can be used to get or set the HTML content.

- Get content: If we do not provide an argument, the `html()` method will return the innerHTML of the first jQuery object.

```javascript
  $(".awesome").html()
  // returns the innerHTML of the first element in the jQuery object
```

- Set content: When setting content, the method will give every element in the matched set the same new content. This content may also include HTML.

```javascript
  $(".awesome").html("This is <strong>awesome</strong>!")
  // sets the innerHTML of the of all elements in the jQuery object to be "this is awesome!"
```

#### `text()`

![](http://circuits-assets.generalassemb.ly/prod/asset/4758/Slide-10-Text.svg)

- Get content: We can use the `text()` method to retrieve text from a jQuery selection.
	- It will return the text content of every element that matches the selection, along with the text of any descendants.
	- Note that any HTML tags will be stripped out in the content that is returned, in contrast to the `html()` method, which returns all HTML content, not just text.
- Set content: When setting content, the `text()` method will give every element in the matched set the same new text content.



#### `text()` vs. `html()`

How are the `text()` and `html()` methods different?

Using the `text()` method, any HTML content will simply be shown as text, whereas when we use the `html()` method, the HTML content is set for any matched elements.

> Instructor note: Demo the difference between `html()` and `text()` for students using the example site in the [examples/jquery\_examples](examples/jquery_examples). Example code has been provided in the `main.js` file.



#### Exercise - My Blawg

Things to consider:

- What's the difference between `$("body").html()` and `$("body").html("hello")`?
- `$("p")` selects all `<p>` elements on the page.
  - If you run `$("p").html()` in the console, how many elements' HTML does it return?
  - If you run `$("p").html('hello')` in the console, how many elements does it affect?


---

Perform the following steps in your console:

1. Get the HTML content of the second `<p>` element on the page.
2. Get the text content of the second `<p>` element on the page.
3. Set the HTML content of the second `<p>` to `<strong>Hello<strong> from jQuery`.
4. Set the **text** content of the first `<p>` to `<strong>Hello<strong> from jQuery`.
5. Compare the results from steps 3 and 4 in your browser.


<a name="adding-new-content"></a>
## Intro to New Material: Adding New Content (10 mins)


> Instructor note: Demo these methods for students using example site in the [examples/jquery\_examples](examples/jquery_examples). Example code has been provided in the `main.js` file under _Part 2_. Open the _elements_ panel in Chrome to show students where elements got inserted.

Okay, let's look at some of the methods that let us add new elements to a webpage.

We'll cover the following four methods for adding elements:

*   `before()`
*   `after()`
*   `prepend()`
*   `append()`


#### `before()`
First, the `before()` method.

![](http://circuits-assets.generalassemb.ly/prod/asset/4760/Slide-17-Before.svg)

The `before()` method can be used to insert HTML content _before_ the selected element or elements. For example, the following JavaScript code:

```js
$('ul').before('<h1>Denim Fever</h1>');
```

Will result in this:

````html
<!-- The element we inserted -->
<h1>Denim Fever</h1>
<ul>
  <li>Blue Jeans</li>
  <li>Denim</li>
  <li>Chambray</li>
  <li>Dark Wash</li>
  <li>Light Wash</li>
</ul>
````

#### `after()`
Next, the `after()` method.

![](http://circuits-assets.generalassemb.ly/prod/asset/4761/Slide-19-After.svg)

The `after()` method can be used to insert HTML content _after_ the selected element or elements. For example, the following JS code:

```js
$('ul').after('<p>These are a few of my favorite things!</p>');
```

Will have the following results:

```html
<ul>
  <li>Blue Jeans</li>
  <li>Denim</li>
  <li>Chambray</li>
  <li>Dark Wash</li>
  <li>Light Wash</li>
</ul>
<!-- The element we inserted -->
<p>These are a few of my favorite things!</p>  
```


#### `append()`

Now, let's look at the `append()` method.

![](http://circuits-assets.generalassemb.ly/prod/asset/4762/Slide-21-Append.svg)

This method inserts HTML content _inside_ the selected element or elements, right _before_ the closing tag. So the following code:

```js
$('ul').append('Denim jumpsuit');
```

Would have the following effects:

```html
<ul>
  <li>Blue Jeans</li>
  <li>Denim</li>
  <li>Chambray</li>
  <li>Dark Wash</li>
  <li>Light Wash</li>
  <!-- The element we inserted -->
  <li>Denim jumpsuit</li>
</ul>
```

#### `prepend()`
And finally, the `prepend()` method.

![](http://circuits-assets.generalassemb.ly/prod/asset/4763/Slide-23-Prepend.svg)


This method inserts HTML content _inside_ the selected element or elements, right _after_ the opening tag. So this code:

```js
$('ul').prepend('Denim Overalls');
```

Would do the following:

```html
<ul>
  <!-- The element we inserted -->
  <li>Denim Overalls</li>  
  <li>Blue Jeans</li>
  <li>Denim</li>
  <li>Chambray</li>
  <li>Dark Wash</li>
  <li>Light Wash</li>
</ul>
```

As you can see, when using these four methods, the question of _what_ gets inserted _where_ can get a little technical.

Take a look at this diagram, which shows where the methods insert our example's new content:


![](http://circuits-assets.generalassemb.ly/prod/asset/4717/before_after_append_prepend.png)

> Check: Think about how facebook statuses work. When we add a new status, does it go to the bottom of the list? Or is it right at the top? Which of these methods to insert new content do you think they are using here?


#### Exercise:

Spend a few minutes looking up the following jQuery methods in the [jQuery Documentation](http://api.jquery.com/):

*   `prependTo()`
*   `appendTo()`

How do these methods differ from the `append()` and `prepend()` methods?

## Independent Practice - My Blawg (10 minutes)

Perform the following steps in the `main.js` file in the [My Blawg](starter_code/my_blawg) project.

1. Append the following anchor to the element with the ID `nav`:
	`<a href="#" class="nav-link">About</a>`
1. Prepend the following anchor to the element with the ID `nav`:
	`<a href="#" class="nav-link">First Link</a>`

<a name="removing-content"></a>
## Removing Content (5 mins)

#### `remove()`
The `remove()` method removes the jQuery object it is called on, as well as bound events and everything inside it.

So the `remove()` method used below:

```js
$('li:first-child').remove();
```

Would do the following:

```html
<ul>
  <!-- First list item was removed -->
  <li>Denim</li>
  <li>Chambray</li>
  <li>Dark Wash</li>
  <li>Light Wash</li>
</ul>
```

#### `empty()`

The `empty()` method removes all the child elements of the jQuery object it is called on.

```js
$('ul').empty();
```

This would have the following effects:

```html
<ul>
  <!-- All list items have been removed -->
</ul>
```


<a name="attributes"></a>
## Intro to New Material: Getting and Setting Attributes (10 mins)

Now let's take a look at some different methods that will allow us to get and set attribute values.

To quickly review: When we say "attribute," we are referring to the name/value pairs that provide additional information about an element.

We can add new attributes to elements, or access and modify the contents of existing attributes, such as the following:

```js
<img src="images/cat.jpg" alt="Cat photo">
```

> Refresher: Here the **src** attribute tells our browser where to find the image, and the **alt** attribute provides some backup text in case the image doesn't load.


Let's take a look at some of the methods we can use to get and set attribute values for this site. These methods will allow us to update the styles and content dynamically.

![](http://circuits-assets.generalassemb.ly/prod/asset/4765/Slide-7-attr.svg)

#### `attr()`

We can use the `attr()` method to get or set the value of a specific attribute.

Take a look at the following HTML snippet:

```html
<ul id="pizza-list">
  <li>Pepperoni</li>
  <li>Hawaiian</li>
  <li>Meat Lover</li>
  <li class="vegetarian">Mushroom</li>
  <li class="vegetarian">Vegetarian</li>
</ul>
<img alt="Pizza photo">
```

If we want to simply **get**, or find out, the value of an attribute, we can specify the name of the attribute we want to get in the parentheses.

```js
$('#pizza-list').attr('id');
```

Or we can **update** the value of an attribute by specifying both the attribute name and value within parentheses:

```js
$('ul').attr('id', 'pizza-pizza');
```

We've now updated the value for the id attribute from `pizza-list` to `pizza-pizza`.


We can use this method to add or update the value of any attribute.

> Instructor note: Demo for students. 
> 
> Example code has been provided in the `main.js` file [here](examples/jquery_examples) under _Part 3_ (needs to be uncommented). 
> 
> Open the _elements_ panel in Chrome to show students where the `src` attribute was updated.


#### `removeAttr()`
Now that we're familiar with how we can add attributes, let's take a look at removing attributes using the `removeAttr()` method.

![](http://circuits-assets.generalassemb.ly/prod/asset/4766/Slide-11-removeAttr.svg)

We can use the `removeAttr()` method to remove an attribute and its value. We just specify the name of the attribute that we want to remove in parentheses:

```js
$('ul').removeAttr('id');
```

```html
<ul>
  <li>Pepperoni</li>
  <li>Hawaiian</li>
  <li>Meat Lover</li>
  <li class="vegetarian">Mushroom</li>
  <li class="vegetarian">Vegetarian</li>
</ul>
```

And just like that, the `id` attribute on our `ul` is gone.


#### `addClass()`

jQuery has special methods for simplifying tasks that developers are required to do repeatedly.

![](http://circuits-assets.generalassemb.ly/prod/asset/4767/Slide-13-addClass.svg)


The `addClass()` method lets us add a new value to the class attribute. It does not override any other classes that might be on the same element:

```js
$('body').addClass('sunshine');
```

This will then apply any styles that we have added in our CSS stylesheet that are tied to the meat class. For example, if we added the following CSS to elements with the "meat" class:

```css
.sushine {
	background-color: yellow;
}
```


#### `removeClass()`
Now let's take a look at a related method — `removeClass()`.

![](http://circuits-assets.generalassemb.ly/prod/asset/4768/Slide-16-removeClass.svg)


We can use the `removeClass()` method to remove a value from the class attribute. It will leave any other class names intact and will only remove the value we specify.

```js
$('li').removeClass('complete');
```

> Instructor note: Demo for students. 
> 
> Example code has been provided in the `main.js` file [here](examples/jquery_examples) under _Part 4_ (needs to be uncommented). 
> 
> Open the _elements_ panel in Chrome to show students where the class was added and where the class was removed.


#### Note about `removeClass()` / `addClass()` methods:

Note that when using the `removeClass()`/`addClass()` methods, the name of the class does not include a period (`.`).

![](http://circuits-assets.generalassemb.ly/prod/asset/4769/Slide-19-No-Period.svg)



This is a common mistake that beginners make when using the `addClass()` and `removeClass()` methods.


#### `css()`

Finally, let's take a look at the `css()` method.

We can use the `css()` method to set the value for a CSS property.

![](http://circuits-assets.generalassemb.ly/prod/asset/4771/Slide-21-css.svg)

What does this look like?

To do this, we specify the property name within quotations as the first argument within the parentheses, followed by a comma, followed by the value (also within quotations) as the second argument:

```js
$('li:nth-child(n+4)').css('background-color', 'green');
```

Here we are updating the background color of the last two list items to green.


![](http://circuits-assets.generalassemb.ly/prod/asset/4722/css.png)

We can update any css properties using the `css()` method.


#### Exercise:

Let's review the different methods that can be used to update get and set attributes using jQuery:

![](http://circuits-assets.generalassemb.ly/prod/asset/4772/Slide-23-Chart.svg)

Follow the instructions under **Part 1** in [starter\_code/jquery\_practice/readme.md](starter_code/jquery_practice/readme.md).

<a name="animation-and-effects"></a>
## Animation and Effects (10 mins)
Next, let's take a look at some of jQuery's methods that will allow us to add animations and effects on our page.

#### `hide()` and `show()`
Let's start with `hide()` and `show()` methods:

![](http://circuits-assets.generalassemb.ly/prod/asset/5178/slide-2-list.svg)

As you can probably guess, we can use the `hide()` method to hide content and the `show()` method to show content.

```js
$('button').on('click', function () {
	$('.circle').hide();
});
```

![](http://circuits-assets.generalassemb.ly/prod/asset/4949/8AAAACBISPqVkAOw__.gif)

So what goes within the parentheses after the hide method?

Although we _can_ pass in an animation speed as an argument for the `show()` and `hide()` methods (as we'll see when we get to the other animation methods), they usually perform their action immediately, so these parentheses will most likely be _empty_.


#### `fadeIn()` and `fadeOut()`

Next, let's explore some of the methods we can use to fade content in and out of our page:

![](http://circuits-assets.generalassemb.ly/prod/asset/5184/slide-15-fade_.svg)


The `fadeIn()` method is used to fade in hidden elements, and the `fadeOut()` method is used to fade out elements that are currently displayed.


#### Animation Duration

Before we move onto more methods to fade content in and out, let's discuss animation duration.

As with all of jQuery's methods, there are rules about which arguments each method will accept.

For all of these animation methods, we have the option of passing in an argument for _animation duration_ or _animation speed_:

Animation duration is the length of time from when the animation starts (for example, when the circle is completely hidden) to when the animation ends (when the circle is visible).

We have a couple options when providing an animation speed:

1. We can pass in a speed in milliseconds.
	- `$('.circle').fadeOut(300);`
2. We can use one of jQuery's predefined speeds — 'slow', 'normal' or 'fast'.
	- `$('.circle').fadeOut('slow');`

Setting this animation duration is optional. If we don't pass in any speed, the default duration for our fade methods will be _400 milliseconds_.


> Instructor note: Demo for students. 
> 
> Example code has been provided in the `main.js` file [here](examples/jquery_examples) under _Part 5_ (needs to be uncommented). 
> 
> Open the _elements_ panel in Chrome so that students can see how jQuery interacts with the DOM.

#### `fadeToggle()`
Let's take a look at another method for fading content in and out: `fadeToggle()`.

> Check: Can anyone guess what `fadeToggle()` might do?

Think of toggling like a light switch. We can flip the switch up to turn the light on, or down to turn it off, but there is no in-between.

The toggle method looks at the current state of an element, determines if it is visible or hidden, and then switches it to the opposite state.

So if the element is visible, `fadeToggle()` will fade it out. If the element is hidden, `fadeToggle()` will fade it in.

```js
$('button').on('click', function () {
	$('.circle').fadeToggle(350);
});
```

In the above example, We can keep clicking on the button to continuously fade the circle in and out, over and over.

#### `slideUp()` and `slideDown()`
Now let's look at some methods we can use to slide elements up and down:

![](http://circuits-assets.generalassemb.ly/prod/asset/5191/slide-32-slide.svg)

The `slideUp()` method uses a sliding motion to hide selected elements, whereas the `slideDown()` method uses a sliding motion to reveal elements hidden on the page.


```js
$('button').on('click', function () {
	$('.circle').slideUp(350);
});
```

#### `slideToggle()`
Finally, let's explore our last sliding method, `slideToggle()`.

Similar to `fadeToggle()`, this method hides elements that are showing and shows elements that are hidden. However, this method utilizes a sliding motion.

This can be an incredibly handy tool. Think of how easy it would be to create a dropdown menu that slides up and down using this method!

<a name="handling-events"></a>
## Handling Events (10 mins)

We most likely won't want to execute all our code when the page first loads, but instead wait until the user does something.

We can use the `on()` method to handle all events in jQuery, just as we'd use any other method.

Let's take a look:

```js
$("#addHome").on("click", function(){
    console.log("Clicked!");
});
```

1. The first argument the `on()` method considers is the type of event for which we are waiting, or listening.
	- In the above example, this is a click event. We'll cover more events in the next lesson.
2. The second argument we'll provide to the `on()` method is the code we want to run when an event that matches our selector occurs on any element.
	- In our example, the function will run when a user clicks on any list item on the page.
	- Here, we are passing in an anonymous function (_callback function_) as our argument.

> Instructor note: Demo for students. 
> 
> Example code has been provided in the `main.js` file [here](examples/jquery_examples) under _Part 6_ (needs to be uncommented). 
> 
> Be sure to emphasize that nothing will happen when the page loads. Anything within the callback function will only run when the user clicks the button.


#### `on()` vs. `click()`

The `on()` method was introduced in jQuery Version 1.7. Before that, jQuery used separate methods for each type of event, such as `click()` or `focus()`:

```js
$('#addHome').click(function(){
    console.log("Clicked!");
});
```

The `on()` syntax is preferred because the syntax above actually calls `on()` internally.

#### Exercise

Follow the instructions under **Part 2** in [starter\_code/jquery\_practice/readme.md](starter_code/jquery_practice/readme.md).


***

<a name="conclusion"></a>
## Conclusion (< 5 mins)
- Review learning objectives.

In this lesson, we've covered quite a bit of content.

As you can see, we can harness jQuery's power to manipulate the elements on our page. We can listen for events, get/update the content of elements, and get/update styles and attributes.

At first, the number of jQuery methods can be overwhelming, and getting the hang of writing things out without syntax errors can be tricky.

Little things such as a missing closing `}` or maybe a missing `.` before a method will likely throw you off. Having an eye for detail will come naturally with practice.

Don't feel like you have to sit down and memorize all of these methods! Memorization will come with practice.

***

### ADDITIONAL RESOURCES
- Cheat Sheets
	- [jQuery Cheat Sheet](assets/jquery_cheat_sheet.pdf)
	- [jQuery Cheat Sheet #2](https://github.com/ATL-WDI-Curriculum/js-jquery/blob/master/jquery-cheat-sheet.md)
- Exercises
	- [Reddit Lab](exercises/reddit.md) (Beginner - 20 mins)
	- [Pixart](exercises/pixart) (Intermediate - 20 mins)
	- [ATM](exercises/atm) (Advanced - 90 mins)
	- [Final Countdown](exercises/final_countdown) (Advanced - 60 mins)
- Exercises
	- [Code School - Intro to jQuery](http://try.jquery.com/)
	- [TutsPlus - 30 Days to Learn jQuery](https://code.tutsplus.com/courses/30-days-to-learn-jquery)
- Videos
	- [Screencast #1](https://www.youtube.com/watch?v=zGOanC3Tecw)
	- [Screencast #2](https://www.youtube.com/watch?v=DsooqVO6PMQ)
	- [Screencast #3](https://www.youtube.com/watch?v=6889LvuSUpc)
	- [Circuits - Intro to jQuery](https://generalassembly.wistia.com/medias/qb34u4qxc1)
	- [Circuits - Pros of jQuery](https://generalassembly.wistia.com/medias/rlslgthvo3)
	- [Circuits - jQuery and CSS-style Selectors](https://generalassembly.wistia.com/medias/tuu582bezt)
	- [Circuits - jQuery Methods](https://generalassembly.wistia.com/medias/3p5rlqjuqy)
	- [Circuits - jQuery Selecting Methods](https://generalassembly.wistia.com/medias/uxzrf6sp01)
	- [Circuits - Intro to jQuery Selectors and Functions](https://generalassembly.wistia.com/medias/339phcxodh)
	- [Circuits - How does jQuery Interact with the DOM?](https://generalassembly.wistia.com/medias/izhpsvwea1)

- Readings
	- [jQuery Documentation](https://api.jquery.com/)
	- [Alternative jQuery Documentation](http://www.jqapi.com/)
	
- Learn jQuery
	- https://learn.jquery.com/about-jquery/
	- http://try.jquery.com/levels/1/challenges/1


> Instructor Note: When possible, provide a brief description of Additional Resources, classifying whether they are for advanced or beginner students.  
