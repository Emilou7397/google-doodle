console.log("OK");

// Functions
var bounce = function bounce() {
  $(".lid").addClass("bounce");

  setTimeout(function() {
    $(".lid").removeClass("bounce");
  }, 1000);
};

var time = function time() {
  $("#light").css("top", "-20px");
  setTimeout(function() {
    $("#light").css("top", "-50px");
  }, 500);

  $(".shadow").toggleClass("none");
  $(".sill").toggleClass("sill_night");
  $("body").toggleClass("night");
  $("#stage").toggleClass("night");
  $(".block-top").toggleClass("block-night");
  $(".block-bottom").toggleClass("block-night");

  $(".blue_highlight").toggleClass("blue_reg");
  $(".blue_dark").toggleClass("blue_reg");
  $(".blue_v_dark").toggleClass("blue_reg");
  $(".tail").toggleClass("blue_tail");

  $(".red_highlight").toggleClass("red_reg");
  $(".red_dark").toggleClass("red_reg");
  $(".red_v_dark").toggleClass("red_reg");

  $(".yellow_highlight").toggleClass("yellow_dark");
  $(".yellow_v_dark").toggleClass("yellow_dark");
  $(".body").toggleClass("yellow_reg");
  $(".body").toggleClass("yellow_dark");
  $(".light").toggleClass("yellow_reg");

  $(".green_highlight").toggleClass("green_reg");
  $(".green_dark").toggleClass("green_reg");
  $(".green_v_dark").toggleClass("green_reg");

  $(".city_day").toggleClass("city_off");
  $(".lights").toggleClass("lights_on");

  $(".steam").toggleClass("none");
  $(".steam2").toggleClass("none");

  $(".window_dark").toggleClass("window_dark_night");
  $(".window_light").toggleClass("window_light_night");
  $(".window_glass").toggleClass("window_glass_night");
};

var windowToggle = function windowToggle() {
  $("#window_front").toggleClass("window_open");
};

$("#teapot").mouseenter(bounce);

$("#light").click(time);

$("#window_front").click(windowToggle);