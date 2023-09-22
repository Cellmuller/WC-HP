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
// buttonHoverChangeImage
$(
  ".summary-area > .container > .contents > .flex > div:nth-child(2) > div > a"
).hover(
  function () {
    $(this).find("img").attr("src", "../../../images/top/arrow-w-img.png");
  },
  function () {
    $(this).find("img").attr("src", "../../../images/top/arrow-img.png");
  }
);
// slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    arrows: false,
    type: "loop",
  }).mount();
});
