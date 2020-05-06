var x = localStorage.getItem("key");
var imagesPanel = $(".images");
var i1 = $(".images img:nth-child(1)");
var i2 = $(".images img:nth-child(2)");
var i3 = $(".images img:nth-child(3)");
var i4 = $(".images img:nth-child(4)");
var i5 = $(".images img:nth-child(5)");
var i6 = $(".images img:nth-child(6)");
var i7 = $(".images img:nth-child(7)");
var i8 = $(".images img:nth-child(8)");
var i9 = $(".images img:nth-child(9)");
var i10 = $(".images img:nth-child(10)");
var j1 = $(".swiper-slide:nth-child(1) img");
var j2 = $(".swiper-slide:nth-child(2) img");
var j3 = $(".swiper-slide:nth-child(3) img");
var j4 = $(".swiper-slide:nth-child(4) img");
var j5 = $(".swiper-slide:nth-child(5) img");
var j6 = $(".swiper-slide:nth-child(6) img");
var j7 = $(".swiper-slide:nth-child(7) img");
var j8 = $(".swiper-slide:nth-child(8) img");
var j9 = $(".swiper-slide:nth-child(9) img");
var j10 = $(".swiper-slide:nth-child(10) img");
var k1 = $(".swiper-slide:nth-child(1)");
var k2 = $(".swiper-slide:nth-child(2)");
var k3 = $(".swiper-slide:nth-child(3)");
var k4 = $(".swiper-slide:nth-child(4)");
var k5 = $(".swiper-slide:nth-child(5)");
var k6 = $(".swiper-slide:nth-child(6)");
var k7 = $(".swiper-slide:nth-child(7)");
var k8 = $(".swiper-slide:nth-child(8)");
var k9 = $(".swiper-slide:nth-child(9)");
var k10 = $(".swiper-slide:nth-child(10)");
var textwrap = $(".text-wrapper");
var h1 = $(".text-wrapper h1");
var h3 = $(".text-wrapper h3");
var h4 = $(".text-wrapper h4");
var p = $(".text-wrapper p");

