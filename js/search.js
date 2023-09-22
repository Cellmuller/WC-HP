//search/modal
$(document).ready(function () {
  function toggleModal(id) {
    const $modal = $(`#${id}`);
    if ($modal.is(":visible")) {
      $modal.fadeOut();
    } else {
      $modal.fadeIn();
    }
  }

  function closeOtherModals(exceptId) {
    $(".modal").each(function () {
      if ($(this).attr("id") !== exceptId) {
        $(this).fadeOut();
      }
    });
  }

  $(document).on("click touchstart", function (event) {
    if (!$(event.target).closest(".modal, .region, .region-sp").length) {
      $(".modal, #modal-sp-close-btn").fadeOut();
    }
  });

  var regions = [
    "hokkaido",
    "tohoku",
    "kanto",
    "tokai",
    "kinki",
    "tyugoku",
    "kyusyu",
  ];

  regions.forEach(function (region) {
    var selector = "#" + region + ", #" + region + "-sp";
    $(selector).click(function () {
      if (window.innerWidth > 1200) {
        toggleModal("modal-" + region);
      } else {
        toggleModal("modal-" + region + ", #modal-sp-close-btn");
      }
      closeOtherModals("modal-" + region);
    });
  });
});

// changeImages
$(document).ready(function () {
  var hoverImages = {
    hokkaido: "../images/top/region-b-img.png",
    tohoku: "../images/top/region-b-img-2.png",
    kanto: "../images/top/region-b-img-3.png",
    tokai: "../images/top/region-b-img-4.png",
    kinki: "../images/top/region-b-img-5.png",
    tyugoku: "../images/top/region-b-img-6.png",
    kyusyu: "../images/top/region-b-img-7.png",
  };
  $(".region")
    .hover(
      function () {
        var regionId = $(this).attr("id");
        var hoverImg = hoverImages[regionId];
        $(this).find("img").attr("src", hoverImg);
      },
      function () {
        var originalImg = $(this).find("img").attr("data-original-img");
        $(this).find("img").attr("src", originalImg);
      }
    )
    .find("img")
    .each(function () {
      var originalImg = $(this).attr("src");
      $(this).attr("data-original-img", originalImg);
    });
});
