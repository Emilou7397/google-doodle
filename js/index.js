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
  
  $('#y').toggleClass('moving');
  $('.x').toggleClass('moving');
  $('.leaf').toggleClass('leaf_spin');
  $('.leaf').toggleClass('is_moving');
  
  setTimeout(	function()	{
    $('.leaf').css('z-index', '1');
	}, 1000);
  
  setTimeout(	function()	{
    $('.leaf').toggleClass('spin_paused');
	}, 3500);
  
  setTimeout(	function()	{
    $('.leaf').toggleClass('spin_paused');
	}, 4500);
	
	setTimeout(	function()	{
    $('.leaf').toggleClass('leaf_spin');
    $('.leaf').css('z-index', '-1');
    $('.leaf').toggleClass('is_moving');
	}, 10000);
  
  setTimeout(	function()	{
    $('#y').toggleClass('moving');
    $('.x').toggleClass('moving');
	}, 11000);
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