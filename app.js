var myvid = document.getElementById('myvideo');

window.onunload = function(){ window.scrollTo(0,0); }
var myvids = [
  "video.mp4",
  "loop.mp4"
  ];
var activeVideo = 0;
myvid.addEventListener('ended', function(e) {
  // update the new active video index
  myvid.pause();
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.loop = true;
  myvid.play();
});
