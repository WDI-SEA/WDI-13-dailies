var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = numbers.reduce(function(a, b) { return a + b; });
console.log("sum = " + sum);      // should print "sum = 45"
