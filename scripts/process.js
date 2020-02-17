var pContainer = $(".s4 .icons > div:not(:last-child)");
var popup = $(".s4 .popup");
var pDesc = $(".s4 .popup .desc");
var closePopUp = $(".s4 .popup .close-btn");
var tl = new TimelineMax();
var pOpen;

let devText =
  "Development involves bringing the design to life with code. Micro-interactions, and animations are created in this stage.";
let delText =
  "Once development, is completed, all that's left is successfully handing over the website to the client, and setting up domain, hosting, etc.";
let itText =
  "We repeat the cycles of ideation and creation till we reach a satisfactory version of the website.";
let crText =
  "Designing low/high fidelity wireframes, clickable prototypes, and any other deliverables.";
let thText =
  "Discussions, research, site maps, user journey maps, wireframing, strategy, ideas/concepts, all fall into this stage of the process.";

let dots = $(".nav--indicators li");
let currDot;
let lArrow = $(".nav--hor .left");
let rArrow = $(".nav--hor .right");
let popupLeft = $(".s4 .popup .one");
let popupRight = $(".s4 .popup .two");
let tl2 = new TimelineMax();
// Positions

var x2 = -(118 - vw * 0.05 + (vw - 188) / 2);
var x1 = x2 + 118;
var y2 = -117;
var y3 = y2 * 2 - 3;
var titlePos = vw * 0.05 + 43 + 50; // margin + icon margin + iconsize & textmargin

start();

function start() {
  tl.set(popup, {
    x: "-50%"
  });
}

// dots.click(function() {
//   $(".sel").removeClass("sel");
//   $(this).addClass("sel");
// });

function arrows(a) {
  $(".sel").removeClass("sel");
  $(`.nav--indicators li:nth-child(${a})`).addClass("sel");

  lArrow.css("opacity", "1");
  rArrow.css("opacity", "1");

  if (a == 1) {
    lArrow.css("opacity", "0");
  }
  if (a == 5) {
    rArrow.css("opacity", "0");
  }
}

function switchStates() {
  paragraph(currDot);
  arrows(currDot);
  processSwitch(currDot);
  changeSwitch(currDot);
}

popupLeft.click(function() {
  if (currDot > 1) {
    currDot -= 1;
    switchStates();
  }
});

popupLeft.touchwipe({
  wipeLeft: function() {
    if (currDot < 5) {
      currDot += 1;
      switchStates();
    }
  },
  wipeRight: function() {
    if (currDot > 1) {
      currDot -= 1;
      switchStates();
    }
  },
  min_move_x: 20,
  min_move_y: 20,
  preventDefaultEvents: true
});
popupRight.click(function() {
  if (currDot < 5) {
    currDot += 1;
    switchStates();
  }
});
popupRight.touchwipe({
  wipeLeft: function() {
    if (currDot < 5) {
      currDot += 1;
      switchStates();
    }
  },
  wipeRight: function() {
    if (currDot > 1) {
      currDot -= 1;
      switchStates();
    }
  },
  min_move_x: 20,
  min_move_y: 20,
  preventDefaultEvents: true
});

function paragraph(a) {
  if (a == 1) {
    tl2.to(pDesc, 0.25, {
      "margin-top": "138px"
    });
  }
  if (a == 2) {
    tl2.to(pDesc, 0.25, {
      "margin-top": "145px"
    });
  }
  if (a == 3) {
    tl2.to(pDesc, 0.25, {
      "margin-top": "145px"
    });
  }
  if (a == 4) {
    tl2.to(pDesc, 0.25, {
      "margin-top": "140px"
    });
  }
  if (a == 5) {
    tl2.to(pDesc, 0.25, {
      "margin-top": "135px"
    });
  }
}

function changeSwitch(a) {
  // clickTitle.fadeOut(100);
  // pDesc.fadeOut(100);

  switch (a) {
    case 1:
      setTimeout(() => {
        clickTitle.text("Think");
      }, 100);
      setTimeout(() => {
        pDesc.text(thText);
      }, 100);
      break;

    case 2:
      setTimeout(() => {
        clickTitle.text("Create");
      }, 100);
      setTimeout(() => {
        pDesc.text(crText);
      }, 100);
      break;

    case 3:
      setTimeout(() => {
        clickTitle.text("Iterate");
      }, 100);
      setTimeout(() => {
        pDesc.text(itText);
      }, 100);
      break;

    case 4:
      setTimeout(() => {
        clickTitle.text("Develop");
      }, 100);
      setTimeout(() => {
        pDesc.text(devText);
      }, 100);
      break;

    case 5:
      setTimeout(() => {
        clickTitle.text("Deliver");
      }, 100);
      setTimeout(() => {
        pDesc.text(delText);
      }, 100);
      break;

    default:
      break;
  }

  // clickTitle.fadeIn(100);
  // pDesc.fadeIn(200);
}

