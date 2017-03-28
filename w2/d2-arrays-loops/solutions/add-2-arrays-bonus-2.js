function sumOfArrays(a, b) {
  var result = [];
  var maxLength = a.length > b.length ? a.length : b.length;
  for (var i = 0; i<maxLength; i++) {
    var sum = (a[i] || 0) + (b[i] || 0);
    result.push(sum);
  }
  return result;
}
var a = [1, 2, 3];
var b = [2, 3, 4, 5, 6];

console.log("sum of arrays = " + sumOfArrays(a, b));
