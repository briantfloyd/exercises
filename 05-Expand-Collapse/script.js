/* Code */
var code = function() {

	//accordion expand/collapse link hide/reveal toggle
	$(".more-info").click(function() {
		if (this.childNodes[0].className === "hidden") {
			this.childNodes[0].className = "";
			this.childNodes[1].className = "hidden";
		} else {
			this.childNodes[0].className = "hidden";
			this.childNodes[1].className = "";        
		}
	});
	
	//accordion toggle reset and page scroll adjustment
	$(".hide-info").click(function() {
		
		//split this element's class attribute content string and grab second item of array (should be the ID reference; first should be 'hide-info')
		var moreInfoToggleID, moreInfoToggleElement;
		moreInfoToggleID = this.className.split(" ")[1];
		moreInfoToggleElement = document.getElementById(moreInfoToggleID);
	
		moreInfoToggleElement.childNodes[0].className = "";
		moreInfoToggleElement.childNodes[1].className = "hidden";
	
		//scroll page 
		$('html, body').animate({
			scrollTop: $("#" + moreInfoToggleID).offset().top/* - $('#navbarSettings').height()*/
		}, 250);
	});
}

/* Execute & Display */
document.getElementById("code").innerHTML = code;

$(document).ready(code());    