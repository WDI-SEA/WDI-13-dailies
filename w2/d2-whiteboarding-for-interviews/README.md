
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Whiteboarding 101 (60 mins)

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Opening](#opening)  | Discuss Lesson Objectives |
| 10 min | [Introduction](#introduction)  | Whiteboarding Techniques |
| 15 min | [Guided Practice](#guided-practice)  | Whiteboarding Examples |
| 30 min | [Independent Practice](#independent-practice)  | Whiteboarding Problems |
| 5 min | [Conclusion](#conclusion) |Review/Recap |

***
<a name="opening"></a>
## Opening (5 mins)

Whiteboarding is often a very important part of the technical interview process; it gives the interviewers insight into your thought process as well as your knowledge on the subject. As the name implies, whiteboarding is the technique of solving a problem on a whiteboard. While this sounds relatively straightforward, it can actually be quite challenging. Today we're going to learn all about it!

> Check: Give the students one minute to discuss the types of questions they think might be asked during a whiteboarding session.

***

<a name="introduction"></a>
## Introduction (10 mins)

While one of the main goals in whiteboarding is to solve the problem you are given, the interviewers are also using it to find out much more about who you are and how you work.

> Check: Give the students two minutes to discuss what they think are some important things to keep in mind while at the whiteboard.

Here are some extremely important skills to practice while at the whiteboard:

- **Keep talking:** One of the worst things you can do is walk up to the board and start writing your code without communicating your plan of attack or explaining what you are doing. As soon as you have gathered your thoughts, start brainstorming out loud about how you are thinking of solving the problem. As you write code, explain the goal of the code. _**Part of the goal of whiteboarding is to get a feel for how you will communicate with other team members.**_

- **Ask questions:** If you are unclear about part of the problem, ask questions. Interviews are your time to shine, and you don't want to waste it by going down the wrong path because of a misunderstanding.

- **Start with an example:** Before you start writing code, write out a few examples of what your code is trying to accomplish. This is extremely useful because you can refer back to these as you code, in order to ensure you are still on track. At the end, you can trace the example through your code to show the interviewer that it works. If a diagram is appropriate, draw that, too!

- **Pseudocode:** Before you dive into the code, write out pseudocode; or at the very least, list out the steps you are going to take. Not only will this give you a guide to refer back to while you code, but it can help you spot mistakes in your logic before you start coding. Again, this ties back to having your interviewer understand your overall thought process.

If you can't finish a question, that's okay! It's more important that you show the interviewer how you approached the problem, and to give them a good idea of how you code.

> Check: Ask the students what they should do if they get stuck while they are coding on the whiteboard.

***

<a name="guided-practice"></a>
## Guided Practice: Whiteboarding Examples (10 mins)

Now that we've discussed some techniques, let's walk through a real example.

Suppose we had the following question:

> Given two arrays of integers of equal length, that are identical except for a single element, write a method to return the index of the number which is different in the second array.


> Check: Ask the students what they think the first step is, second step, etc.

First, we should start off with a few quick examples:

```js
findDifference([1,2,3],[1,2,4]);
=> 2
findDifference([1,2,3,4],[1,3,3,4]);
=> 1
findDifference([0],[1]);
=> 0
```

Next, we should list the steps we are going to follow in our method.

1. Create a loop that goes through the arrays.
2. At each index, compare the values in both arrays.
3. If they are different, return that index, else move on to the next index.
4. Return -1 if no difference is found.

Finally, we can start writing our code:

```js
function findDifference (arr1, arr2){
  for (var i = 0; i < arr1.length; i++){
    if (arr1[i] != arr2[i]){
      return i;
    }
  }

  return -1; // Arrays are identical
}
```

You can see that each step we wrote out corresponds to a certain section of the code. We started off with concrete examples, then moved on to planning, and then finally wrote out our code.

***

<a name="independent-practice"></a>
## Independent Practice: Whiteboarding Problems (30 mins)

Now it's your turn! Get into groups of three people.

- 10 minutes: Have each person in the group pick a different problem from the list below and spend 10 minutes solving those problems individually.
- 20 minutes: Come back together as a group of three. Each person in the group should take a turn explaining their solution to the problem. The other two people will act as interviewers. Remember to follow the techniques we discussed.

> Instructor Note: Circulate around the room listening to how students are doing, and offer advice when needed.

1. Find the character that appears the most times in a given string (i.e., "tomorrow" should return 'o'). Return the character later in the alphabet if there is a tie.
2. An array is supposed to contain the numbers 1-10, but one number is missing. Find and return that number.
3. Write a method that finds the second-highest number in an array of integers.
4. Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.
5. Given an array of ints, return the string "even" if there are more even elements in the array, or "odd" if there are more odd elements in the array.

> Check: Take one minute to review the solution to each of the whiteboarding problems. Choose one student to lead the review for each.

***

<a name="conclusion"></a>
## Conclusion (5 mins)

Whiteboarding can be deceptively difficult and only becomes easier with practice. We're doing this in week 2, so you can immediately start practicing and get better each week. Knowing these basic techniques will help you to relax and concentrate on the problem you are presented with during your interviews.  

- Describe the steps we reviewed when approaching a whiteboarding problem.
- Why is it okay to ask questions?
- Review Lesson Objectives.

***

### Additional Guidance for Interviews

- Before interviewing, think of 3-5 questions you'd like to ask the interviewer about the company/their product/what you'll be doing.
- Ask what your role in the organization will be and what you can do to prepare for it prior to being hired. This also shows your interest in the role and your desire to **own** it.
- Ask what software/tools the company uses; this lets you see what you'll be working with.
- Dress to impress... but ask about the expected dress code when scheduling the interview. Dress up one step nicer than that.
- Don't be afraid to say **"I don't know."** It is better than lying.
- If you need further clarification, ask!
- Don't ask for specifics regarding benefits on the first interview.
- Get your interviewer's email address. Email them the next day thanking them for their time. They'll remember you.
- Don't waste interview time with useless small talk.
- Talk to a friend before interviewing. You'll feel confident going in. It isn't a bad idea to walk to an interview with a friend.
- Your Github is your portfolio. Clean it up. Be proud of it. Remove bad code.
- Demonstrate passion for what you are doing. It'll set you apart.

## Random Questions You May Be Asked
- How would you organize a front-end application, folder-wise? Where would you place JS, CSS, etc?
- What is the next thing you'd like to learn?
- Can you describe the use case for `classes` vs. `IDs` in CSS? Why is this useful, and how does it affect your CSS design and layout?


### ADDITIONAL RESOURCES
- Preparing for the interview
  - [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=pd_sim_14_6/160-2330665-3607932?_encoding=UTF8&pd_rd_i=0984782850&pd_rd_r=FY97FF9CXS07KGQ9NKZT&pd_rd_w=Un5ww&pd_rd_wg=QnpmQ&psc=1&refRID=FY97FF9CXS07KGQ9NKZT)
  - [Interview Cake](https://www.interviewcake.com/)
- Readings
  - Be prepared to ask questions about the company. Read about the [Joel Test](http://www.joelonsoftware.com/articles/fog0000000043.html) for examples of what to ask the interviewer.
  - [Interview Tips for Jr. Devs](http://tosbourn.com/interview-tips-junior-developers/)
  - [Going Green Hiring Junior Dev](http://www.tombatron.com/2013/04/going-green-hiring-junior-developer.html)
