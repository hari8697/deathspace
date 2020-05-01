var x = localStorage.getItem("key");
var imagesPanel = $(".images");
var i1 = $(".images img:nth-child(1)");
var i2 = $(".images img:nth-child(2)");
var i3 = $(".images img:nth-child(3)");
var i4 = $(".images img:nth-child(4)");
var i5 = $(".images img:nth-child(5)");
var i6 = $(".images img:nth-child(6)");
var j1 = $(".swiper-slide:nth-child(1) img");
var j2 = $(".swiper-slide:nth-child(2) img");
var j3 = $(".swiper-slide:nth-child(3) img");
var j4 = $(".swiper-slide:nth-child(4) img");
var j5 = $(".swiper-slide:nth-child(5) img");
var j6 = $(".swiper-slide:nth-child(6) img");
var k1 = $(".swiper-slide:nth-child(1)");
var k2 = $(".swiper-slide:nth-child(2)");
var k3 = $(".swiper-slide:nth-child(3)");
var k4 = $(".swiper-slide:nth-child(4)");
var k5 = $(".swiper-slide:nth-child(5)");
var k6 = $(".swiper-slide:nth-child(6)");
var h1 = $(".text-wrapper h1");
var h3 = $(".text-wrapper h3");
var h4 = $(".text-wrapper h4");
var p = $(".text-wrapper p");

if (x == 1) {
  setImages(2);
}
if (x == 2) {
  if (vh < vw) {
    imagesPanel.css("margin-bottom", "130px");
  }
  h1.text("Nike Case Study");
  h3.text("Landing Page");
  h4.text("2019");
  setImages(1);
  // setEmpty(i2, k2);
  setEmpty(i3, k3);
  setEmpty(i4, k4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);

  imagesPanel.css({
    "grid-template-rows": "repeat(1, minmax(240px, 26vw))",
    "grid-template-columns": "minmax(300px, 450px) minmax(500px, 800px)",
  });
}
if (x == 3) {
  if (vh < vw) {
    imagesPanel.css("margin-bottom", "130px");
  }
  h1.text("McLaren P1");
  h3.text("Landing Page");
  h4.text("2020");
  setImages(3);
  setEmpty(i3, k3);
  setEmpty(i4, k4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  imagesPanel.css({
    // "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    // "grid-template-columns": "minmax(500px, 770px)"
    "grid-template-rows": "repeat(1, minmax(240px, 26vw))",
    "grid-template-columns": "minmax(300px, 450px) minmax(500px, 900px)",
  });
}
if (x == 4) {
  setImagespng(4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  h1.text("Netflix Anime");
  h3.text("Landing Page");
  h4.text("2020");
  imagesPanel.css({
    // "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    // "grid-template-columns": "minmax(500px, 770px)"
    "grid-template-rows": "repeat(2, minmax(240px, 20vw))",
    "grid-template-columns": "minmax(250px, 350px) minmax(300px, 600px)",
  });
}
if (x == 5) {
  setImagespng(5);
  setEmpty(i3, k3);
  setEmpty(i4, k4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  h1.text("Jellyy Diver's Club");
  h3.text("Landing Page");
  h4.text("2020");
  imagesPanel.css({
    // "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    // "grid-template-columns": "minmax(500px, 770px)"
    "grid-template-rows": "300px 500px",
    "grid-template-columns": "300px 500px",
  });
  i1.css({ "grid-row": "1/2", "grid-column": "1/2", "margin-bottom": 0 });
  i2.css({
    "grid-row": "1/3",
    "grid-column": "2/3",
    height: "100%",
    "margin-bottom": 0,
  });
}
if (x == 6) {
  setImagespng(6);
  if (vh < vw) {
    imagesPanel.css("margin-bottom", "130px");
  }
  h1.text("Switzerland Travel");
  h3.text("Landing Page");
  h4.text("2020");
  setEmpty(i3, k3);
  setEmpty(i4, k4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  imagesPanel.css({
    // "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    // "grid-template-columns": "minmax(500px, 770px)"
    "grid-template-rows": "repeat(1, minmax(240px, 26vw))",
    "grid-template-columns": "minmax(300px, 450px) minmax(500px, 850px)",
  });
}

function setImages(i) {
  i1.attr("src", `./img/${i}/1.jpg`);
  i2.attr("src", `./img/${i}/2.jpg`);
  i3.attr("src", `./img/${i}/3.jpg`);
  i4.attr("src", `./img/${i}/4.jpg`);
  i5.attr("src", `./img/${i}/5.jpg`);
  i6.attr("src", `./img/${i}/6.jpg`);
  j1.attr("src", `./img/${i}/1.jpg`);
  j2.attr("src", `./img/${i}/2.jpg`);
  j3.attr("src", `./img/${i}/3.jpg`);
  j4.attr("src", `./img/${i}/4.jpg`);
  j5.attr("src", `./img/${i}/5.jpg`);
  j6.attr("src", `./img/${i}/6.jpg`);
}

function setImagespng(i) {
  i1.attr("src", `./img/${i}/1.png`);
  i2.attr("src", `./img/${i}/2.png`);
  i3.attr("src", `./img/${i}/3.png`);
  i4.attr("src", `./img/${i}/4.png`);
  i5.attr("src", `./img/${i}/5.png`);
  i6.attr("src", `./img/${i}/6.png`);
  j1.attr("src", `./img/${i}/1.png`);
  j2.attr("src", `./img/${i}/2.png`);
  j3.attr("src", `./img/${i}/3.png`);
  j4.attr("src", `./img/${i}/4.png`);
  j5.attr("src", `./img/${i}/5.png`);
  j6.attr("src", `./img/${i}/6.png`);
}
function setEmpty(i, k) {
  i.attr("src", "");
  i.css("display", "none");
  k.remove();
}
