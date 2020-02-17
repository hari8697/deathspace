particlesJS.load("particles-js", "../res/stars.json");
particlesJS.load("particles2-js", "../res/particlesjs-config.json");

let myVideo = $("#myvideo");

myVideo[0].load();
myVideo[0].play();

setTimeout(function() {
  let viewheight = $(window).height();
  let viewwidth = $(window).width();
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute(
    "content",
    "height=" + viewheight + ", width=" + viewwidth + ", initial-scale=1.0"
  );
}, 300);

var form = $(".s6 .form");
new window.JustValidate(".s6 .form", {
  colorWrong: "#d0ff00"
});

// Process functions

var pContainer = $(".s4 .icons > div:not(:last-child)");
var popup = $(".s4 .popup");
var closePopUp = $(".s4 .popup .close-btn");
var tl = new TimelineMax();
