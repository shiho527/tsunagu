// mainvisual　画像を動かす
$(function () {
  const images = [
    "img/mainvisual1.JPG",
    "img/mainvisual2.jpg",
    "img/mainvisual3.JPG",
  ];

  let current = 0;
  const hero = $(".hero");
  const fadeDiv = $(".fade-bg");

  // 最初の画像をセット
  hero.css("background-image", `url(${images[current]})`);

  function changeBackground() {
    // 次の画像インデックスを取得
    const next = (current + 1) % images.length;

    // フェード用divに次の画像をセットしてフェードイン
    fadeDiv
      .css("background-image", `url(${images[next]})`)
      .fadeIn(1000, function () {
        // フェード完了後にheroの背景を切り替え、フェード用divを非表示に
        hero.css("background-image", `url(${images[next]})`);
        fadeDiv.hide();
        current = next; // 現在の画像インデックスを更新
      });
  }

  // 5秒ごとに自動で背景切り替え
  setInterval(changeBackground, 5000);
});

// voice 卒業生の声














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
    slidesToScroll: 1      // ← 1回に1枚ずつ流れる
});

// 卒業生の声 スライダー
$('.graduate-achievements-slider').slick({
  autoplay: false,
  arrows: true,
  prevArrow: '<button class="graduate-achievements-slide-arrow prev-arrow">◀</button>',
  nextArrow: '<button class="graduate-achievements-slide-arrow next-arrow">▶</button>',
  slidesToShow: 3
});

});