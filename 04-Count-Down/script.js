/* Code */
var countdown = function(elementId, year, month, day, hours, minutes, seconds) { //display element ID and deadline

	var deadlineMessage = "Deadline passed";
	var montharray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	//create deadline date string
	var futurestring = montharray[month-1] + " " + day + ", " + year + " " + hours + ":" + minutes + ":" + seconds;

	//create today date string
	var today = new Date();
	var todayy = today.getFullYear();
	var todaym = today.getMonth();
	var todayd = today.getDate();
	var todayh = today.getHours();
	var todaymin = today.getMinutes();
	var todaysec = today.getSeconds();
	var todaystring = montharray[todaym] + " " + todayd + ", " + todayy + " " + todayh + ":" + todaymin + ":" + todaysec;
	
	//convert date strings to milliseconds and calculate difference
	var dd = Date.parse(futurestring) - Date.parse(todaystring); 
	
	//convert from milliseconds back to days/hours/minutes/seconds
	var dday = Math.floor(dd / (60 * 60 * 1000 * 24) * 1); 
	var dhour = Math.floor((dd % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
	var dmin = Math.floor(((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
	var dsec = Math.floor((((dd % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);
	
	//display
	if (dday <= 0 && dhour <= 0 && dmin <= 0 && dsec <= 1) {
		
		//deadline message
		document.getElementById(elementId).innerHTML = deadlineMessage;	
		return;
		
	} else {
		
		//time remaining
		document.getElementById(elementId).innerHTML = dday + " days, " + dhour + " hours, " + dmin + " minutes, " + dsec + " seconds";
		
		//start new timer
		setTimeout(function(){ countdown(elementId, year, month, day, hours, minutes, seconds) }, 1000);	
	}
}

/* Execute & Display */
document.getElementById("code").innerHTML = countdown;

var today = new Date();
var nextYear = today.getFullYear() + 1;

document.getElementById("counteventonedate").innerHTML = "Midnight, Jan. 31, 2016";
countdown("counteventone",2016,01,31,23,59,59);

document.getElementById("counteventtwodate").innerHTML = "Midnight, Feb. 15, " + nextYear;
countdown("counteventtwo",nextYear,02,15,23,59,59);

document.getElementById("counteventthreedate").innerHTML = "Midnight, March 31, " + nextYear;
countdown("counteventthree",nextYear,03,31,23,59,59);