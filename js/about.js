//productAreaImageAnimation
document.addEventListener("DOMContentLoaded", function () {
  const productArea = document.querySelector(".product-area");
  const scrollableDiv = document.querySelector(
    ".product-area > .container > .flex > div:nth-child(2)"
  );
  productArea.addEventListener("wheel", function (e) {
    e.preventDefault();

    // downscroll
    if (e.deltaY > 0) {
      if (
        scrollableDiv.scrollTop + scrollableDiv.clientHeight <
        scrollableDiv.scrollHeight
      ) {
        scrollableDiv.scrollTop += e.deltaY;
      } else {
        window.scrollBy(0, e.deltaY);
      }
    }
    //upscroll
    else {
      if (scrollableDiv.scrollTop > 0) {
        scrollableDiv.scrollTop += e.deltaY;
      } else {
        window.scrollBy(0, e.deltaY);
      }
    }
  });
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
