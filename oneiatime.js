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
	
	var utc1 = new Date().toJSON().slice(0,10);
	var utc2 = (new Date().toJSON().slice(11,13)-5)%24;
	
	var medidiem = ' AM'
	if (utc2>12){
		medidiem = ' PM'
		utc2 -= 12
	}
	
	var utc3 = new Date().toJSON().slice(13,19);

	var yy =		31556952000;
	var vernal =	6884100000;/*20 Mar 16:15 (2018)*/

	document.getElementById("clock").innerHTML = 'Eremoran Time:<br/>'+currentTimeString+'<br/>\n<progress value="'+yearprogress+'"></progress><br/>\nEarth Time:<br/>'+utc1+' '+utc2+utc3+medidiem+' EST<br/>\n<progress value="'+((Date.now()-vernal)%yy)/yy+'"></progress>';
	/*console.log(Date.now());*/
}