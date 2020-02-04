var time = new Date() .getHours(); // native JavaScript code represent current hour (1-24)
var noon = 12; // 12pm
var evening = 17; // 5pm
var wakeUpTime = 7; // 7am
var lunchTime = 12; // 12pm
var napTime = lunchTime + 1; // 1pm
var partyTime = 20; // 8pm

var updateClock = function()
{
	var messageText;
	var timeEventJS = document.getElementById("timeEvent");
	var lolcatImage = document.getElementById("lolcat");
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

	if (time == wakeUpTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	messageText = "Rise and shine bright!"; // wake-up time
	}
	else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	messageText = "It's lunch time!"; // lunch time
	}
	else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	messageText = "Snooze time….zzz"; // nap time
	}
	else if (time == partyTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
	messageText = "Get the party started!"; // party time
	}
	else if (time < noon) {
	messageText = "Good morning!";
	}
	else if (time > evening) {
	messageText = "Good evening!";
	}
	else {
	messageText = "Good afternoon!";
	}

	lolcatImage.src = image;
	timeEventJS.innerText = messageText;

	var showCurrentTime = function()
	{
    // display the string on the webpage
   		var clock = document.getElementById('clock');

    	var currentTime = new Date();

    	var hours = currentTime.getHours();
   	 	var minutes = currentTime.getMinutes();
    	var seconds = currentTime.getSeconds();
   		var meridian = "AM";

    // Set hours
    	if (hours >= noon)
    	{
        meridian = "PM";
    	}
    	if (hours > noon)
    	{
        hours = hours - 12;
    	}

    // Set Minutes
    	if (minutes < 10)
    	{
        minutes = "0" + minutes;
    	}

    // Set Seconds
    	if (seconds < 10)
    	{
        seconds = "0" + seconds;
    	}

    // put together the string that displays the time
    	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    	clock.innerText = clockTime;
	};
	showCurrentTime();
};
updateClock();

var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// PARTY TIME BUTTON
	var partyTimeButtonJS = document.getElementById("partyTimeButton");
	var isPartyTime = false;

	var partyEvent = function()
	{
   		if (isPartyTime === false)
   		{
      	isPartyTime = true;
      	time = partyTime;
	  	partyTimeButtonJS.innerText = "Party Time!";
	  	partyTimeButtonJS.style.backgroundColor = "#d24dff";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   		}
   		else
  		{
      	isPartyTime = false;
      	time = new Date().getHours();
	  	partyTimeButtonJS.innerText = "Party Over";
	  	partyTimeButtonJS.style.backgroundColor = "#0A8DAB";
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   		}
	};
	partyTimeButtonJS.addEventListener("click", partyEvent);

var wakeUpTimeSelectorJS = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelectorJS = document.getElementById("lunchTimeSelector");
var napTimeSelectorJS = document.getElementById("napTimeSelector");

var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelectorJS.value;
};

var lunchEvent = function()
{
	lunchTime = lunchTimeSelectorJS.value;
};

var napEvent = function()
{
	napTime = napTimeSelectorJS.value;
};

wakeUpTimeSelectorJS.addEventListener("change", wakeUpEvent);
lunchTimeSelectorJS.addEventListener("change", lunchEvent);
napTimeSelectorJS.addEventListener("change", napEvent);
