//slider
$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    slidesToShow: 2.5,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 50000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

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

$(".modal a").on("click", function () {
  $(this).closest(".modal").fadeOut();
});

// changeImages
$(document).ready(function () {
  var hoverImages = {
    hokkaido: "./images/top/region-b-img.png",
    tohoku: "./images/top/region-b-img-2.png",
    kanto: "./images/top/region-b-img-3.png",
    tokai: "./images/top/region-b-img-4.png",
    kinki: "./images/top/region-b-img-5.png",
    tyugoku: "./images/top/region-b-img-6.png",
    kyusyu: "./images/top/region-b-img-7.png",
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

// buttonHoverChangeImage
$(
  ".about-area > .container > .flex > div:nth-child(2) > div:nth-of-type(2) a, .product-area > .container > .flex > div:nth-child(2) > div:nth-of-type(2) a, .curriculum-area > .container > .title-wrapper > div:nth-child(2) > a, .search-area > .container > .text-wrapper > div > a, .franchise-area > .container > .flex > div:first-child > div > a"
).hover(
  function () {
    $(this).find("img").attr("src", "./images/top/arrow-w-img.png");
  },
  function () {
    $(this).find("img").attr("src", "./images/top/arrow-img.png");
  }
);

// curriculumAreaImageAnimation
$(document).ready(function () {
  $(".curriculum-area > .container > .flex > div:nth-child(2) > a.card").hover(
    function () {
      var imgPath;
      switch ($(this).index()) {
        case 0:
          imgPath = "./images/top/curriculum-img.png";
          break;
        case 1:
          imgPath = "./images/top/curriculum-img-2.png";
          break;
        case 2:
          imgPath = "./images/top/curriculum-img-3.png";
          break;
        case 3:
          imgPath = "./images/top/curriculum-img-4.png";
          break;
        case 4:
          imgPath = "./images/top/curriculum-img-5.png";
          break;
        default:
          imgPath = "./images/top/curriculum-img.png";
      }
      $('img[alt="curriculum-img"]').attr("src", imgPath);
    },
    function () {
      $('img[alt="curriculum-img"]').attr(
        "src",
        "./images/top/curriculum-img.png"
      );
    }
  );
});
