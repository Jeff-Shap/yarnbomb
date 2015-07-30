




$(document).ready(function() {
  
  


  // SCENE I to SCENE II TRANSITION

  $('#step_1_arrow').click(function() {

    window.setTimeout(function() {
      $('#getstart_banner').animate({"right":"100%"}, 2800);
      $('#thanks_banner').animate({"left":"-100%"}, 4000);
      $('#scene1').delay(2000).animate({"right":"100%"}, 1);
      $('#scene2').delay(2000).animate({"left":"0%"}, 1);

    },1);

    
    



  });



});