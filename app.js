var myvid = document.getElementById('myvideo');
var myvids = [
  "video.mp4",
  "loop.mp4"
  ];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the new active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.loop = true;
});
