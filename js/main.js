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
