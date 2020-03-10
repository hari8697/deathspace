var vw = $(window).width();
var vh = $(window).height();
var tl = new TimelineMax();
var logo = $(".logo-top");
var title = $(".portfolio > h1");
var s1 = $(".portfolio");
var imgLoaded = false;
var portItems = $(".portfolio--item:nth-child(-n+3)");
var portText = $(".portfolio--item:nth-child(-n+3) .text-wrapper");
var portImages = $(".portfolio--item:nth-child(-n+3) .portfolio--item--image");
var portImagesUnloaded = $(".portfolio--item--image:nth-child(n+4)");
var footer1 = $(".footer .follow p");
var footer2 = $(".footer .social--links");
var footer3 = $(".footer .email *");
var footer4 = $(".footer > p");

// particlesJS.load("particles-js", "../res/particlesjs-config.json");

let animatedImages = false;

// $(window).on("load", function() {
//   var originalUrl = window.location.href;
//   history.pushState({}, "", "portfolio");
// });

// $(window).on("beforeunload", function() {
//   window.location = originalUrl;
// });

// tl.set(portItems, {
//   y: 70,
//   opacity: 0
// });

$(document).ready(function() {
  animImages = function() {
    if (imgLoaded && !animatedImages) {
      tl.staggerFromTo(
        portItems,
        1,
        {
          y: 70,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1
        },
        0.25
      );

      tl.staggerFromTo(
        portText,
        1,
        {
          x: -20,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1
        },
        0.35,
        0.75
      );
      animatedImages = true;
    }
  };

  checkImg = function() {
    portImages.each(function() {
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

  var titleAnim = new TimelineMax();
  titleAnim.to(title, 5, {
    ease: Power4.easeOut,
    y: "520"
  });

  var titleScene = new ScrollMagic.Scene({
    triggerElement: "body" - 20,
    triggerHook: "0",
    duration: vh
  }).setTween(titleAnim);

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
      offset: "0",
      reverse: true
    }).setTween(animFooter);
  } else {
    var footerScene = new ScrollMagic.Scene({
      triggerElement: ".footer",
      triggerHook: vh,
      duration: "25%",
      offset: "10%",
      reverse: true
    }).setTween(animFooter);
  }

  controller.addScene([
    titleScene,
    image4.Scene,
    image5.Scene,
    image6.Scene,
    footerScene
  ]);
});

function ImageObject(i) {
  this.tl = new TimelineMax();
  this.tl
    .fromTo(
      $(`.portfolio--item:nth-child(${i})`),
      0.8,
      {
        opacity: 0,
        y: 70
      },
      {
        opacity: 1,
        y: 0
      }
    )
    .fromTo(
      $(`.portfolio--item:nth-child(${i}) .text-wrapper`),
      0.8,
      {
        opacity: 0,
        x: -20
      },
      {
        opacity: 1,
        x: 0
      }
    );
  this.Scene = new ScrollMagic.Scene({
    triggerElement: `.portfolio--item:nth-child(${i})`,
    triggerHook: 1
  }).setTween(this.tl);
}
