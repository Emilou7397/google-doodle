console.log('OK');

// Teapot lid bounce

var bounce = function() {
  $(".lid").addClass("bounce");

  setTimeout(function() {
    $(".lid").removeClass("bounce");
  }, 1000);
};
var bounce_shading = function() {
  $(".lid_shading").addClass("bounce");

  setTimeout(function() {
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
  $('.top').toggleClass('night_background');
}

// Window open function

var windowToggle = function()  {
  $('.window_front').toggleClass('window_open');
}

$(".teapot").mouseenter(bounce);
$(".teapot_shading").mouseenter(bounce_shading);

$("#light_pull").click(time);

$(".window-clickable").click(windowToggle);