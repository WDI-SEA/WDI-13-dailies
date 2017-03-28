# Cash Register

Using what you know about conditional statements, create a program that tells us the current status of a cash register.

### Rules
* If we have enough money in the cash register, print out: "Have a nice day."
* If we don't have enough money in the cash register, but have enough in the cash register and safe combined, print out: "Please wait while I go to the safe."
* If we don't have enough money in the cash register and the safe combined, print out: "Please wait while I go to the bank."

> **Hint:** There should be a variable to keep track of how much money is inside the cash register.

> **Hint:** There should be a variable to keep track of how much money is inside the safe.

### Bonus 1:
We need to create a bank withdrawal slip for the money we have to withdraw. Create a new variable that holds onto the amount of money needed for withdrawal.

For example, if I needed $100, and the cash register only had $10 and the safe only had $30, I would need to withdraw $60 from the bank.

### Bonus 2:
Instead of using an `if...else` statement for Bonus 1, use a `ternary statement` instead.
