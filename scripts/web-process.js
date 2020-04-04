var iconsContainer = $(".s4 .icons");
var icContWidth = iconsContainer.width();
var webSingleGap = (icContWidth - 350) / 6;
var wLeftMargin = vw / 2 - [(icContWidth * 1.4) / 2];
var wLeftMargin2 = vw / 2 - [icContWidth / 2];
var wLeftMargin3 = wLeftMargin2 - wLeftMargin;
var webPos = {
  x1: -webSingleGap - wLeftMargin3,
  x2: -(webSingleGap * 2 + 70) - wLeftMargin3,
  x3: -(webSingleGap * 3 + 140) - wLeftMargin3,
  x4: -(webSingleGap * 4 + 210) - wLeftMargin3,
  x5: -(webSingleGap * 5 + 280) - wLeftMargin3
};
var wTitlePos = wLeftMargin2 + 30;
// console.log(webPos.x4);

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

if (vw > 768 && vh < vw) {
  function switchStates() {
    paragraph(currDot);
    arrows(currDot);
    processSwitch(currDot);
    changeSwitch(currDot);
  }

  function paragraph(a) {
    if (a == 1) {
      tl2.to(pDesc, 0.25, {
        // "margin-top": "138px"
      });
    }
    if (a == 2) {
      tl2.to(pDesc, 0.25, {
        // "margin-top": "145px"
      });
    }
    if (a == 3) {
      tl2.to(pDesc, 0.25, {
        // "margin-top": "145px"
      });
    }
    if (a == 4) {
      tl2.to(pDesc, 0.25, {
        // "margin-top": "140px"
      });
    }
    if (a == 5) {
      tl2.to(pDesc, 0.25, {
        // "margin-top": "135px"
      });
    }
  }

  function processSwitch(process) {
    switch (process) {
      case "think":
      case 1:
        pDot.css({
          "background-image":
            "url('../img/process-icons-mobile-white/think.svg')"
        });

        tl.to(
          pDot,
          0.3,
          {
            "background-position": "19% 41px"
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
            "background-position": "18.6% 44px"
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
            "background-position": "19% 41px"
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
            "background-position": "19% 42px",
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
            "background-position": "19% 41px"
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
    if (vw > 768 && vh < vw) {
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
        x: 97,
        y: "40px",
        "font-size": "24px",
        "font-family": "Avenir-Black",
        opacity: 0
      });

      tl.set(self, { "z-index": "3" }).to(pDot, 0.3, {
        position: "absolute",
        "border-radius": "10px",
        width: "140%",
        height: "170px",
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
  }
  var pDot;
  var clickTitle;
  var pSelf;
  var poppedOpen;

  pContainer.on("click", function(e) {
    poppedOpen = true;
    e.stopPropagation(); // stops the event to bubble up to the parent element.
    // set vars
    pself = $(this);
    pDot = $(this).children(".dot");
    pOriginalIcon = pDot.css("background-image");
    clickTitle = $(this).children("a");

    tl.set(pContainer, {
      "pointer-events": "none"
    });

    tl.set(s4icons, {
      opacity: 1
    });

    if ($(this).hasClass("container--think")) {
      pDesc.text(thText);
      clickIcon(clickTitle, pDot, $(this), "think", webPos.x1, 0, 1);
    }

    // if ($(this).hasClass("container--create")) {
    //   pDesc.text(crText);
    //   clickIcon(clickTitle, pDot, $(this), "create", webPos.x2, 0, 2);
    // }
    if ($(this).hasClass("container--create")) {
      pDesc.text(crText);
      clickIcon(clickTitle, pDot, $(this), "create", webPos.x2, 0, 2);
    }

    // if ($(this).hasClass("container--iterate")) {
    //   pDesc.text(itText);
    //   clickIcon(clickTitle, pDot, $(this), "iterate", webPos.x3, 0, 3);
    // }
    if ($(this).hasClass("container--iterate")) {
      pDesc.text(itText);
      clickIcon(clickTitle, pDot, $(this), "iterate", webPos.x3, 0, 3);
    }

    if ($(this).hasClass("container--develop")) {
      pDesc.text(devText);
      clickIcon(clickTitle, pDot, $(this), "develop", webPos.x4, 0, 4);
    }

    if ($(this).hasClass("container--deliver")) {
      pDesc.text(delText);
      clickIcon(clickTitle, pDot, $(this), "deliver", webPos.x5, 0, 5);
    }
  });

  closePopUp
    .add($(".s4"))
    .add($(".s5"))
    .on("click", function() {
      if (poppedOpen) {
        poppedOpen = false;
        pContainer.css("pointer-events", "none");
        tl.clear();
        pDot.css({
          "background-image": pOriginalIcon
        });

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
            setTimeout(() => {
              clickTitle.text("Think");
            }, 300);
            setTimeout(function() {
              pDot.css(
                "background-image",
                "url('../img/process-icons/think.svg')"
              );
            }, 800);
            break;

          case "create":
            setTimeout(() => {
              clickTitle.text("Create");
            }, 300);
            setTimeout(function() {
              pDot.css(
                "background-image",
                "url('../img/process-icons/create.svg')"
              );
            }, 800);
            break;

          case "iterate":
            setTimeout(() => {
              clickTitle.text("Iterate");
            }, 300);
            setTimeout(function() {
              pDot.css(
                "background-image",
                "url('../img/process-icons/iterate.svg')"
              );
            }, 800);
            break;

          case "develop":
            setTimeout(() => {
              clickTitle.text("Develop");
            }, 300);
            setTimeout(function() {
              pDot.css(
                "background-image",
                "url('../img/process-icons/develop.svg')"
              );
            }, 800);
            break;

          case "deliver":
            setTimeout(() => {
              clickTitle.text("Deliver");
            }, 300);
            setTimeout(function() {
              pDot.css(
                "background-image",
                "url('../img/process-icons/deliver.svg')"
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
          "margin-top": "15px",
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

        hoverPleasse(pDot);
      }
    });

  function hoverPleasse(x) {
    pself.hover(
      function() {
        x.css("background-color", "#5e0ed8");
      },
      function() {
        x.css("background-color", "transparent");
      }
    );
  }
}
