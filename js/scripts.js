function LoadTutorial(data) {
  if (data) {
    playVideo(data);
  } else alert("Initialization data was not found");
}
function playVideo(data) {
  const source = data.url;
  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(source);
    hls.attachMedia(video);
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = source;
  }
  // let playerHeight = $("#skidos_player").height();
  // let domHeight = $(window).height();
  // if (domHeight - playerHeight > 0) {
  //   $(".player-container").css(
  //     "margin-top",
  //     (domHeight - playerHeight) / 2 - 50 + "px"
  //   );
  // }
  // Expose player so it can be used from the console
  window.player = player;
  player.play();
  return true;
}
