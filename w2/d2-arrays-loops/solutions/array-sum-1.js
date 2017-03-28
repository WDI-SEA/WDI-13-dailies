var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;
for (var i=0; i<numbers.length; i++) {
  sum += numbers[i];
}

console.log("sum = " + sum);      // should print "sum = 45"
