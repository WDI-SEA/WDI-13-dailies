#Pixart

Use the starter code and commit each step of the exercise.

###Step 1

* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
* Use jQuery to select the element and add an event listener.

> **HINT:** You will notice that the page refreshes whenever you click the button. You need to prevent this from happening by using a method you have not used before. Google "JavaScript event prevent default." You can also reference [this portion](https://github.com/ga-wdi-lessons/js-events-callbacks#event-defaults-405---410-5-minutes) of the Events & Callbacks lesson plan.

###Step 2

* Create 20 divs of the "square" class and append them to the body.
  * **Hint**: Use `.append()`.

###Step 3

* Add functionality so that when I click on each "square," it changes the color of that individual square to "green."
  * **Hint**: Either add the event listener while creating the squares, or listen for events on the `body` element.

###Step 4

* Modify your code so that when I click on each "square," it always changes to the color I set using my input, as opposed to "green."

###Step 5

* Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
* Modify your code so that you are creating 8000 divs instead of 20.
* Change the event that changes your box colors from 'click' to 'mouseover.'
* Paint a picture!

## Bonus

* Add a color swatch. You should have three boxes with the most recent three colors used. When you click on each of those boxes, it should set the current brush color back to that color.
