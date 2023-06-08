$(document).ready(function() {
    function redirect() {
      $("body").addClass("screen-shake");
            setTimeout(function() {
        $("body").addClass("transition");
        
        setTimeout(function() {
          window.location.href = "https://example.com"; 
        }, 1000); 
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