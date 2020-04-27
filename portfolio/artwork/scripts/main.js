particlesJS.load("particles2-js", "../../../res/particlesjs-config.json");

particlesJS.load("particles-js", "../../../res/stars.json");

new window.JustValidate(".s6 .form", {
  colorWrong: "#FFA602"
  // colorWrong: "#d0ff00"
});

var vw = $(window).width();
var vh = $(window).height();
var portImagesCheck = $(".images img:nth-child(1)");
var portImages = $(".images img:nth-child(-n+2)");
var portImagesAll = $(".images img");
var portImagesUnloaded = $(".images img:nth-child(n+3)");
var footer1 = $(".footer .follow p");
var footer2 = $(".footer .social--links");
var footer3 = $(".footer .email *");
var footer4 = $(".footer > p");
var imgLoaded = false;
let animatedImages = false;
var tl = new TimelineMax();

var controller = new ScrollMagic.Controller();
var animFooter = new TimelineMax();

tl.set(portImages, {
  y: 70
});
tl.set(portImagesAll, {
  opacity: 0,
  y: 70
});
if (vh > vw) {
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

      setTimeout(() => {
        animatedImages = true;
      }, 800);
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

  var image3 = new ImageObject(3);
  var image4 = new ImageObject(4);
  var image5 = new ImageObject(5);
  var image6 = new ImageObject(6);

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

  var update3 = setInterval(function() {
    if (animatedImages) {
      controller.addScene([
        image3.Scene,
        image4.Scene,
        image5.Scene,
        image6.Scene
      ]);
    }
  }, 100);
} else {
  $(document).ready(function() {
    $(window).scrollTop(0);
  });
  if (!imgLoaded) {
    $("html, body").css({
      overflow: "hidden",
      height: "100%",
      "pointer-events": "none"
    });
  }

  animImages = function() {
    if (imgLoaded && !animatedImages) {
      // portImagesAll.css({ visibility: "visible" });
      tl.staggerTo(
        portImagesAll,
        1,
        {
          opacity: 1,
          y: 0
        },
        0.25
      );
      animatedImages = true;
      setTimeout(() => {
        $("html, body").css({
          overflow: "auto",
          height: "auto",
          "pointer-events": "all"
        });
      }, 500);
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

  animFooter
    .from(footer1, 0.3, {
      y: "40",
      opacity: "0"
    })
    .staggerFrom(
      footer2,
      0.6,
      {
        y: "40",
        opacity: "0"
      },
      0.2,
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
      0.25
    )
    .from(
      footer4,
      0.5,
      {
        opacity: "0"
      },
      0.7
    );
  var footerScene = new ScrollMagic.Scene({
    triggerElement: ".footer",
    triggerHook: vh,
    offset: vh * 0.1,
    reverse: true
  }).setTween(animFooter);
}

controller.addScene([footerScene]);

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
