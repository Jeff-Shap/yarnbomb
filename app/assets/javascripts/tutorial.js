




$(document).ready(function() {
  
  


  // SCENE I to SCENE II TRANSITION

  $('#step_1_arrow').click(function() {

    window.setTimeout(function() {
      $('#getstart_banner').animate({"right":"100%"}, 2300);
      $('#thanks_banner').animate({"left":"-100%"}, 3000);
      $('#scene1').delay(2000).animate({"right":"100%"}, 1);
      $('#scene2').delay(2000).animate({"left":"0%"}, 1);
      $('#tutorial_banner').delay(2000).animate({"width":"50%", "left":"24%", "opacity":1,}, 2000);
      $('#tut_subhead').delay(4000).animate({"width":"1260px",}, 2000);
      $('#yarn_ex_icon').delay(7000).animate({opacity:1,});
      $('#proj_ex_icon').delay(9000).animate({opacity:1,});
      $('#report_ex_icon').delay(11000).animate({opacity:1,});
      $('#nav_ex_footer').delay(13000).animate({opacity:1,},500);
    },1);

    
    



  });

  // SCENE II ICON EVENTS

  $('#yarn_ex_icon').click(function() {
    $('#yarn_head').animate({opacity:1,}, 100);
    $('#yarn_head').animate({"width":"80%",}, 1000);
    $('#yarn_head').animate({"top":"20px","height":"350px",}, 1000);
    $('#yarn_head > .popout').delay(2000).animate({opacity:1,}, 1000);
  });

  $('#proj_ex_icon').click(function() {
    $('#proj_head').animate({opacity:1,}, 100);
    $('#proj_head').animate({"width":"80%",}, 1000);
    $('#proj_head').animate({"top":"20px","height":"350px",}, 1000);
    $('#proj_head > .popout').delay(2000).animate({opacity:1,}, 1000);
  });

  $('#report_ex_icon').click(function() {
    $('#report_head').animate({opacity:1,}, 100);
    $('#report_head').animate({"width":"80%",}, 1000);
    $('#report_head').animate({"top":"20px","height":"350px",}, 1000);
    $('#report_head > .popout').delay(2000).animate({opacity:1,}, 1000);
  });


});