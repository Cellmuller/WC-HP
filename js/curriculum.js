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
// ボタンホバー時の矢印変更
$(
  ".curriculum-area > .container > .contents > .flex > div:first-child > div:nth-of-type(3) > a"
).hover(
  function () {
    // ホバー時の動作
    $(this).find("img").attr("src", "../images/top/arrow-w-img.png");
  },
  function () {
    // ホバーを離れた時の動作
    $(this).find("img").attr("src", "../images/top/arrow-img.png");
  }
);
