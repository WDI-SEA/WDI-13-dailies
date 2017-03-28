## Booleans & Comparison Operators

Here's an example of the truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

|a|!a|
|---|---|
|true|false|
|false|true|

Fill out the truth tables below for `&&` (and), `||` (or) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.
> **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND`, respectively.  
> **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.  

| a | b | a AND b |
| --- | --- | --- |
| true | true | ? |
| true | false | ? |
| false | true | ? |
| false | false | ? |

|a|b|a OR b|
|---|---|---|
|true|true|?|
|true|false|?|
|false|true|?|
|false|false|?|

|a|b|a `!=` b|
|---|---|---|
|3|3|?|
|1|5|?|
|2|"2"|?|

|a|b|!a AND (a OR b)|
|---|---|---|
|true|true|?|
|true|false|?|
|false|true|?|
|false|false|?|

#### "Truthiness" and "Falsiness"

You've seen the Boolean values of `true` and `false`.

There is also a concept of "truthy" and "falsey." In Javascript, the following things are "falsey":

- `false`
- `0` (zero)
- `""` (empty string)
- `null`
- `undefined`
- `NaN` (a special Number value meaning- Not-a-Number!)

Everything else is "truthy."

These do the same thing:

```js
var name = '';
if(name == ''){
  alert('Enter your name, please');
}
if(!name){
  alert('Enter your name, please');
}
```
