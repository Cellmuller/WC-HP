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
