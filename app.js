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

$(document).ready(function () {
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
    if($(window).scrollTop() < 10)
    {
      i = 0;
    }
    if($(window).scrollTop() > 10){
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
