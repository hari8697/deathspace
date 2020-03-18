var vw = $(window).width();
var vh = $(window).height();
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
var s4icons = $(".s4 .icons > div:not(:last-child)");
var s5h1 = $(".s5 h1");
var s5li = $(".s5 .services-content > ul li");
var s5h3 = $(".s5 .services-content h3");
var s5items = $(".s5 .content-list-items li");
var s6text = $(".s6 .text *");
var s6form = $(".s6 .form .input, .s6 .form textarea");
var s6formbtn = $(".s6 .submit-btn");
var footer1 = $(".footer .follow p");
var footer2 = $(".footer .social--links");
var footer3 = $(".footer .email *");
var footer4 = $(".footer > p");

var checkbool = true;

var animS4, tween;
if (vw > 768) {
  $(".gallery-list li:nth-child(1) img").attr("src", "../img/port3.jpg");
}

// function update() {}
// var updateInterval = setInterval(update, 100);

$(document).ready(function() {
  var animArrow = new TimelineMax({
    paused: true,
    repeat: 1000
  });
  if (vh / vw > 1) {
    animArrow
      .set(scrollArrow, {
        rotation: 0.01,
        x: "-50%",
        y: "-200"
      })
      .to(scrollArrow, 2, {
        rotation: 0.01,
        opacity: 1,
        y: "-160",
        ease: Expo.easeInOut,
        delay: "1"
      })
      .to(scrollArrow, 1, {
        opacity: 0,
        y: "-120"
      })
      .reverse();
  } else {
    animArrow
      .set(scrollArrow, {
        rotation: 0.01,
        x: "-50%",
        y: "-120"
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
        y: "-40"
      })
      .reverse();
  }

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
    smallLogoSize = 0.5;
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
        y: "47vh",
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
  if (vh / vw > 1) {
    animS2
      .from(s2Texth1, 2, {
        y: "100",
        opacity: "0",
        ease: Expo.easeOut
      })
      .from(
        s2Textp,
        2,
        {
          opacity: "0",
          ease: Expo.easeOut
        },
        0.25
      );
  } else {
    animS2
      .from(s2Texth1, 1.2, {
        y: "100",
        opacity: "0",
        ease: Power2.easeOut
      })
      .from(
        s2Textp,
        1.5,
        {
          opacity: "0",
          ease: Power2.easeOut
        },
        "-=0.5"
      );
  }

  if (vh / vw > 1) {
    var s2Scene = new ScrollMagic.Scene({
      triggerElement: ".s2",
      triggerHook: 0,
      offset: -vh * 0.5,
      duration: vh
    }).setTween(animS2);
  } else {
    var s2Scene = new ScrollMagic.Scene({
      triggerElement: ".s2",
      triggerHook: 1,
      offset: vh * 0.6
    }).setTween(animS2);
  }

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
      });
    var s3Scene = new ScrollMagic.Scene({
      triggerElement: ".s2",
      triggerHook: "0",
      offset: 0,
      duration: vh
    }).setTween(animS3);
  } else {
    animS3
      .from(pimg1, 3, {
        ease: Power2.easeOut,
        opacity: 0,
        delay: 1,
        x: 50
      })
      .from(
        pimg2,
        2,
        {
          ease: Power2.easeOut,
          opacity: 0,
          x: 50
        },
        "-=2.5"
      );
    var s3Scene = new ScrollMagic.Scene({
      triggerElement: ".s3",
      triggerHook: 1,
      offset: vh * 0.2
    }).setTween(animS3);
  }

  var animS3Text = new TimelineMax();

  if (vw < 768) {
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
        0.2,
        {
          opacity: "0"
        },
        0.7
      );
    var s3SceneText = new ScrollMagic.Scene({
      triggerElement: ".gallery-list",
      triggerHook: "0",
      offset: -vh * 0.3,
      duration: vh / 2
    }).setTween(animS3Text);
  } else {
    animS3Text
      .from(s3Texth1, 1.2, {
        y: "60",
        opacity: "0"
      })
      .from(
        s3Textp,
        1.5,
        {
          opacity: "0"
        },
        "-=0.6"
      )
      .from(
        s3Butt,
        0.5,
        {
          opacity: "0",
          ease: Expo.easeOut
        },
        "-=1.4"
      );

    var s3SceneText = new ScrollMagic.Scene({
      triggerElement: ".s3",
      triggerHook: 1,
      offset: vh * 0.2
    }).setTween(animS3Text);
  }

  animS4 = new TimelineMax();
  if (vh / vw > 1) {
    animS4.from(s4h1, 1, {
      y: "30",
      opacity: "0"
    });
    tween = TweenMax.staggerFrom(
      s4icons,
      2,
      {
        opacity: "0"
      },
      0.2
    );

    animS4.add(tween);

    var s4Scene = new ScrollMagic.Scene({
      triggerElement: ".s3 .text-wrapper",
      triggerHook: "0",
      offset: -vh * 0.4,
      duration: vh * 0.7
    }).setTween(animS4);
  } else {
    tween = TweenMax.staggerFrom(
      s4icons,
      2,
      {
        opacity: "0",
        delay: 0.3
      },
      0.2
    );

    animS4.add(tween);
    animS4.from(
      s4h1,
      0.7,
      {
        y: "60",
        opacity: "0"
      },
      0
    );
    var s4Scene = new ScrollMagic.Scene({
      triggerElement: ".s4",
      triggerHook: 1,
      offset: vh * 0.4
    }).setTween(animS4);
  }

  if (vh / vw > 1) {
    var anims5 = new TimelineMax();
    anims5
      .from(s5h1, 1, {
        y: "30",
        opacity: "0"
      })
      .staggerFrom(
        s5li,
        1,
        {
          y: "100",
          opacity: "0"
        },
        0.1,
        0.2
      );
    var s5Scene = new ScrollMagic.Scene({
      triggerElement: ".s4",
      triggerHook: "0",
      duration: vh * 0.7,
      offset: -vh * 0.4
    }).setTween(anims5);
  } else {
    var anims5 = new TimelineMax();
    anims5
      .from(s5h1, 1.2, {
        y: "60",
        opacity: "0"
      })
      .staggerFrom(
        s5h3,
        1,
        {
          y: "30",
          opacity: "0"
        },
        0.3,
        0.4
      )
      .staggerFrom(
        s5items,
        0.8,
        {
          y: "20",
          opacity: "0"
        },
        0.1,
        0.5
      );
    var s5Scene = new ScrollMagic.Scene({
      triggerElement: ".s6",
      triggerHook: 1,
      offset: -vh * 0.3
    }).setTween(anims5);
  }

  var anims6 = new TimelineMax();
  if (vh / vw > 1) {
    anims6
      .staggerFrom(
        s6text,
        2,
        {
          y: "50",
          opacity: "0"
        },
        0.2,
        0.2
      )
      .staggerFrom(
        s6form,
        2,
        {
          y: "100",
          opacity: "0"
        },
        0.2,
        0.2
      )
      .from(
        s6formbtn,
        1,
        {
          ease: Power2.easeOut,
          y: "30",
          opacity: "0"
        },
        1.6
      );
    var s6Scene = new ScrollMagic.Scene({
      triggerElement: ".s5",
      triggerHook: "0",
      offset: 0,
      duration: vh * 0.8
    }).setTween(anims6);
  } else {
    anims6
      .staggerFrom(
        s6text,
        1.2,
        {
          y: "50",
          opacity: "0"
        },
        0.2,
        0.2
      )
      .staggerFrom(
        s6form,
        1.2,
        {
          y: "100",
          opacity: "0"
        },
        0.2,
        0.2
      )
      .from(
        s6formbtn,
        0.3,
        {
          ease: Expo.easeOut,
          x: -20,
          opacity: "0"
        },
        "-=.6"
      );
    var s6Scene = new ScrollMagic.Scene({
      triggerElement: ".s6",
      triggerHook: 1,
      offset: vh * 0.5,
      reverse: false
    }).setTween(anims6);
  }

  var animFooter = new TimelineMax();

  if (vh / vw > 1) {
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
  } else {
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
  }

  if (vh / vw < 1) {
    var footerScene = new ScrollMagic.Scene({
      triggerElement: ".footer",
      triggerHook: vh,
      offset: vh * 0.1,
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
    logoScene,
    s2Scene,
    s3Scene,
    s3SceneText,
    s4Scene,
    s5Scene,
    s6Scene,
    footerScene
  ]);
});
