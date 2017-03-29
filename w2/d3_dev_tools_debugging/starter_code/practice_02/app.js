var calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		a - b;
	},
	multiply: function (a, b) [
		return a * b;
	],
	divide: function (a, b) {
		return a / b;
	},
	sum: function (numbers) {
		var sum = 0;
		for (var i = 0; i < numbers.length; i += 2) {
			sum += numbers[i];
		}
		return sum;
	}
};

var test1 = calculator.add(1, 2) === 3;
var test2 = calculator.subtract(5, 4) === 1;
var test3 = calculator.multiply(3, 7) === 21;
var test4 = calculato.divide(10, 5) === 2;
var test5 = calculator.sum([1,3,5]) === 9;

console.log(test1, test2, test3, test4, test5);
