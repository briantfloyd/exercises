/* Code */
var code = function() {
	return('Hello world');
}

/* Execute & Display */
document.getElementById('code').innerHTML = code;
document.getElementById('output').innerHTML = code();
