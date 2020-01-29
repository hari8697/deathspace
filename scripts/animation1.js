var vh = $(window).height();
var vw = $(window).width();
var scrollArrow = $(".scrollArrow");
var header = $(".header");
var logo = $(".logo-top");
var s2Texth1 = $(".s2 .text-wrapper h1");
var s2Textp = $(".s2 .text-wrapper p");
var pimg1 = $(".gallery-list li:nth-child(1)");
var pimg2 = $(".gallery-list li:nth-child(2)");
var s3Texth1 = $(".s3 .text-container h1");
var s3Textp = $(".s3 .text-container p");
var s3Butt = $(".s3 .portfolio-btn");
var s4h1 = $(".s4 h1");
var s4icons = $(".s4 .container");

$(document).ready(function() {
  var animArrow = new TimelineMax({
    paused: true,
    repeat: 1000
  });

  animArrow
    .set(scrollArrow, {
      rotation: 0.01,
      x: "-50%",
      y: "-100"
    })
    .to(scrollArrow, 2, {
      rotation: 0.01,
      opacity: 1,
      y: "-80",
      ease: Expo.easeInOut,
      delay: "1"
    })
    .to(scrollArrow, 1, {
      opacity: 0,
      y: "-60"
    })
    .reverse();

  function updateAnim(anim) {
    if (anim.reversed()) {
      anim.reversed(!anim.reversed());
    } else {
      anim.play();
    }
  }

  var timer = setInterval(updateAnim(animArrow), 16);

  function disableScroll() {
    $("html, body").css({
      overflow: "hidden",
      height: "100%",
      "pointer-events": "none"
    });
  }

  function enableScroll() {
    $("html, body").css({
      overflow: "auto",
      height: "auto",
      "pointer-events": "all"
    });
  }

  var animLanding = new TimelineMax({
    onStart: disableScroll,
    onComplete: enableScroll
  });

  var largeLogoSize = 2;
  var medLogoSize = 1;
  var smallLogoSize = 0.6;

  if (vw > 500) {
    largeLogoSize = 2;
    medLogoSize = 1;
    smallLogoSize = 0.6;
  } else {
    largeLogoSize = 1.2;
    medLogoSize = 0.7;
    smallLogoSize = 0.4;
  }
  if ($(window).scrollTop() < 10) {
    animLanding
      .set(logo, {
        scale: largeLogoSize,
        y: "-50%",
        opacity: 0
      })
      .set(logo, {
        scale: largeLogoSize,
        y: "50vh",
        opacity: 0
      })
      .to(logo, 2, {
        scale: medLogoSize,
        opacity: 1
      });
  } else {
    animLanding
      .set(logo, {
        scale: medLogoSize,
        y: "-50%",
        opacity: 1
      })
      .set(logo, {
        y: "50vh",
        opacity: 1
      });
  }

  var animS3Set = new TimelineMax();

  if (vw < 768) {
    animS3Set
      .set(pimg1, {
        y: "-150%"
      })
      .set(pimg2, {
        y: "-70%"
      });
  }

  var animLogo = new TimelineMax();
  animLogo
    .set(header, {
      opacity: 0
    })
    .to(header, 3, {
      opacity: 1,
      ease: Expo.easeInOut
    })
    .fromTo(
      logo,
      2,
      {
        scale: medLogoSize,
        opacity: 1
      },
      {
        position: "fixed",
        y: "35",
        scale: smallLogoSize,
        delay: "-3"
      }
    );

  var controller = new ScrollMagic.Controller();

  var logoScene = new ScrollMagic.Scene({
    triggerElement: ".hero",
    triggerHook: "0",
    duration: vh
  }).setTween(animLogo);

  var animS2 = new TimelineMax();

  animS2
    .from(s2Texth1, 1, {
      y: "100",
      opacity: "0",
      ease: Expo.easeOut
    })
    .from(s2Textp, 1, {
      y: "100",
      opacity: "0",
      ease: Expo.easeOut,
      delay: "-0.5"
    });

  var s2Scene = new ScrollMagic.Scene({
    triggerElement: ".s1",
    triggerHook: "0",
    offset: vh / 2,
    duration: vh
  }).setTween(animS2);

  var animS3 = new TimelineMax();
  if (vw < 768) {
    animS3
      .to(pimg1, 2, {
        ease: Expo.easeInOut,
        y: "-220%"
      })
      .to(pimg2, 2, {
        ease: Expo.easeInOut,
        y: "-100%",
        delay: "-2"
      })
      .to(s2Textp, 1, {
        opacity: 0,
        delay: "-1.2"
      });
  }

  var s3Scene = new ScrollMagic.Scene({
    triggerElement: ".s2",
    triggerHook: "0",
    offset: 0,
    duration: vh
  }).setTween(animS3);

  var animS3Text = new TimelineMax();
  animS3Text
    .from(
      s3Texth1,
      1,
      {
        y: "60",
        opacity: "0"
      },
      0
    )
    .from(
      s3Textp,
      1,
      {
        y: "20",
        opacity: "0"
      },
      0.3
    )
    .from(
      s3Butt,
      0.3,
      {
        opacity: "0"
      },
      0.4
    );

  var s3SceneText = new ScrollMagic.Scene({
    triggerElement: ".s3",
    triggerHook: "0",
    offset: -vh / 4,
    duration: vh / 2
  }).setTween(animS3Text);

  var animS4 = new TimelineMax();
  if (vw < 768) {
    animS4
      .from(s4h1, 1, {
        y: "50",
        opacity: "0"
      })
      .staggerFrom(
        s4icons,
        2,
        {
          y: "100",
          opacity: "0"
        },
        0.2,
        0.2
      );
  }

  var s4Scene = new ScrollMagic.Scene({
    triggerElement: ".s3",
    triggerHook: "0",
    offset: vh * 0.2,
    duration: vh * 0.7
  }).setTween(animS4);

  controller.addScene([logoScene, s2Scene, s3Scene, s3SceneText, s4Scene]);
});
