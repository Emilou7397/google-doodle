// Teapot lid bounce

var bounce = function() {
  console.log('bounce triggered')
  $(".lid_shading").addClass("bounce");
  $(".lid").addClass("bounce");

  setTimeout(function() {
    $(".lid").removeClass("bounce");
    $(".lid_shading").removeClass("bounce");
  }, 1000);
};

// Time function

var time = function() {
  $("#light_pull").css("top", "-10px");
  setTimeout(function() {
    $("#light_pull").css("top", "-40px");
  }, 500);
  
  $('.night').toggleClass('visible');
  $('.window_light').toggleClass('window_light_night');
  $('.window_dark').toggleClass('window_dark_night');
  $('.window_glass').toggleClass('window_glass_night');
  $('body').toggleClass('night_background');
  $('.top_wall').toggleClass('night_background');
  $('.right_wall').toggleClass('night_background');
  $('.leaf_1').toggleClass('green_shad3');
  $('.leaf_2').toggleClass('leaf_lines_night');
  $('.leaf_3').toggleClass('leaf_lines_night');
  $('.ear').toggleClass('blue_shad3');
}

// Window open functions

var autoWindow = function()  {
       setTimeout(function()  {
    if (!$('.window_front').hasClass('clicked'))  {
      windowToggle();
    }
  }, 3000);
}

var windowToggle = function windowToggle()  {
  
  $('.window_front').toggleClass('window_open');
  $('.window_front').addClass('clicked');
  if ($('.window_front').hasClass('window_open') && !$('.leaf').hasClass('is_moving')) {
      anim();
  }
}

// Leaf anim

function anim()	{
	var delay = 0;
	var animDur = 1;
	var i = 1;
	var timeFunctionX = 'ease-in';
	var timeFunctionY = 'ease-out';
  
  $('.leaf').toggleClass('leaf_spin');
  $('.leaf').toggleClass('is_moving');
	
	recursion(delay, animDur, i, timeFunctionX, timeFunctionY);
}

function recursion(delay, animDur, i, timeFunctionX, timeFunctionY)	{
	
	setTimeout(	function()	{
		
	if (i == 1)	{
		
	}
	else if (i == 2)	{
		animDur = 0.5;
		timeFunctionX = 'ease-out';
		timeFunctionY = 'ease-in';
    $('.leaf').css('z-index', '1');
	}
	else if (i == 3)	{
		animDur = 0.5;
		timeFunctionX = 'ease-in';
		timeFunctionY = 'ease-out';
	}
	else if (i == 4)	{
		animDur = 0.5;
		timeFunctionX = 'ease-out';
		timeFunctionY = 'ease-in';
	}
	else if (i == 5)	{
		animDur = 1;
		timeFunctionX = 'ease-in';
		timeFunctionY = 'ease-out';
	}
	else if (i == 6)	{
		animDur = 1;
    $('.leaf').toggleClass('spin_paused');
	}
  else if (i == 7)	{
		animDur = 1;
    $('.leaf').toggleClass('spin_paused');
	}
	else if (i == 8)	{
		animDur = 1;
		timeFunctionX = 'ease-out';
		timeFunctionY = 'ease-in';
	}
	else if (i == 9)	{
		animDur = 2;
		timeFunctionX = 'ease-in';
		timeFunctionY = 'ease-out';
	}
  else if (i == 10)	{
    var windowWidth = $( window ).width();
		animDur = windowWidth * 0.002;
		timeFunctionX = 'ease-out';
		timeFunctionY = 'ease-in';
	}
  else  {
    $('.leaf').toggleClass('leaf_spin');
    $('.leaf').css('z-index', '-1');
    $('.leaf').toggleClass('is_moving');
    return;
  }
		
		$('.x').css('animation', 'movex_' + i + ' ' + animDur + 's ' + timeFunctionX + ' forwards');
		$('#y').css('animation', 'movey_' + i + ' ' + animDur + 's ' + timeFunctionY + ' forwards');
		
		delay = animDur * 1000;
		i++;
		
		if (i < 12)	{
			recursion(delay, animDur, i, timeFunctionX, timeFunctionY);
		}
	}, delay);
}

// Search function

var inputElement = document.getElementById('searchfield');
var theirInput = '';
var address = 
inputElement.addEventListener('change', function(e) {
  theirInput = e.target.value;
  address = 'https://www.google.com/search?q=' + theirInput
	window.open(address);
}); 

$(".teapot").mouseenter(bounce);

$("#light_pull").click(time);

$(".window-clickable").click(windowToggle);

$('document').ready(autoWindow);