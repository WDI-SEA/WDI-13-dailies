# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Intro to Pseudocode (60 mins)

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening) | What is Pseudocode? |
| 15 min | [Guided Practice](#guided-practice) | Reading Pseudocode |
| 10 min | [Independent Practice](#ind-practice) | Solve the Waiter Problem |
| 10 min | [Intro to New Material](#approaching-problem) | Approaching a Problem |
| 15 min | [Independent Practice](#real-world-practice) | Pseudocode |
| 5 min | [Conclusion](#conclusion) |Recap/ Q&A |

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*
- Describe the purpose of whiteboarding and pseudocode.
- List steps for problem solving.
- Create pseudocode to describe a basic problem.
- Implement whiteboarding and pseudocode techniques. 


---
<a name="opening"></a>
## Opening (5 mins)

According to [Wikipedia](https://en.wikipedia.org/wiki/Pseudocode):
> Pseudocode is an informal high-level description of the operating principle of a computer program or other algorithm.

> It uses the structural conventions of a programming language, but is intended for human reading rather than machine reading.

This is a great opportunity to turn tech speak into, well, human speak.

Let's break that down and translate it.

#### What does that mean?

> A. Pseudocode attempts to describe the solution to a problem in a way that is easier and more concise than code. It is a stepping-stone toward writing the code. It forces you to think critically about the problem, and allows you to attempt multiple solutions.

JFK described Washington D.C. as "a city of Southern efficiency and Northern charm."

Pseudocode lives in that "in between" place, too. It has more logic than English, without all the structure of code.

#### What Role Does it Play in Development?

Is writing out pseudocode a step that real-world developers take? Watch this video to hear developers talk about the importance of pseudocode to their workflow:

-  [Pseudocode - Interviews with Developers](https://generalassembly.wistia.com/medias/8axbgun2i4)


***
<a name="guided-practice"></a>
## Guided Practice: What does that look like? (15 min)

Pseudocode should describe the entire logic of the algorithm so that programming becomes a task of translating lines of pseudocode into real code.

Let's discuss why each of the following could be considered "good" or "poor" examples of pseudocode:

#### Problem 1 - Determining If a Number is Even or Odd

***Example 1.1:***
```
PROGRAM IsEvenOrOdd:
  var num = number;
  IF (num % 2 === 0)
    THEN Print "even";
    ELSE Print "odd";
  ENDIF;
END.
```

***Q. What do we think?***

> A. This is not a great example. Here we are using "var" in our pseudocode when it should be in plain English! Also, we should not be using the JavaScript syntax "===" in our conditional. Would a non-programmer know that `num % 2 === 0` indicates an even number?

***Example 1.2:***
```
PROGRAM IsEvenOrOdd:
  Read number;
  IF (number divided by two has no remainder)
      THEN Print the number is even;
      ELSE Print the number is odd;
  ENDIF;
END.
```

***Q. What do we think?***

> A. This is better. It's closer to English. It clearly states what we are trying to achieve and how, without getting bogged down in the minutia of code. Even someone who doesn't code can help us check our logic. Is any number cleanly divided by two (without leaving a remainder) even? Is anything else odd?

#### Problem 2 - How to Make a PB&J Sandwich

*From [Get Creative Today](http://getcreativetoday.com/lessons/pseudo-code-flowcharts/)*

> Instructor note: Optional - Make this activity interactive by bringing in bread, peanut butter, and jelly. Have one volunteer sit in front of the class, and tell them that they are to take instructions from the class literally. Then go around the room and have each student provide one line of instruction for the volunteer until the sandwich is complete. Write down each line of instruction the students provide; this is the pseudocode.

***Example 2.1:***
```
Make PB&J Sandwich:
  Gather bread, peanut butter and jelly.
  Apply peanut butter to slice of bread.
  Apply jelly to another slice of bread.
  Bring the two slices of bread together.
  Eat and enjoy.

```

***Q. What do we think?***

> A. This is a good place to start. It is a good set of instructions and intuitive for us to follow. However, we still don't know what physical steps are required.

Take a second to imagine if you had never made a sandwich before. Think about the instructions you would need for that first sandwich. A computer has no real memory; every time it starts a task, it has no recollection of performing it before. We must tell it every single step, every single time. We need to break these steps down into smaller steps that the computer can understand.

***Example 2.2:***
```
PROGRAM MakePB&JSandwich:
  Grab a paper plate;
  Open bread container;
  Grab bread package;
  Untwist bread package;
  Open bread bag and remove two slices;
  Place slices on paper plate;
  Grab a plastic knife;
  Open peanut butter jar;
  Use knife to scoop out peanut butter;
  Apply peanut butter to one slice of bread;
  Spread peanut butter on slice;
  Place knife on plate;
  Close peanut butter jar;
  Open jelly bottle;
  Squeeze jelly onto second bread slice;
  Close jelly bottle;
  Place down jelly;
  Pick up knife;
  Spread jelly on slice;
  Bring two slices of bread together;
  Cut slices in half down the middle;
  Throw knife in the trash;
  Pick up one half of sandwich;
  Enjoy;
END.  
```

****Q. What do we think?****

> A. The sequence in this example is very thorough! However, we are still assuming certain conditions, such as that our utensils or ingredients already exist. What if we are out of plates? In that case, will we grab a napkin to place our sandwich on? What if we are out of jelly? Will we throw the sandwich away or eat it with just peanut butter?

Computers are not smart. We need to give them step-by-step instructions to account for conditions. They cannot adapt to make changes without being explicitly told. Programming is a series of tasks that can be completed only if a certain number of conditions are met.

Computers cannot adapt, but we can. Your first pass at pseudocode will probably not cover everything. Once you know more, you may come back to update and refactor your pseudocode.

***
<a name="ind-practice"></a>
## Independent Practice: Solve the Waiter Problem (10 min)
<!--I think between giving students time to solve this, and then discuss the answer, it will take closer to 10-15 minutes. What do you think?-->

Using your newfound skills, you have five minutes to solve this:

- A waiter has N tables, each with 2-4 guests.
- The waiter makes rounds between each of their tables, the bar, and the kitchen.
- The waiter takes drink orders for a new table, then submits them to the bar.
- Drinks are delivered when all table orders are ready.
<!--Does this mean when the orders for all N tables, or all the orders for guests at one table?  -->
- The waiter takes food orders for a new table, then submits them to the kitchen.
- Food is delivered when all table orders are ready.
<!--Does this mean when the orders for all N tables, or all the orders for guests at one table?  -->
- The waiter checks idle tables for additional requests, then submits them appropriately.
- Additional requested items are delivered when all table orders are ready.


***Q. In one sentence, what problem were you solving?***

> A. Discuss the answers and the importance of identifying the problem.

We realize you didn't have enough time to solve it. We hope that, through this exercise, you learned the importance of clearly identifying the problem.

***
<a name="approaching-problem"></a>
## Approaching a coding problem (10 min)
<!--Consider making this a guided practice and walking through a real example for each step. It might help students understand how to apply these questions to a pseudocode exercise.  -->

Pseudocode isn't just about writing down the steps that you already know. It's a tool to help you work through the problem. Before we can write pseudocode to solve the problem, we need to know the problem.  

Here are some steps that can help with problem-solving:

- Identify the problem.
- Conceptualize.
- Break it down.
- Start small.

#### Identify the Problem

- What exactly are we trying to solve? From whose viewpoint?  
- Who will benefit?  
- What are we delivering?

#### Conceptualize

- Look at the big picture and the major steps.
- Avoid details.
- At this stage, we recommend drawing on whiteboards or with pen and paper (anything that screams "temporary," "play," or "brainstorm.")

#### Break It Down

- We break the conceptual models down into concrete steps and actionable items.
- We identify risks (gaps in knowledge, technology, and infrastructure).

#### Start Small, Stay Small

Finally, we take some action. This is when we finally start writing code. We fight hard to take small steps, and verify that each step achieves what we want and what we expect, before continuing on. If we do too much at once and things break (which they always do), we won't know what is causing the problem. We won't know which part to trust. Humans thrive on easy wins. We need to see forward progress. Remember and use that. Celebrate your wins.


#### Review: the Steps

- Identify the Problem.
- Conceptualize.
- Break it down.
- Start small.


****Q. Where does pseudocode fit in these steps?****

> A. Break it down OR Start small

This process is iterative. We keep circling around and repeating the earlier steps, just at a different level.

When we first approach a problem, we see the big picture. "Break it down" gives us big steps. Then, we take one of those steps and "Break it down." Now, starting small, we write pseudocode to help illustrate the problem.  

Pseudocode proves that we have *identified* the problem, understand it *conceptually*, and have *broken it down* into *small steps* that we can follow.


#### Syntax for Pseudocode:

There is no one fixed syntax for pseudocode. It just needs to be clear, simple, and concise.  

If you feel stuck, feel free to use this syntax:

***Referencing: [Introduction to Pseudocode](http://www.slideshare.net/DamianGordon1/pseudocode-10373156)***

* General Structure of Pseudocode

	```text
	PROGRAM <ProgramName>:
	
	<Do Stuff>
	
	END.
	```

* Selection: IF/ELSE Statements

	```
	IF (<Condition>)
		THEN <Statements>;
		ELSE <Statements>;
	ENDIF;
	
	```
* Iteration: LOOP

	```
	WHILE (<Condition>)
	
	ENDWHILE;
	```

***
<a name="real-world-practice"></a>
## Independent Practice: Pseudocode a real-world problem (15 min)
Follow the instructions in [starter\_code/pseudo\_code\_practice.md](starter_code/pseudo_code_practice.md)


## Bonus Exercise: Pseudocode FizzBuzz (15 min - If time permits)

Follow the instructions in [starter\_code/fizzbuzz.md](starter_code/fizzbuzz.md)

## Bonus Exercise: If there are eggs (25 min - If time permits)

Follow the instructions in [starter\_code/eggs.md](starter_code/eggs.md)

> Instructor Note: See possible solution in the solutions folder [here](solutions/eggs.MD).

<a name="conclusion"></a>
## Conclusion (5 mins)
- Review independent practice deliverable(s).
- Recap topic(s) covered in today's lesson.
- Preview topics that will be covered in today's lessons.

- Check for understanding by asking the following questions:
  1. What are some helpful steps for solving problems?
  2. What does pseudocode help us do?
  3. Do we only pseudocode at the start of a project?


### ADDITIONAL RESOURCES
  - Exercises
    - [Additional Examples/Exercises from GA JS Circuit](exercises/circuit.md) (Easy)
    - [Pseudocode Exercises by Thom Page](exercises/pseudo-code.md) (Medium/Advanced)
  - Readings

    - [Pseudocode](https://en.wikipedia.org/wiki/Pseudocode) (Wikipedia)
    - [Introduction to Pseudocode](http://www.slideshare.net/DamianGordon1/pseudocode-10373156)
  - Videos
    - [Matt, WDI-DC-8 Screencast](https://www.youtube.com/playlist?list=PL-6bwUTtCRVTMUUSjqIYVXYyfZBzs8saD)
    - [GA JS Circuit - Pseudocode](https://generalassembly.wistia.com/medias/ym3vdun7n3)
