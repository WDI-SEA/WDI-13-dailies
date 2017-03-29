function fizzBuzz(num) {
	for (var i = 0; i <= num; i++) {
		if (num % 5 = 0) {
			console.log('buzz');
		} else if (num % 3 === 0) {
			console.log('fizz');
		} else if (num % 5 === 0 && num % 3 === 0) {
			console.log('Fizzbuzz');
		} else {
			console.log(num);
		}
	}
}

var userInput = 10;
fizzBuzz(userInput);
