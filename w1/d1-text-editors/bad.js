/*

	Use the skills you just learned to modify this code.

	1) Rename methods, variables
	2) Fix whitespace issues

*/

function modifyTheArray(arr, n){
	var arr2 = [];

	for ( var counter = 0; counter < arr.length; counter++ ){
		arr2.push(arr[ counter ] * n);
	}

	return arr2;
}

var myArray1 = [ 1 ];
var newArray1 = modifyTheArray( myArray1, 2);
console.log(newArray1);

var myArray2 = [ 1,2,3,4,5];
var newArray2 = modifyTheArray(myArray2 , 4);
console.log(newArray2);

var myArray3 = [1,2,3,4,5,6,7,8,9,10 ];
var newArray3 = modifyTheArray(myArray3, 3 );
console.log(newArray3);
