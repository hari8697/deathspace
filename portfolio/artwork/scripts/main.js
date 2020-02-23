particlesJS.load("particles-js", "../../../res/particlesjs-config.json");
new window.JustValidate(".s6 .form", {
  colorWrong: "#FFA602"
  // colorWrong: "#d0ff00"
});

var vw = $(window).width();
var vh = $(window).height();
var footer1 = $(".footer .follow p");
var footer2 = $(".footer .social--links");
var footer3 = $(".footer .email *");
var footer4 = $(".footer > p");

var controller = new ScrollMagic.Controller();
var animFooter = new TimelineMax();
animFooter
  .from(footer1, 0.3, {
    y: "40",
    opacity: "0"
  })
  .staggerFrom(
    footer2,
    1,
    {
      y: "40",
      opacity: "0"
    },
    0.3,
    0.25
  )
  .staggerFrom(
    footer3,
    0.6,
    {
      y: "40",
      opacity: "0"
    },
    0.3,
    1.2
  )
  .from(
    footer4,
    0.5,
    {
      opacity: "0"
    },
    2
  );
if (vh > 600) {
  var footerScene = new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: vh,
    duration: "18%",
    offset: "0"
  }).setTween(animFooter);
} else {
  var footerScene = new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: vh,
    duration: "25%",
    offset: "10%"
  }).setTween(animFooter);
}

controller.addScene([footerScene]);
