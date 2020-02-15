var pContainer = $(".s4 .icons > div:not(:last-child)");
var popup = $(".s4 .popup");
var closePopUp = $(".s4 .popup .close-btn");
var tl = new TimelineMax();
var pOpen;
// Positions

var x2 = -(118 - vw * 0.05 + (vw - 188) / 2);
var x1 = x2 + 118;
var y2 = -117;
var y3 = y2 * 2 - 3;
var titlePos = vw * 0.05 + 43 + 50; // margin + icon margin + iconsize & textmargin

function start() {
  tl.set(popup, {
    x: "-50%"
  });
}

$(".nav--indicators li").click(function() {
  $(".sel").removeClass("sel");
  $(this).addClass("sel");
});

function clickIcon(title, pDot, self, process, xAxis, yAxis) {
  //remove anim
  animS4.remove(tween);

  pOpen = process;
  //adjust title
  tl.set(title, {
    position: "absolute",
    "margin-top": 0,
    color: "white",
    top: 0,
    left: 0,
    x: titlePos,
    y: "64px",
    "font-size": "24px",
    "font-family": "Avenir-Black",
    opacity: 0
  });

  var urlStart = "url('../img/process-icons-mobile-white/";
  var urlEnd = ".svg')";

  var url = '"' + urlStart + process + urlEnd + '"';

  console.log(url);

  switch (process) {
    case "think":
      pDot.css(
        "background-image",
        "url('../img/process-icons-mobile-white/think.svg')"
      );
      break;

    case "create":
      pDot.css(
        "background-image",
        "url('../img/process-icons-mobile-white/create.svg')"
      );
      break;

    case "iterate":
      pDot.css(
        "background-image",
        "url('../img/process-icons-mobile-white/iterate.svg')"
      );
      break;

    case "develop":
      pDot.css(
        "background-image",
        "url('../img/process-icons-mobile-white/develop.svg')"
      );
      break;

    case "deliver":
      pDot.css(
        "background-image",
        "url('../img/process-icons-mobile-white/deliver.svg')"
      );
      break;

    default:
      break;
  }

  tl.set(self, { "z-index": "3" })
    .to(pDot, 0.3, {
      position: "absolute",
      width: "90%",
      height: "100%",
      "border-radius": "10px",
      y: yAxis,
      x: xAxis,
      "background-color": "#5e0ed8"
    })
    .to(
      pDot,
      0.3,
      {
        "background-position": "2.7rem 62.5px"
      },
      "-=0.2"
    );
  tl.set($(".nav--indicators"), {
    "z-index": 5
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
      title,
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
var pDot;
var clickTitle;
var pSelf;

pContainer.on("click", function() {
  // set vars
  pself = $(this);
  pDot = $(this).children(".dot");
  clickTitle = $(this).children("a");

  tl.set(s4icons, {
    opacity: 1
  });

  if ($(this).hasClass("container--think")) {
    clickIcon(clickTitle, pDot, $(this), "think", x1, 0);
  }

  if ($(this).hasClass("container--create")) {
    clickIcon(clickTitle, pDot, $(this), "create", x2, 0);
  }

  if ($(this).hasClass("container--iterate")) {
    clickIcon(clickTitle, pDot, $(this), "iterate", x1, y2);
  }

  if ($(this).hasClass("container--develop")) {
    clickIcon(clickTitle, pDot, $(this), "develop", x2, y2);
  }

  if ($(this).hasClass("container--deliver")) {
    clickIcon(clickTitle, pDot, $(this), "deliver", x1, y3);
  }
});

closePopUp.on("click", function() {
  tl.clear();

  tl.to(popup, 0.8, {
    opacity: "0",
    "pointer-events": "none"
  });

  tl.to(
    clickTitle,
    0.8,
    {
      opacity: 0,
      y: 40
    },
    0
  );
  tl.to(
    pDot,
    0.5,
    {
      width: "70px",
      height: "70px",
      "border-radius": "50%",
      x: 0,
      y: 0
    },
    "-=1"
  ).to(
    pDot,
    0.5,
    {
      "background-position": "center"
    },
    "-=0.5"
  );

  switch (pOpen) {
    case "think":
      setTimeout(function() {
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/think.svg')"
        );
      }, 800);
      break;

    case "create":
      setTimeout(function() {
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/create.svg')"
        );
      }, 800);
      break;

    case "iterate":
      setTimeout(function() {
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/iterate.svg')"
        );
      }, 800);
      break;

    case "develop":
      setTimeout(function() {
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/develop.svg')"
        );
      }, 800);
      break;

    case "deliver":
      setTimeout(function() {
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/deliver.svg')"
        );
      }, 800);
      break;

    default:
      break;
  }

  tl.set(pDot, {
    position: "static",
    "background-color": "transparent"
  });

  tl.set(clickTitle, {
    position: "static",
    "margin-top": "6px",
    color: "#aeaeae",
    x: 0,
    y: 0,
    "font-size": "1.25rem",
    "font-family": "Futura",
    opacity: 1,
    "z-index": "0"
  });

  tl.set(pself, {
    "z-index": 0
  });

  animS4.append(tween);
});