if (x == 1) {
  setImages(1);
  h1.html("Counter Strike: GO <br/> Artwork");
  h3.text("Custom VFX / Edits");
  h4.text("2017");
  p.html(
    ` These are some of my earliest works from back when I had started to learn graphic design. They are made from green screen screenshots from within the game. 
    These edits kicked off my career as a designer. You can check out the full albums <a href="https://imgur.com/a/v2ov3">here</a> and <a href="https://imgur.com/a/8K3Qx">here</a>.  `
  );
}
if (x == 2) {
  if (vh < vw) {
    imagesPanel.css("margin-bottom", "130px");
  }
  h1.text("Nike Case Study");
  h3.text("Landing Page");
  h4.text("2019");
  p.html(
    ` I personally love nikes, and created this new colorway for the sb kicks. Something about this color always seems to draw me in. Looking forward to making more nike designs someday. `
  );
  setImages(2);
  // setEmpty(i2, k2);
  setEmpty(i3, k3);
  setEmpty(i4, k4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  setEmpty(i7, k7);
  setEmpty(i8, k8);
  setEmpty(i9, k9);
  setEmpty(i10, k10);

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
  p.html(
    ` 'A car that redefines cutting edge.' <br/>
    My favourite heypercar certainly deserved some ui love, and here's the result. I'll tame this beast someday. `
  );
  setImages(3);
  setEmpty(i3, k3);
  setEmpty(i4, k4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  setEmpty(i7, k7);
  setEmpty(i8, k8);
  setEmpty(i9, k9);
  setEmpty(i10, k10);
  imagesPanel.css({
    // "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    // "grid-template-columns": "minmax(500px, 770px)"
    "grid-template-rows": "repeat(1, minmax(240px, 26vw))",
    "grid-template-columns": "minmax(300px, 450px) minmax(500px, 800px)",
  });
}
if (x == 4) {
  setImagespng(4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  setEmpty(i7, k7);
  setEmpty(i8, k8);
  setEmpty(i9, k9);
  setEmpty(i10, k10);
  h1.text("Netflix Anime");
  h3.text("Landing Page");
  h4.text("2020");
  p.html(
    ` Not a weeb, but I do watch anime occasionally. I was wondering what the anime version of netflix would look like. Definitely needs more work. 
    Oh, and if you're wondering, Your Name is a wonderful movie. `
  );
  imagesPanel.css({
    // "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    // "grid-template-columns": "minmax(500px, 770px)"
    "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    "grid-template-columns": "minmax(300px, 450px) minmax(500px, 800px)",
  });
}
if (x == 5) {
  setImagespng(5);
  setEmpty(i3, k3);
  setEmpty(i4, k4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  setEmpty(i7, k7);
  setEmpty(i8, k8);
  setEmpty(i9, k9);
  setEmpty(i10, k10);
  h1.text("Jellyy Diver's Club");
  h3.text("Landing Page");
  h4.text("2020");
  p.html(
    ` I was browsing through Pinterest and came across this idea of a diver's club. It's a mesmerizing world below the ocean surface. 
    And supposedly, some species of jellyfish are immortal?! Much wow.   `
  );
  imagesPanel.css({
    // "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    // "grid-template-columns": "minmax(500px, 770px)"
    "grid-template-rows": "500px 500px",
    "grid-template-columns": "500px 600px",
  });
  if (vh < vw) {
    // textwrap.css({
    //   width: "70%",
    // });
    i2.css({
      "margin-bottom": "0",
    });
    i1.css({
      "margin-bottom": "0",
      height: "100%",
    });
  }
  i1.css({ "grid-row": "1/2", "grid-column": "1/2" });
  i2.css({
    "grid-row": "1/3",
    "grid-column": "2/3",
    height: "100%",
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
  p.html(
    ` Man, what a sight. I should try and bring this design to life one day.`
  );
  setEmpty(i3, k3);
  setEmpty(i4, k4);
  setEmpty(i5, k5);
  setEmpty(i6, k6);
  setEmpty(i7, k7);
  setEmpty(i8, k8);
  setEmpty(i9, k9);
  setEmpty(i10, k10);
  imagesPanel.css({
    // "grid-template-rows": "repeat(2, minmax(240px, 25vw))",
    // "grid-template-columns": "minmax(500px, 770px)"
    "grid-template-rows": "repeat(1, minmax(240px, 26vw))",
    "grid-template-columns": "minmax(300px, 450px) minmax(500px, 850px)",
  });
}

function setImages(i) {
  i1.attr("src", `./img/${i}/minified/1.jpg`);
  i2.attr("src", `./img/${i}/minified/2.jpg`);
  i3.attr("src", `./img/${i}/minified/3.jpg`);
  i4.attr("src", `./img/${i}/minified/4.jpg`);
  i5.attr("src", `./img/${i}/minified/5.jpg`);
  i6.attr("src", `./img/${i}/minified/6.jpg`);
  i7.attr("src", `./img/${i}/minified/7.jpg`);
  i8.attr("src", `./img/${i}/minified/8.jpg`);
  i9.attr("src", `./img/${i}/minified/9.jpg`);
  i10.attr("src", `./img/${i}/minified/10.jpg`);
  j1.attr("src", `./img/${i}/minified/1.jpg`);
  j2.attr("src", `./img/${i}/minified/2.jpg`);
  j3.attr("src", `./img/${i}/minified/3.jpg`);
  j4.attr("src", `./img/${i}/minified/4.jpg`);
  j5.attr("src", `./img/${i}/minified/5.jpg`);
  j6.attr("src", `./img/${i}/minified/6.jpg`);
  j7.attr("src", `./img/${i}/minified/7.jpg`);
  j8.attr("src", `./img/${i}/minified/8.jpg`);
  j9.attr("src", `./img/${i}/minified/9.jpg`);
  j10.attr("src", `./img/${i}/minified/10.jpg`);
}

function setImagespng(i) {
  i1.attr("src", `./img/${i}/minified/1.png`);
  i2.attr("src", `./img/${i}/minified/2.png`);
  i3.attr("src", `./img/${i}/minified/3.png`);
  i4.attr("src", `./img/${i}/minified/4.png`);
  i5.attr("src", `./img/${i}/minified/5.png`);
  i6.attr("src", `./img/${i}/minified/6.png`);
  j1.attr("src", `./img/${i}/minified/1.png`);
  j2.attr("src", `./img/${i}/minified/2.png`);
  j3.attr("src", `./img/${i}/minified/3.png`);
  j4.attr("src", `./img/${i}/minified/4.png`);
  j5.attr("src", `./img/${i}/minified/5.png`);
  j6.attr("src", `./img/${i}/minified/6.png`);
  j7.attr("src", `./img/${i}/minified/7.png`);
  j8.attr("src", `./img/${i}/minified/8.png`);
  j9.attr("src", `./img/${i}/minified/9.png`);
  j10.attr("src", `./img/${i}/minified/10.png`);
}

function setEmpty(i, k) {
  i.attr("src", "");
  i.css("display", "none");
  k.remove();
}
