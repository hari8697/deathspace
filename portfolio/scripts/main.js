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
var portTextAll = $(".portfolio--item .text-wrapper");
var portItemsAll = $(".portfolio--item img");

// particlesJS.load("particles-js", "../res/particlesjs-config.json");

let animatedImages = false;

particlesJS.load("particles-js", "../res/stars.json");
if (vh > vw) {
  tl.set(portItems, {
    opacity: 0,
    y: 70,
  });
} else {
  tl.set(portItemsAll, {
    opacity: 0,
    y: 70,
  });
}
$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  if (vh > vw) {
    if (!imgLoaded) {
      imgLoaded = false;
      $("html, body").css({
        overflow: "hidden",
        height: "100%",
        "pointer-events": "none",
      });
    }
    animImages = function () {
      if (imgLoaded && !animatedImages) {
        tl.staggerTo(
          portItems,
          1,
          {
            y: 0,
            opacity: 1,
          },
          0.25
        );

        tl.staggerFromTo(
          portText,
          1,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
          0.35,
          0.75
        );
        animatedImages = true;
        setTimeout(() => {
          $("html, body").css({
            overflow: "auto",
            height: "auto",
            "pointer-events": "all",
          });
        }, 1800);
      }
    };

    checkImg = function () {
      portImages.each(function () {
        if ($(this)[0].complete && $(this)[0].naturalHeight !== 0) {
          imgLoaded = true;
        } else {
          imgLoaded = false;
        }
      });
    };

    var update = setInterval(animImages, 200);
    var update2 = setInterval(checkImg, 100);

    var image4 = new ImageObject(4);
    var image5 = new ImageObject(5);
    var image6 = new ImageObject(6);

    controller.addScene([image4.Scene, image5.Scene, image6.Scene]);
  } else {
    // tl.set(portTextAll, {
    //   opacity: 0
    // });

    var imageTl = new TimelineMax();
    var imageTl2 = new TimelineMax();
    var hoverbool = false;
    // imageTl2.set(portTextAll, {
    //   opacity: 0
    // });
    // imageTl2.set(portItemsAll, {
    //   opacity: 0.8
    // });

    animatedImages = false;

    // imageTl.set(portItemsAll, {
    //   opacity: 0,
    //   y: 70,
    // });

    if (!imgLoaded) {
      $("html, body").css({
        overflow: "hidden",
        height: "100%",
        "pointer-events": "none",
      });
    }

    // imageTl2.set(portItemsAll, {
    //   opacity: 0
    // });
    animImages = function () {
      if (imgLoaded && !animatedImages) {
        imageTl2.staggerTo(
          portItemsAll,
          0.8,
          {
            opacity: 1,
            y: 0,
          },
          0.1
        );
        hoverbool = true;

        animatedImages = true;
        setTimeout(() => {
          $("html, body").css({
            overflow: "auto",
            height: "auto",
            "pointer-events": "all",
          });
        }, 1200);
      }
    };

    checkImg = function () {
      portItemsAll.each(function () {
        if ($(this)[0].complete && $(this)[0].naturalHeight !== 0) {
          imgLoaded = true;
        } else {
          imgLoaded = false;
        }
      });
    };

    var update = setInterval(animImages, 200);
    var update2 = setInterval(checkImg, 100);

    portItemsAll.mouseenter(function () {
      if (imgLoaded && animatedImages && hoverbool) {
        imageTl.clear();
        imageTl.progress(0);
        imageTl.play();

        let self = $(this).parent();

        imageTl.to(self, 0.2, {
          opacity: 1,
          ease: Power1.easeInOut,
        });

        imageTl.staggerFromTo(
          self.children(".text-wrapper"),
          0.35,
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
          },
          0.15,
          0
        );
      }
    });

    portItemsAll.mouseleave(function () {
      let self = $(this).parent();

      imageTl.reverse();
      imageTl.progress(0);

      // imageTl2.set(portTextAll, {
      //   opacity: 0
      // });
      // imageTl2.set(portItemsAll, {
      //   opacity: 0.8
      // });
    });
  }

  var animFooter = new TimelineMax();

  if (vh > vw) {
    animFooter
      .from(footer1, 0.3, {
        y: "40",
        opacity: "0",
      })
      .staggerFrom(
        footer2,
        0.75,
        {
          y: "40",
          opacity: "0",
        },
        0.25,
        "-=0.05"
      )
      .staggerFrom(
        footer3,
        1,
        {
          y: "40",
          opacity: "0",
        },
        0.5,
        0.3
      )
      .from(
        footer4,
        0.5,
        {
          opacity: "0",
        },
        "-=0.2"
      );
    var footerScene = new ScrollMagic.Scene({
      triggerElement: ".footer",
      triggerHook: vh,
      offset: vh * 0.1,
      reverse: false,
    }).setTween(animFooter);
  } else {
    animFooter
      .from(footer1, 0.3, {
        y: "40",
        opacity: "0",
      })
      .staggerFrom(
        footer2,
        0.6,
        {
          y: "40",
          opacity: "0",
        },
        0.2,
        0.25
      )
      .staggerFrom(
        footer3,
        0.6,
        {
          y: "40",
          opacity: "0",
        },
        0.3,
        0.25
      )
      .from(
        footer4,
        0.5,
        {
          opacity: "0",
        },
        0.7
      );
    var footerScene = new ScrollMagic.Scene({
      triggerElement: ".footer",
      triggerHook: vh,
      offset: "10%",
      reverse: false,
    }).setTween(animFooter);
  }

  var titleAnim = new TimelineMax();
  if (vh > vw) {
    titleAnim.to(title, 5, {
      y: "1400px",
    });

    var titleScene = new ScrollMagic.Scene({
      triggerElement: "body" - 20,
      triggerHook: "0",
      duration: 1400,
    }).setTween(titleAnim);
  } else {
    titleAnim.to(title, 5, {
      ease: Power4.easeOut,
      y: "520",
    });

    var titleScene = new ScrollMagic.Scene({
      triggerElement: "body" - 20,
      triggerHook: "0",
      duration: vh,
    }).setTween(titleAnim);
  }
  controller.addScene([titleScene, footerScene]);
});

function ImageObject(i) {
  this.tl = new TimelineMax();
  this.tl
    .fromTo(
      $(`.portfolio--item:nth-child(${i})`),
      0.8,
      {
        opacity: 0,
        y: 70,
      },
      {
        opacity: 1,
        y: 0,
      }
    )
    .fromTo(
      $(`.portfolio--item:nth-child(${i}) .text-wrapper`),
      0.8,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
      }
    );
  this.Scene = new ScrollMagic.Scene({
    triggerElement: `.portfolio--item:nth-child(${i})`,
    triggerHook: 1,
  }).setTween(this.tl);
}
