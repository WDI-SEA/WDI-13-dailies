// 1
console.log("Hello.");
document.getElementById("my-div-1").innerHTML = "New Content";

// 2
var myName = "Connor Clark";
var myFavoriteFood = "Pizza";
var zip = 77581;

var greeting = "Hello, my name is " + myName + ". I like to eat " + myFavoriteFood + ". You can find me around " + zip;

console.log(greeting);
document.getElementById("my-div-2").innerHTML = greeting;

// 3
var myPerson = {
    name: "Connor Clark",
    favoriteFood: "Pizza",
    zip: 77581
};

// 3 properties
//      -key 'name', value 'Connor Clark'
//      -key 'favoriteFood', value 'Pizza'
//      -key 'zip', value 77581

myPerson.favoriteMovie = "The Princess Bride";

console.log(myPerson);
console.log(myPerson.name);

var greeting2 = "Hello, my name is " + myPerson.name + ". I like to eat " + myPerson.favoriteFood + ". You can find me around " + myPerson.zip;

document.getElementById("my-div-3").innerHTML = greeting2;

// 4
var number1 = 100;
var number2 = 1;
var sum = number1 + number2;

console.log(sum);

number1 = 50;
number2 = number2 + 10;
console.log(number2); // 11

console.log(10 * 10);
console.log(Math.sqrt(10 * 10));

console.log(1 + 100 * 5); // 501
console.log((1 + 100) * 5); // 505
