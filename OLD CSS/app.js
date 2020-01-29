var myvid = document.getElementById("myvideo");
var myvids = ["./img/video.mp4", "./img/video.mp4"];
var activeVideo = 0;
myvid.addEventListener("ended", function(e) {
  // update the new active video index
  activeVideo = ++activeVideo % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.loop = true;
  myvid.play();
});

var vh = $(window).height();
var vw = $(window).width();

var scrollArrow = $(".scrollArrow");

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

$(document).ready(function() {
  $(window).on("load", function() {
    // if ($(window).scrollTop() < vh * 0.8) {
    //   disableScroll();
    //   $("html, body").animate(
    //     {
    //       scrollTop: "0"
    //     },
    //     0
    //   );
    // }
  });

  var i = 0;
  // $("#button").click(function() {
  //   scrollDown();
  //   i++;
  // });

  function scrollDown() {
    $("html, body").animate(
      {
        scrollTop: $(".s2").offset().top
      },
      0
    );
  }

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
  var header = $(".header");
  var logo = $(".logo-top");
  var s2Texth1 = $(".s2 .text-wrapper h1");
  var s2Textp = $(".s2 .text-wrapper p");
  var pimg1 = $(".gallery-list li:nth-child(1)");
  var pimg2 = $(".gallery-list li:nth-child(2)");

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
        opacity: 1,
        position: "fixed"
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
        opacity: 1,
        position: "fixed"
      });
  }

  var animS3Set = new TimelineMax();
  animS3Set
    .set(pimg1, {
      y: "-160%"
    })
    .set(pimg2, {
      y: "-80%"
    });

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

  controller.addScene([logoScene, s2Scene, s3Scene]);

  // .addIndicators()

  // $(window).scroll(function() {
  //   if ($(window).scrollTop() < 10) {
  //     i = 0;
  //   }
  //   if ($(window).scrollTop() > 10) {
  //     if (i == 0) {
  //       i++;
  //     }
  //   }
  // });

  // $(window).load(function() {
  //   $('html, body').animate({
  //     scrollTop: $(".s1").offset().top
  //   }, 0);
  // });
});

var t1 = new TimelineMax({
  paused: true
});

t1.to(
  ".one",
  0.3,
  {
    y: 6
  },
  0
)
  .to(
    ".two",
    0.3,
    {
      y: -6
    },
    0
  )
  .to(".one", 0.5, {
    y: 6,
    rotation: 45
  })
  .to(".two", 0.5, {
    y: -6,
    rotation: -45,
    delay: -0.5
  })
  .staggerFrom(
    ".menu-hidden ul li",
    2,
    {
      x: -300,
      opacity: 0,
      ease: Expo.easeInOut
    },
    0.2,
    0
  )
  .to(
    ".menu-hidden",
    1,
    {
      top: "0%",
      ease: Expo.easeInOut
    },
    0.125
  )
  .reverse();

$(document).on("click", ".toggle-btn", function() {
  if (t1.reversed()) {
    $(".menu-hidden").css("pointer-events", "all");
  } else {
    $(".menu-hidden").css("pointer-events", "none");
  }
  t1.reversed(!t1.reversed());
});

$(document).on("click", ".data a, .menu-hidden", function() {
  t1.reversed(!t1.reversed());
  $(".menu-hidden").css("pointer-events", "none");
});

particlesJS.load("particles-js", "./res/stars.json");
particlesJS.load("particles2-js", "./res/particlesjs-config.json");
