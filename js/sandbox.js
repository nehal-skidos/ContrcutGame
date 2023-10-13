window.onload = function () {
  let data = {
    url: "https://d1wfmi80ljcet8.cloudfront.net/InsideOutside_PS_L/InsideOutside_PS_L.m3u8",
    //url: "https://d1wfmi80ljcet8.cloudfront.net/MoreLessEqual_G0_L.m4v/MoreLessEqual_G0_L.m3u8",
    //url: "https://d1wfmi80ljcet8.cloudfront.net/OneMany_PS_P/OneMany_PS_P.m3u8",
  };
  if (sandbox) {
    LoadTutorial(data);
  }
};
