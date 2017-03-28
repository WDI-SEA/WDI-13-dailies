We have to think about what the view should do in terms of functionality, and then think about what the JS should do to achieve that.

http://colintherobot.github.io/trivia

## Step 1 — How to Start (25min)

When the DOM loads, the very first thing we need to build is the ability to start the game. We can see that there are two buttons already provided: `start` and `reset`.

> Exercise (5 minutes): Look at our finished trivia game; write a paragraph about what the start button, and only the start button, should do in the context of this game.

1. Add an event listener to the start button on the screen.
2. The event listener should listen for a click event.
3. The click should invoke the start function.


>Exercise (5 minutes): Think about what the start function itself should do. Think about what the start of a game should look like!

We don't know what the load question function is going to do yet, but we can do the first part.

>Exercise (5 minutes): Use Vanilla JS to select the node with a class of `.score` and set its inner text to the `this.score`.

## Step 2 — loadQuestion Function (40min)

Now when we click the start button, it displays the score as its functionality. We also need to give the user their first question and possible answers.

>Exercise (5 minutes): Think about what the loadQuestion function needs to do in order to display the question and possible answers.

The function needs to use the questions object to display the right question.

Then the function needs to loop over that data structure to access the answers for that question. In the process of looping, it should build divs for each answer.

Those answers need something else. How are our users going to interact with those answers?

They're going to click them! So each answer is going to need a click event.

I'll build this function out for you, since there are some new methods and concepts in here.

- html `data-` attribute (5 min)
- storing data in the DOM (5 min)
- complex looping through a data structure (5 min)


## Step 3 - Check for an Answer (30min)

> Exercise (5 minutes): When I click an answer, what do I want to happen as a user? What does the program need to do to make that happen? Write a paragraph.

Our click event in our loop should probably call `triviaGame.checkAnswer()`. If we look at our game template, we can see that checkAnswer takes the answerNode as an argument.

What do you think that means?

- `this` vs. `event` inside of an eventListener (10 minutes)

>Exercise (10 minutes): Remember that we're now storing data in the DOM. In the `triviaGame.checkAnswer()` function, write the JavaScript necessary to check if the answerNode passed to the function contains the correct answer.

1. If it does, then add 1 to `this.score` and change the correct answer's background color to `green`.
2. If not, then change the wrong answer's background color to `red`.
3. Finally, add 1 to `this.progress`.

## Step 4 - Next Question (30 min)

>Exercise (5 minutes): We've verified that the user either clicked on the right answer or not, and we've incremented the score to reflect that. So what's the next feature the user should experience? Can you guess what function needs to be called to initiate that?

I'll build this nextQuestion feature for you because it has some tricky bits and uses a new function.

- setTimeout (5m)
- self vs this (5m)

Now we experience some weird behavior with our scores. They don't seem to be incrementing. Does anyone know why?

- Remember DRY? (5m)

## Step 5 — Last Two Pieces!

>Exercise (5 minutes): We only have two pieces of functionality remaining. Use the working example and your own example to determine our missing pieces.

We need two functions for the win state; we need to check if the game has ended. We have two data points we can compare to see whether or not the game has ended. Take a couple of minutes and see if you can't suss out what those two data points are.

We'll go ahead and add this function.

Our triggerWinState function is just going to alert the user to their score, and how well they did, and then reset the game.

>Exercise: Build the final `triggerWinState` method and the `reset` method.
