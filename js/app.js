
$(document).ready(function() {

//get the number on enter
$(".number").keypress(function(e) {
		if (e.which == 13) {
			var input = $("input[name=number]").val();
			var i;


//loop 1-100
			for (var i = 1; i <= input && i <= 100; i++) {

//create if divisible by 3 and 5 output "fizzbuzz"
			if (i % 3 === 0 && i % 5 === 0) {
			$("#fizzbuzznumbers").append("<p>fizzbuzz</p>");
			}

//create if divisible by 3 output "fizz"
			else if (i % 3 === 0) {
			$("#fizzbuzznumbers").append("<p>fizz</p>");
			}

//create if divisible by 5 output = "buzz"
			else if (i % 5 === 0) {
			$("#fizzbuzznumbers").append("<p>buzz</p>");
			}

//or else output the number
			else {
			$("#fizzbuzznumbers").append("<p>" + i + "</p>");

			}
		}}
	});
});
