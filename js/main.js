// header　ハンバーガーメニュー
$(function() {
  // ハンバーガークリックでメニュー開閉
  $(".hamburger").on("click", function() {
    $("body").toggleClass("open"); // CSSの .open に依存
  });

  // マスククリックでメニュー閉じる
  $("#mask").on("click", function() {
    $("body").removeClass("open");
  });

  // メニューのリンククリックでも閉じる場合
  $(".nav-menu a").on("click", function() {
    $("body").removeClass("open");
  });
});



$(function () {
  var $window = $(window);
  var $hero = $(".hero");
  var $bg1 = $(".bg1");
  var $bg2 = $(".bg2");
  var $content = $(".hero-content");
  var $film = $(".hero-film");

  var images;

  // 初期化・画面幅で画像を切り替え
  function setImages() {
    if ($(window).width() <= 768) {
      // スマホ用画像
      images = [
        "img/mainvisual1-sp.png",
        "img/mainvisual2-sp.png",
        "img/mainvisual3-sp.png",
      ];
    } else {
      // PC用画像
      images = [
        "img/mainvisual1.png",
        "img/mainvisual2.png",
        "img/mainvisual3.png",
      ];
    }
  }

  setImages(); // 初回設定

  var current = 0;
  var showing = 0; // 0 = bg1, 1 = bg2

  // 初期画像
  $bg1.css("background-image", `url(${images[0]})`);

  // 背景切替（2枚交互フェード）
  setInterval(function () {
    current = (current + 1) % images.length;

    if (showing === 0) {
      $bg2.css("background-image", `url(${images[current]})`);
      $bg1.css("opacity", 0);
      $bg2.css("opacity", 1);
      showing = 1;
    } else {
      $bg1.css("background-image", `url(${images[current]})`);
      $bg2.css("opacity", 0);
      $bg1.css("opacity", 1);
      showing = 0;
    }

    // 背景切替時にフィルム光を少し動かす
    $film.css("transform", "translate(30px, 30px)");
    setTimeout(function () {
      $film.css("transform", "translate(0, 0)");
    }, 800);
  }, 5000);

  // リサイズ時に画像配列を再設定
  $window.on("resize", function () {
    setImages();
    // 必要なら表示中の背景も更新
    $bg1.css("background-image", `url(${images[current]})`);
    $bg2.css("background-image", `url(${images[current]})`);
  });

  // スクロール連動（既存のコードそのまま）
  $window.on("scroll", function () {
    var scrollTop = $window.scrollTop();
    var heroHeight = $hero.outerHeight();
    var opacity = 1 - scrollTop / heroHeight;
    if (opacity < 0) opacity = 0;

    $bg1.css("opacity", showing === 0 ? 1 * opacity : 0);
    $bg2.css("opacity", showing === 1 ? 1 * opacity : 0);

    var translateY = scrollTop * 0.3;
    $content.css({
      transform: "translate(-50%, calc(-50% + " + translateY + "px))",
      opacity: opacity,
    });

    var filmX = scrollTop * 0.05;
    var filmY = scrollTop * 0.08;
    $film.css("transform", `translate(${filmX}px, ${filmY}px)`);
  });
});



// voice 卒業生の声














// our supportより下 背景ロゴ
$(window).on('scroll', function () {
  const supportTop = $('#support').offset().top;  // support の位置
  const scroll = $(window).scrollTop();           // 現在のスクロール量

  if (scroll >= supportTop) {
    $('.bg-logo p').addClass('show');   // support が画面トップ以上なら表示
  } else {
    $('.bg-logo p').removeClass('show'); // それより上なら消す
  }
});

// our support 詳しく見るボタン
$(function () {
  $('.detail-btn').click(function () {
    $(this).next('.detail-text').slideToggle(300);

    // ボタンの文言を切り替え（オプション）
    if ($(this).text() === "詳しく見る") {
      $(this).text("閉じる");
    } else {
      $(this).text("詳しく見る");
    }
  });

// our support スライダー
  $('.support-slider').slick({
    autoplay: true,
    autoplaySpeed: 2500,   // ← 自動再生の速さ（1.5秒）
    speed: 500,            // ← スライドの切り替え速度（0.5秒）
    dots: true,
    arrows: true,
    slidesToShow: 3,       // ← 1画面に3枚
    slidesToScroll: 1,      // ← 1回に1枚ずつ流れる

    responsive: [
    {
      breakpoint: 768,      // ← スマホ幅（768px以下）
      settings: {
        slidesToShow: 1,    // ← 1枚表示に変更！
        arrows: false,      // ← ボタン邪魔なら消す（任意）
      }
    }
  ]
});

// 卒業生の実績 スライダー
  $('.graduate-achievements-slider').slick({
    autoplay: false,
    arrows: true,
    prevArrow: '<button class="graduate-achievements-slide-arrow prev-arrow">◀</button>',
    nextArrow: '<button class="graduate-achievements-slide-arrow next-arrow">▶</button>',
    slidesToShow: 3,

    responsive: [
    {
      breakpoint: 768,   // ← 768px以下
      settings: {
        slidesToShow: 1, // ← 1枚だけ表示
      }
    }
  ]
});

// 質問 アコーディオン
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.closest(".faq").classList.toggle("active");
  });
});

// トップページに戻るボタン 必ずmain.最後に配置
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 800) {
    $('.button_top').addClass('show');
  } else {
    $('.button_top').removeClass('show');
  }
});

$('.button_top').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600); // ← 600msでふわっと戻る
});


});