// add 2 integer arrays (add elements)
function sumOfArrays(a, b) {
  var result = [];
  for (var i = 0; i < a.length; i++) {
    result.push(a[i] + b[i]);
  }
  return result;
}

var a = [1, 2, 3];
var b = [4, 6, 8];
console.log("sum of arrays = " + sumOfArrays(a, b));
