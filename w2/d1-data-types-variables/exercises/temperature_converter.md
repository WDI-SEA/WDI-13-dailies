# Exercise: Temperature Converter

Goal: Create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.
- Try the bonus goal if you have extra time!

## Setup

- Create an `index.html` file.
- Create a `script.js` file.
- Make sure to link the script file in the `index.html`.

## PART 1

### Instructions

1. Set the `Fahrenheit` variable to the temperature that you get from the user.
2. Below that, write JavaScript code that converts `Fahrenheit` to its equivalent Celsius and Kelvin values.
  - Conversion formulae: [http://www.csgnetwork.com/temp2conv.html](http://www.csgnetwork.com/temp2conv.html)
  - Sample temperatures: `32F = 0C = 273.15K`
3. Below that, `console.log` the starting and converted temperatures.
4. Repeat steps 1-3 for starting `Celsius` and `Kelvin` temperatures.
5. Test your program by opening `index.html` in the browser.


Your program will look something like this for each starting temperature...

  ```javascript
  // Starting temperature
  var fahrenheit = //some code here to get user input;

  // Conversion code
  var fahrenheitToCelsius = ...;
  var fahrenheitToKelvin = ...;

  // Print to console
  console.log( "Fahrenheit: " + ... );
  console.log( "Celsius: " + ... );
  console.log( "Kelvin: " + ... );
  ```

Your command line output will look something like this...

  ```
  Fahrenheit: STARTING_TEMP F
  Celsius: CONVERTED_TEMP C
  Kelvin: CONVERTED_TEMP K
  ```

Feel free to turn to your tablemates for help!  

### Bonus

Use conditionals (e.g., `if-else` statement, `switch` statement) so that your program only prints out the converted temperatures for one starting value.  

The starting temperature should be determined by a 'whichTemp' variable that you instantiate at the beginning of the program, and will contain a value of either "f" (Fahrenheit), "c" (Celsius), or "k" (Kelvin).

## PART 2 (Challenge - Advanced)

Using Conditionals, have your code accept either Fahrenheit, Celsius, or Kelvin, and output the other two temp types.

Restructure your program from PART 1 so that, when you convert a temperature, the new values are stored in an array. Your array will end up looking something like this...

  `var fahrenheitTemps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];`


When you `console.log` the temperatures, make sure you do that by accessing the values stored in the array.  

For these bonus tasks, you'll need to look up and implement `for` or `while` loops.

### Bonus 1

Use a for or while loop to print out the conversion results for each temperature. It's okay if you need to simplify your `console.log` statements and remove strings.  

### Bonus 2

Using loops, create an interface that continues to ask the user for temp conversions until the user requests to stop.
