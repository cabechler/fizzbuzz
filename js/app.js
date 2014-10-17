
$(document).ready(function() {

var i = document.getElementById("number_entered")

//loop 1-100
for (var i = 1; i <= 100; i++) {

//create if divisible by 3 and 5 output "fizzbuzz"
if (i % 3 === 0 && i % 5 === 0) {
	console.log("fizzbuzz");
}

//create if divisible by 3 output "fizz"
else if (i % 3 === 0) {
	console.log("fizz");
}

//create if divisible by 5 output = "buzz"
else if (i % 5 === 0) {
	console.log("buzz");
}

//or else console.log the number
else {
	console.log(i);
	}

//display output
}
}