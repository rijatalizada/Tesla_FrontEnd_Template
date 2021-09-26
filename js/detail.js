$(document).ready(function () {
  $("#spec").click(function () {
    $("#specBody").slideToggle("slow");
  });
  $("#feat").click(function () {
    $("#featBody").slideToggle("slow");
  });

  $("#video-player").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      patterns: {
        youtube: {
          index: "youtube.com/",

          id: "v=",

          src: "https://www.youtube.com/embed/SLtV_2Z1_x8",
        },
      },

      srcAction: "iframe_src",
    },
  });   
});
