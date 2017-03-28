# The Final Countdown!

How close to 0 can you get?

Your goal is to make the page you see at http://ga-wdi-exercises.github.io/final-countdown/. You should only need to write code in the `main.js` file, and shouldn't need to touch the HTML/CSS files.

## Things to note:

The counter starts at 1234.

When clicked, it begins counting down.

When clicked while counting, it stops.

When clicked while stopped, it resets to 1234 and starts counting down again.

When it reaches 0, it takes on a class called "fail," which makes the text turn red.

It cannot go below 0.

## Pseudocoding

If you're not sure how to start, try making your script achieve the following goals, one at a time:

1. Print the current value of the counter to the console.
- After you load the page, print "A second passed!" to the console every 1 second.
- After the counter is clicked, print "I got clicked!" to the console.
- After the counter is clicked, print "A second passed!" to the console every 1 second.
- After the counter is clicked, print the value of the counter to the console every 1 second.
- After the counter is clicked, decrease the original value of the counter by 1 and print the new value to the console every 1 second.
- After the counter is clicked, decrease the original value of the counter by 1 and replace the counter's text with the new value every 1 second.
- After the counter is clicked, decrease the original value of the counter by 1 and replace the counter's text with the new value every 1 second. When you click on the counter, stop the timer.
- After the counter is clicked, decrease the original value of the counter by 1 and replace the counter's text with the new value every 1 second. When you click on the counter, stop the timer. When you click on the counter again, continue the timer.
- After the counter is clicked, decrease the original value of the counter by 1 and replace the counter's text with the new value every 1 second. When you click on the counter, stop the timer. When you click on the counter again, continue the timer. If the counter reaches 0, the counter's text should turn red.
- After the counter is clicked, decrease the original value of the counter by 1 and replace the counter's text with the new value every 1 second. When you click on the counter, stop the timer. When you click on the counter again, continue the timer. If the counter reaches 0, the counter's text should turn red and the timer should stop.
- After the counter is clicked, decrease the original value of the counter by 1 and replace the counter's text with the new value every 1 second. When you click on the counter, stop the timer. If the counter reaches 0, the counter's text should turn red and the timer should stop. When you click on the timer once it is stopped, its value should go back to the original value and the timer should start again.
