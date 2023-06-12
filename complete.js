$(document).ready(function () {
  function redirect() {
    $("body").addClass("screen-shake");
    setTimeout(function () {
      $("body").addClass("transition");

      var anchor = window.location.hash.substr(1);

      var redirectUrls = {
        "1": "https://tquin1.github.io/puzzle/writing/1",
        "2": "https://tquin1.github.io/puzzle/reading/1",
        "3": "https://tquin1.github.io/puzzle/writing/2",
        "4": "https://tquin1.github.io/puzzle/reading/2",
      };

      if (redirectUrls.hasOwnProperty(anchor)) {
        window.location.href = redirectUrls[anchor];
      } else {
        window.location.href = "https://example.com";
      }
    }, 1000);
  }

  function checkForComplete() {
    if ($(".complete").length > 0) {
      setTimeout(redirect, 1000);
    } else {
      setTimeout(checkForComplete, 50);
    }
  }

  checkForComplete();
});