function processSwitch(process) {
  switch (process) {
    case "think":
    case 1:
      pDot.css({
        "background-image": "url('../img/process-icons-mobile-white/think.svg')"
      });

      tl.to(
        pDot,
        0.3,
        {
          "background-position": "48px 64px"
        },
        "-=0.2"
      );

      break;

    case "create":
    case 2:
      pDot.css({
        "background-image":
          "url('../img/process-icons-mobile-white/create.svg')"
      });

      tl.to(
        pDot,
        0.3,
        {
          "background-position": "42px 68px"
        },
        "-=0.2"
      );
      break;

    case "iterate":
    case 3:
      pDot.css({
        "background-image":
          "url('../img/process-icons-mobile-white/iterate.svg')"
      });
      tl.to(
        pDot,
        0.3,
        {
          "background-position": "48px 66px"
        },
        "-=0.2"
      );
      break;

    case "develop":
    case 4:
      pDot.css({
        "background-image":
          "url('../img/process-icons-mobile-white/develop.svg')"
      });
      tl.to(
        pDot,
        0.3,
        {
          "background-position": "47px 66px",
          "background-size": "auto"
        },
        "-=0.2"
      );
      break;

    case "deliver":
    case 5:
      pDot.css({
        "background-image":
          "url('../img/process-icons-mobile-white/deliver.svg')"
      });
      tl.to(
        pDot,
        0.3,
        {
          "background-position": "47px 67px"
        },
        "-=0.2"
      );
      break;

    default:
      break;
  }
}
function clickIcon(title, pDot, self, process, xAxis, yAxis, dotNo) {
  //remove anim
  animS4.remove(tween);

  currDot = dotNo;
  arrows(dotNo);
  paragraph(dotNo);

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

  tl.set(self, { "z-index": "3" }).to(pDot, 0.3, {
    position: "absolute",
    width: "90%",
    height: "100%",
    "border-radius": "10px",
    y: yAxis,
    x: xAxis,
    "background-color": "#5e0ed8"
  });

  processSwitch(process);

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

  tl.set(pContainer, {
    "pointer-events": "none"
  });

  tl.set(s4icons, {
    opacity: 1
  });

  if ($(this).hasClass("container--think")) {
    pDesc.text(thText);
    clickIcon(clickTitle, pDot, $(this), "think", x1, 0, 1);
  }

  if ($(this).hasClass("container--create")) {
    pDesc.text(crText);
    clickIcon(clickTitle, pDot, $(this), "create", x2, 0, 2);
  }

  if ($(this).hasClass("container--iterate")) {
    pDesc.text(itText);
    clickIcon(clickTitle, pDot, $(this), "iterate", x1, y2, 3);
  }

  if ($(this).hasClass("container--develop")) {
    pDesc.text(devText);
    clickIcon(clickTitle, pDot, $(this), "develop", x2, y2, 4);
  }

  if ($(this).hasClass("container--deliver")) {
    pDesc.text(delText);
    clickIcon(clickTitle, pDot, $(this), "deliver", x1, y3, 5);
  }
});

closePopUp.on("click", function() {
  pContainer.css("pointer-events", "none");
  tl.clear();

  tl.to(popup, 0.8, {
    opacity: "0",
    "pointer-events": "none"
  });

  tl.to(
    clickTitle,
    0.2,
    {
      opacity: 0,
      y: 70
    },
    0.2
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
        clickTitle.text("Think");
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/think.svg')"
        );
      }, 800);
      break;

    case "create":
      setTimeout(function() {
        clickTitle.text("Create");
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/create.svg')"
        );
      }, 800);
      break;

    case "iterate":
      setTimeout(function() {
        clickTitle.text("Iterate");
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/iterate.svg')"
        );
      }, 800);
      break;

    case "develop":
      setTimeout(function() {
        clickTitle.text("Develop");
        pDot.css(
          "background-image",
          "url('../img/process-icons-mobile/develop.svg')"
        );
      }, 800);
      break;

    case "deliver":
      setTimeout(function() {
        clickTitle.text("Deliver");
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
    width: "70px",
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

  tl.set(pContainer, {
    "pointer-events": "all"
  });

  animS4.add(tween);

  animS4.restart();
  animS4.progress(1);
});
