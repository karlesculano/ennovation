function makeTimer() {
    const date = $('.homepage-hero__countdown-header').data('date-id');
    
    console.log(date);

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date(date + " UTC+08:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html("<span>" + days + "</span><span>Days</span>");
			$("#hours").html("<span>" + hours + "</span><span>Hours</span>");
			$("#minutes").html("<span>" + minutes + "</span><span>Minutes</span>");
			$("#seconds").html("<span>" + seconds + "</span><span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);

$(document).ready(function() {
  $('#vertical').lightSlider({
    gallery:true,
    item:1,
    vertical:true,
    verticalHeight:600,
    vThumbWidth:75,
    thumbItem:8,
    thumbMargin:4,
    slideMargin:0
  });  
});