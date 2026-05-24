$(document).ready(function(){
	
	'use strict';
	
	// set first section number
	var currentSection = 1;
	
	// next button
	$('.next, .nextpageone').click(function() {
		
		// transition current section out
		$('section:nth-child(' + currentSection + ')').fadeOut(3000);
		
		// set next section
		currentSection++;
		
		// transition next section in
		animateScreen(currentSection);
		
		// stops the video
		$("#vidz1").get(0).pause();
		$("#vidz2").get(0).pause();
		$("#vidz3").get(0).pause();
		$("#vidz4").get(0).pause();
		// rewinds the video
		$("#vidz1").get(0).currentTime = 0;
		$("#vidz2").get(0).currentTime = 0;
		$("#vidz3").get(0).currentTime = 0;
		$("#vidz4").get(0).currentTime = 0;
		
		
	});
	
	$('.prev').click(function() {
		location.reload(); 
		// reloads the page
	});
	
	// animate current screen/section content
	function animateScreen(cs)
	{
		// create current section selector
		var sec = 'section:nth-child(' + cs + ')';
		
		// show screen/section
		$(sec).fadeIn(3000);
		
		// rewind and start video
		$(sec + ' #video' + cs)[0].currentTime = 0;
		$(sec + ' #video' + cs)[0].play();
			
		// animate maintitle
		$(sec + ' #maintitle' + cs)
			.css({opacity:0})
			.delay(500)
			.animate({opacity:1}, 1000, 'linear');
        
        // animate bodycopy
		$(sec + ' #bodycopy' + cs)
			.css({opacity:0})
			.delay(1800)
			.animate({opacity:1}, 1000, 'linear');
			
		// animate other
		$(sec + ' #other' + cs)
			.css({opacity:0})
			.delay(2000)
			.animate({opacity:1}, 3000, 'linear');	
	}
	
	// load first screen 
	animateScreen(currentSection);
	
});
// 50 seconds of inactivity
var transitionToFirstSection = function() {
    window.location.reload(); // Reload the page
};

// timer 
var timer = setTimeout(transitionToFirstSection, 180000);

// reset the timer 
var resetTimer = function() {
    clearTimeout(timer); // Clear 
    timer = setTimeout(transitionToFirstSection, 180000); 
};

// reset timer 
$(document).on('click', function() {
    resetTimer();
});