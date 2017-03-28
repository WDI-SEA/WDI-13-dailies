# Additional Examples

#### Player score
A program that lets a player know whether he or she has passed the current level. Pseudocode for this program might look like the following:

````
passingScore = 150 points
get playerScore


if playerScore >= passingScore
    display message "Current level: Passed"
otherwise
    display message "Current level: Failed"
````

#### Thermostat program

```
target_temperature = get desired temperature
repeat forever,
      current_temperature = get_sensor_reading
      if target_temperature > (current_temperature+5),
          turn_on_heater
      if target_temperature <= current_temperature,
          turn_off_heater
```



# Additional Exercises

## Lord of the Rings - Height

If you asked people to pick who the shortest character is in the "Lord of the Rings" series, they would be able to compare everyone's height, and simply pick the shortest character (Bilbo).

Computers think in more specific steps that are broken down. How might you instruct a computer to pick the shortest LOTR character?  

> Hint: The first step might be: Find the height of character A. What would be the next step?


#### Possible Solution:

Here are the possible instructions you might give a computer for this task:

- Find the height of character A.
- Find the height of character B.
- Compare height of character A to B.
- Choose the character with shorter height.
- Find the height of character C.
- Compare the height of character C to step #4 (shorter character of A or B).
- Choose the character with shorter height.
- Repeat steps 5-7 for all characters.
- Once the character with the shortest height is determined, label that character "shortest."
- Declare name of the character.


## Lord of the Rings - Webpage

Suppose you were given the following task:
> Create a button. Every time users click the button, the Ring of Power is put on Frodo's finger, which makes Frodo disappear. If users click on the button again, the Ring of Power is taken off Frodo's finger, and Frodo reappears.

What would your pseudocode look like?

#### Possible Solution:

```
If ring is off and button is clicked,
Put ring on Frodo.
When ring is on Frodo, Frodo disappears.


If ring is on and button is clicked
Take ring off of Frodo.
When ring is off of Frodo, Frodo appears.
```
