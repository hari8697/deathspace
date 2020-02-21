var vw = $(window).width();
var vh = $(window).height();
var tl = new TimelineMax();
var logo = $(".logo-top");
var title = $(".portfolio > h1");
var s1 = $(".portfolio");
var imgLoaded = false;
var portItems = $(".portfolio--item:nth-child(-n+3)");
var portImages = $(".portfolio--item--image");
var portImagesUnloaded = $(".portfolio--item--image:nth-child(n+4)");
particlesJS.load("particles-js", "../res/particlesjs-config.json");

let animatedImages = false;

animImages = function() {
  if (imgLoaded && !animatedImages) {
    tl.staggerTo(
      portItems,
      0.8,
      {
        opacity: 1,
        y: 0
      },
      0.4
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

var update = setInterval(animImages, 500);
var update2 = setInterval(checkImg, 400);

$(document).ready(function() {
  tl.set(portItems, {
    opacity: 0,
    y: 70
  });

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

  controller.addScene([titleScene, image4.Scene, image5.Scene, image6.Scene]);
});

function ImageObject(i) {
  this.tl = new TimelineMax();
  this.tl.fromTo(
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
  );
  this.Scene = new ScrollMagic.Scene({
    triggerElement: `.portfolio--item:nth-child(${i})`,
    triggerHook: 1
  }).setTween(this.tl);
}
