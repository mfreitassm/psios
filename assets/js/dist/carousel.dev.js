"use strict";

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 86) {
    $("#navbar").addClass("shrink");
  } else {
    $("#navbar").removeClass("shrink");
  }
});