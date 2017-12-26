/* Thanks to https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers/17323608#17323608
Fixes a bug in javascript where the entire fucking language is retarded and should burn in hell for all eternity.
*/
function mod(n, m){
	return ((n % m) + m) % m;
}

// https://stackoverflow.com/questions/37398871/javascript-get-current-date-using-utc-offset/37399351#37399351

function getDateWithUTCOffset(inputTzOffset){
	var now = new Date(); // get the current time

	var currentTzOffset = -now.getTimezoneOffset() / 60 // in hours, i.e. -4 in NY
	var deltaTzOffset = inputTzOffset - currentTzOffset; // timezone diff

	var nowTimestamp = now.getTime(); // get the number of milliseconds since unix epoch 
	var deltaTzOffsetMilli = deltaTzOffset * 1000 * 60 * 60; // convert hours to milliseconds (tzOffsetMilli*1000*60*60)
	var outputDate = new Date(nowTimestamp + deltaTzOffsetMilli) // your new Date object with the timezone offset applied.

	return outputDate;
}

function OneiaTime() {
	var epoch =	1497151176;/*SUN 2017 JUN 11 03:19:36 UTC*/
	var year =	6477407.605917404;
	var day =	104148;

	var currenttime = Date.now()/1000

	var remainder = currenttime-epoch;
	var years = 950+Math.floor(remainder/year);
	var remainder = remainder%year;
	var yearprogress = remainder/year;
	var days = Math.floor(remainder/day);
	var remainder = remainder%day;
	var first = Math.floor(remainder/(day/10));
	var remainder = remainder%(day/10);
	var second = Math.floor(remainder/(day/100));
	var remainder = remainder%(day/100);
	var third = Math.floor(remainder/(day/1000));
	var remainder = remainder%(day/1000);
	var fourth = Math.floor(remainder/(day/10000));
	var remainder = remainder%(day/10000);
	var fifth = Math.floor(remainder/(day/100000));

	var currentTimeString = years + " AT, Day " + days + ", " + first + ":" + second + ":" + third + ":" + fourth + ":" + fifth;
	
	var timetime = getDateWithUTCOffset(-5).toString()
	var utc1 = timetime.slice(0,16);
	var utc2 = timetime.slice(16,18);
	var utc3 = timetime.slice(18,24);

	var medidiem = ' AM'
	if (utc2>12){
		medidiem = ' PM'
		utc2 -= 12
	}


	var yy =		31556952000;
	var vernal =	6884100000;/*20 Mar 16:15 (2018)*/

	document.getElementById("clock").innerHTML = 'Eremoran Time:<br/>'+currentTimeString+'<br/>\n<progress value="'+yearprogress+'"></progress><br/>\nEarth Time:<br/>'+utc1+utc2+utc3+medidiem+' EST<br/>\n<progress value="'+((Date.now()-vernal)%yy)/yy+'"></progress>';
	/*console.log(Date.now());*/
}