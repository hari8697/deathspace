particlesJS.load("particles-js", "../../../res/particlesjs-config.json");
new window.JustValidate(".s6 .form", {
  colorWrong: "#FFA602"
  // colorWrong: "#d0ff00"
});

var vw = $(window).width();
var vh = $(window).height();
var portImagesCheck = $(".images img:nth-child(1)");
var portImages = $(".images img:nth-child(-n+3)");
var portImagesUnloaded = $(".images img:nth-child(n+4)");
var footer1 = $(".footer .follow p");
var footer2 = $(".footer .social--links");
var footer3 = $(".footer .email *");
var footer4 = $(".footer > p");
var imgLoaded = false;
let animatedImages = false;
var tl = new TimelineMax();

tl.set(portImages, {
  y: 70
});

animImages = function() {
  if (imgLoaded && !animatedImages) {
    tl.staggerTo(
      portImages,
      0.8,
      {
        opacity: 1,
        y: 0
      },
      0.35
    );
    animatedImages = true;
  }
};

checkImg = function() {
  portImagesCheck.each(function() {
    if ($(this)[0].complete && $(this)[0].naturalHeight !== 0) {
      imgLoaded = true;
    } else {
      imgLoaded = false;
    }
  });
};

var update = setInterval(animImages, 200);
var update2 = setInterval(checkImg, 100);

var controller = new ScrollMagic.Controller();

var image4 = new ImageObject(4);
var image5 = new ImageObject(5);
var image6 = new ImageObject(6);

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

controller.addScene([image4.Scene, image5.Scene, image6.Scene, footerScene]);

function ImageObject(i) {
  this.tl = new TimelineMax();
  this.tl.fromTo(
    $(`.images img:nth-child(${i})`),
    0.8,
    {
      opacity: 0,
      y: 70
    },
    {
      opacity: 1,
      y: 0
    }
  );
  // var x =
  console.log($(`.images img:nth-child(${i - 1})`).height());
  this.Scene = new ScrollMagic.Scene({
    triggerElement: `.images img:nth-child(${i - 1})`,
    offset: 300,
    triggerHook: 1
  }).setTween(this.tl);
}
