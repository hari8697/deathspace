var x = localStorage.getItem("key");
var imagesPanel = $(".images");
var i1 = $(".images img:nth-child(1)");
var i2 = $(".images img:nth-child(2)");
var i3 = $(".images img:nth-child(3)");
var i4 = $(".images img:nth-child(4)");
var i5 = $(".images img:nth-child(5)");
var i6 = $(".images img:nth-child(6)");
var h1 = $(".text-wrapper h1");
var h3 = $(".text-wrapper h3");
var h4 = $(".text-wrapper h4");
var p = $(".text-wrapper p");

if (x == 1) {
  imagesPanel.css("margin-bottom", "30px");
  h1.text("Nike Case Study");
  h3.text("Landing Page");
  h4.text("2019");
  setImages(1);
  setEmpty(i2);
  setEmpty(i3);
  setEmpty(i4);
  setEmpty(i5);
  setEmpty(i6);
}
if (x == 2) {
  setImages(2);
}
if (x == 3) {
  setImages(3);
}
if (x == 4) {
  setImages(4);
}
if (x == 5) {
  setImages(5);
}
if (x == 6) {
  setImages(6);
}

function setImages(i) {
  i1.attr("src", `./img/${i}/1.jpg`);
  i2.attr("src", `./img/${i}/2.jpg`);
  i3.attr("src", `./img/${i}/3.jpg`);
  i4.attr("src", `./img/${i}/4.jpg`);
  i5.attr("src", `./img/${i}/5.jpg`);
  i6.attr("src", `./img/${i}/6.jpg`);
}
function setEmpty(i) {
  i.attr("src", "");
  i.css("display", "none");
}
