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
