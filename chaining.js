var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


console.log(integers.sort(function (first, second) {
	return second - first;
}).filter(function(current){
	if (current <= 19) {
		return current;
	}
})
.map(function(number){
	return number * 1.5 - 1;
})
.reduce(function(prev, current){
	return prev + current;
})

);

// 	var newArray = [];

// function multiply(array) {
// 	for (var i = 0; i < array.length; i++) {
// 		newArray[i] = (array[i] * 1.5) - 1;
// 	}
	
// }
