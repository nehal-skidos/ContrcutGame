let unityEvents = {
  VideoScreen_VideoBtn_Clicked: "VideoScreen_VideoBtn_Clicked",
  VideoScreen_LockedVideoBtn_Clicked: "VideoScreen_LockedVideoBtn_Clicked",
  VideoScreen_Locked_VideoOkBtn_Clicked:
    "VideoScreen_Locked_VideoOkBtn_Clicked",
  VideoScreen_information_btn_clicked: "VideoScreen_information_btn_clicked",
  VideoScreen_info_close_btn_clk: "VideoScreen_info_close_btn_clk",
  PopUp_Sound_Btn_Clicked: "PopUp_Sound_Btn_Clicked",
  opensubscription: "opensubscription",
  VideoScreen_btn_back: "VideoScreen_btn_back",
  VideoScreen_user_scrolled: "VideoScreen_user_scrolled",
  VideoScreen_user_reached_end: "VideoScreen_user_reached_end",
  video_playback_started: "video_playback_started",
  video_playback_paused: "video_playback_paused",
  video_playback_resumed: "video_playback_resumed",
  video_playback_completed: "video_playback_completed",
  VideoScreen_Reached: "VideoScreen_Reached",
};
let defaultScheme = "&webmodule=skidosvideo";
let throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

//player-events
player.on("ended", function () {
  if (unityMode === false) return false;
  window.location.href =
    "skidoswebview://ExitFromWebView?webmodule=videotutorial";
});
player.landscapeFullscreen({
  fullscreen: {
    enterOnRotate: true,
    exitOnRotate: true,
    alwaysInLandscapeMode: true,
    iOS: true,
  },
});
