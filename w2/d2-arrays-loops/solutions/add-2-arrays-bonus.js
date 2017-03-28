function sumOfArrays(a, b) {
  var result = [];
  var minLength = a.length < b.length ? a.length : b.length;
  var maxLength = a.length > b.length ? a.length : b.length;
  for (var i = 0; i < minLength; i++) {
    result.push(a[i] + b[i]);
  }
  var longerArray = a.length < b.length ? b : a;
  for (var i = minLength; i < maxLength; i++) {
      result.push(longerArray[i]);
  }
  return result;
}
var a = [1, 2, 3];
var b = [2, 3, 4, 5, 6];

console.log("sum of arrays = " + sumOfArrays(a, b));
