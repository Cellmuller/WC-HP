document.addEventListener("DOMContentLoaded", function () {
    var $tab__link = $(".tab_link");
    var $tab_body_item = $(".tab-body_item");

    $tab_body_item.addClass("on");

    $tab__link.on("click", function (e) {
        var target = $(e.currentTarget);
        $tab__link.removeClass("on");
        target.addClass("on");
        var num = target.data("tab-body");
        $tab_body_item.removeClass("on");
        $(".tab-body_item-" + num).addClass("on");
    });
});

$(function () {
    $(".more").on("click", function () {
      $(this).toggleClass("on-click");
      $(".popup-area").slideToggle(0);
    });
  });

  $(function () {
    var container = $('.modal-container');
    var open1 = $('.modal-open');
    var close = $('.modal-close'); 

    open1.on('click', function () {
        container.addClass('active');
        return false;
    });

    close.on('click', function () {
        container.removeClass('active');
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.modal-body').length) {
        container.removeClass('active');
        }
    });
  });