/* Code */
var code = function() {
	
	var output = "";
	
	for (var i = 1; i <= 100; i++) {
		var nextNumber = "";
	
		if (i % 3 === 0) {
			nextNumber = "Fizz";
		}
		
		if (i % 5 === 0 ) {
			nextNumber = nextNumber + "Buzz";
		}
		
		if (nextNumber === "") {
			nextNumber = i;
		}
		
		if (output.length > 0) {
			output = output + " ";
		}
		
		output = output + nextNumber;
	
	}
	
	return(output);
}

/* Execute & Display */
document.getElementById('code').innerHTML = code;
document.getElementById('output').innerHTML = code();
