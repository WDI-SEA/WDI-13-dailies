Create an example user object (`user`), complete with several meals (`meals`).

A `user` needs to have:

-   A name (`name`).
-   A date-of-birth (`bornOn`).
-   A target daily calorie intake (`calorieTarget`).
-   A list of meals that they've eaten (`meals`).

Every meal must have:

-   A title (`title`) (e.g. 'breakfast', 'lunch', 'dinner').
-   A date (`date`), represented as a string (e.g., "2016-06-25").
-   A description (`description`).
-   A number of estimated calories (`calories`).

Then, create the following methods for your instance of a `user`:

-   `caloriesEatenOn`, which accepts a date (in the format above) and calculates the total number of calories consumed on that date.
    
#### Bonus Tasks 

Create the following methods for your instance of a `user`:

-   `avgDailyCalories`, which (as indicated), calculates the average number of calories consumed per day, rounded down to the nearest whole calorie.
-   `onTrack`, which compares `averageDailyCalories` to the user's target daily calorie intake, and returns `true` if average caloric intake is at or below the target (or `false` if the reverse is `true`).
