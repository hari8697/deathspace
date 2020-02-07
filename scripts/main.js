particlesJS.load("particles-js", "../res/stars.json");
particlesJS.load("particles2-js", "../res/particlesjs-config.json");

setTimeout(function() {
  let viewheight = $(window).height();
  let viewwidth = $(window).width();
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    "height=" + viewheight + ", width=" + viewwidth + ", initial-scale=1.0"
  );
}, 300);

// Process functions

var pContainer = $(".s4 .icons > div:not(:last-child)");
var popup = $(".s4 .popup");
var closePopUp = $(".s4 .popup .close-btn");
var tl = new TimelineMax();

tl.set(popup, {
  x: "-50%"
});

pContainer.on("click", function() {
  checkbool = false;

  var pDot = $(this).children(".dot");
  var clickTitle = $(this).children("a");
  var clickIcon = $(this).children("span");

  animS4.remove(tween);
  var x2 = -(118 - vw * 0.05 + (vw - 188) / 2);
  var y2 = -117;
  var y3 = y2 * 2;
  var titlePos = vw * 0.05 + 43 + 50; // margin + icon margin + iconsize & textmargin

  tl.set(clickTitle, {
    position: "absolute",
    "margin-top": 0,
    color: "white",
    top: 0,
    left: 0,
    x: titlePos,
    y: "64px",
    "font-size": "24",
    "font-family": "Avenir-Black",
    opacity: 0
  });
  if ($(this).hasClass("container--develop")) {
    tl.set($(this), { "z-index": "3" }).to(pDot, 0.5, {
      position: "absolute",
      width: "90%",
      height: "100%",
      y: y2,
      x: x2,
      "border-radius": "10px",
      "background-position": "2.7rem 62.5px",
      "background-color": "#5e0ed8",
      "background-image": 'url("../img/process-icons-mobile-white/develop.svg")'
    });

    tl.to(popup, 0.8, {
      ease: Power1.easeInOut,
      opacity: "1",
      "pointer-events": "all"
    })
      .fromTo(
        popup,
        0.6,
        {
          ease: Power1.easeInOut,
          y: "-=30"
        },
        {
          ease: Power1.easeInOut,
          y: "0"
        },
        0.3
      )
      .to(
        clickTitle,
        0.5,
        {
          opacity: 1
        },
        "-=0.4"
      )
      .to(
        closePopUp,
        0.1,
        {
          "z-index": "5"
        },
        "-=0.4"
      );
  }

  // tl.set($(this), {
  //   color: "white",
  //   "z-index": "4"
  // });

  // tl.set(clickIcon, {
  //   x: "-50",
  //   y: "55"
  // });
});

closePopUp.on("click", function() {
  // tl.reverse();
});
