"use strict";

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 800) {
    $("#navbar").addClass("shrink");
  } else {
    $("#navbar").removeClass("shrink");
  }

  console.log($(document).scrollTop());
});