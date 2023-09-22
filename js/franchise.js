// accordion
$(function () {
  $(".js-accordion-title").on("click", function () {
    $(".js-accordion-title").not(this).removeClass("open");
    $(".js-accordion-title").not(this).next().slideUp(200);
    $(this).toggleClass("open");
    $(this).next().slideToggle(200);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    arrows: false,
    type: "loop",
  }).mount();
});

//sidebar
$(document).ready(function () {
  $('a[href^="#"]').click(function (event) {
    event.preventDefault();

    var target = $(this.hash);
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});
