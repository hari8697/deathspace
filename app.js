var myvid = document.getElementById('myvideo');
var myvids = [
  "./img/video.mp4",
  "./img/loop.mp4"
];
var activeVideo = 0;
myvid.addEventListener('ended', function(e) {
  // update the new active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.loop = true;
  myvid.play();
});

$(document).ready(function() {
  var i = 0;
  $("#button").click(function() {
    scrollDown();
    i++;
  });

  function scrollDown() {
    $('html, body').animate({
      scrollTop: $(".nav").offset().top
    }, 0);
  }

  $(window).scroll(function() {
    if ($(window).scrollTop() < 10) {
      i = 0;
    }
    if ($(window).scrollTop() > 10) {
      if (i == 0) {
        scrollDown();
        i++;
      }
    }
  });

  $(window).load(function() {
    $('html, body').animate({
      scrollTop: $(".s1").offset().top
    }, 0);
  });
});

var t1 = new TimelineMax({
  paused: true
});

t1.to(".one", 0.3, {
  y:6,
}, 0)
.to(".two", 0.3, {
  y:-6,
}, 0)
.to(".one", 0.5, {
  y: 6,
  rotation: 45,
})
.to(".two", 0.5, {
  y: -6,
  rotation: -45,
  delay: -0.5
})
.staggerFrom(".menu-hidden ul li", 2, {
  x: -300,
  opacity: 0,
  ease: Expo.easeInOut
}, 0.2, 0)
.to(".menu-hidden", 1, {
  top: "0%",
  ease: Expo.easeInOut,
}, 0.125)
.reverse();

$(document).on("click", ".toggle-btn", function() {
  if (t1.reversed()) {
    $('.menu-hidden').css("pointer-events", "all");
  } else {
    $('.menu-hidden').css("pointer-events", "none");
  }
  t1.reversed(!t1.reversed());
});

$(document).on("click", ".data a, .menu-hidden", function() {
  t1.reversed(!t1.reversed());
  $('.menu-hidden').css("pointer-events", "none");
});
