




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
      $('#next_step, #btnOpenDialog').delay(20000).animate({opacity:1,},500);
    },1);


  });

  // SCENE II ICON EVENTS

  var y = 0

  $('#yarn_ex_icon').unbind('click').bind('click',function(){
    if (y%2==0) {
      $('#yarn_head').animate({opacity:1,}, 100);
      $('#yarn_head').animate({"width":"80%",}, 1000);
      $('#yarn_head').animate({"top":"20px","height":"400px",}, 1000);
      $('#yarn_head > .popout').delay(2000).animate({opacity:1,}, 1000);
      $('#yarn_nav_locate_icon').delay(3000).animate({opacity:1}, 1000);
      
    }
    else {
      $('#yarn_nav_locate_icon').stop(true).animate({opacity:0,}, 1000);
      $('#yarn_head > .popout').animate({opacity:0,}, 1000);
      $('#yarn_head').delay(1000).animate({"top":"150px","height":"0px",}, 1000);
      $('#yarn_head').animate({"width":"0%",}, 1000);
      $('#yarn_head').animate({opacity:0,}, 100);

    }
  y = y + 1;

  
  });

  var p = 0

  $('#proj_ex_icon').unbind('click').bind('click',function(){
    if (p%2==0) {
      $('#proj_head').animate({opacity:1,}, 100);
      $('#proj_head').animate({"width":"80%",}, 1000);
      $('#proj_head').animate({"top":"20px","height":"400px",}, 1000);
      $('#proj_head > .popout').delay(2000).animate({opacity:1,}, 1000);
      $('#proj_nav_locate_icon').delay(3000).animate({opacity:1}, 1000);
      
    }
    else {
      $('#proj_nav_locate_icon').stop(true).animate({opacity:0,}, 1000);
      $('#proj_head > .popout').animate({opacity:0,}, 1000);
      $('#proj_head').delay(1000).animate({"top":"150px","height":"0px",}, 1000);
      $('#proj_head').animate({"width":"0%",}, 1000);
      $('#proj_head').animate({opacity:0,}, 100);

    }

  p = p + 1;
  });

  var r = 0

  $('#report_ex_icon').unbind('click').bind('click',function(){
    if (r%2==0) {
      $('#report_head').animate({opacity:1,}, 100);
      $('#report_head').animate({"width":"80%",}, 1000);
      $('#report_head').animate({"top":"20px","height":"400px",}, 1000);
      $('#report_head > .popout').delay(2000).animate({opacity:1,}, 1000);
      $('#report_nav_locate_icon').delay(3000).animate({opacity:1}, 1000);
      
      
    }
    else {
      $('#report_nav_locate_icon').stop(true).animate({opacity:0,}, 1000);
      $('#report_head > .popout').animate({opacity:0,}, 1000);
      $('#report_head').delay(1000).animate({"top":"150px","height":"0px",}, 1000);
      $('#report_head').animate({"width":"0%",}, 1000);
      $('#report_head').animate({opacity:0,}, 100);

    }

  r = r + 1;
  });

$('#yarn_nav_locate_icon').click(function() {
          $('#yarn_column').css({"z-index":"1000000000"});
          $('#greywindow').animate({"opacity":"1"}, 800);
          $('#yarn_nav_window').css({"border":"3px solid white"});
          $('#yarn_column_window').css({"background-color":"transparent"});
          $('#proj_nav_button, #report_nav_button, #logo_nav_button, #user_button, #proj_column, #report_column').animate({"opacity":"0.3"},800);
          $('#yarn_nav_window').delay(2000).addClass('flash');
          window.setTimeout(function() {
            $('#proj_nav_button, #report_nav_button, #logo_nav_button, #user_button, #proj_column, #report_column').animate({"opacity":"1"},800);
            $('#greywindow').animate({"opacity":"0"}, 800);
            $('#yarn_nav_window').removeClass('flash');
        }, 5000);
          window.setTimeout(function() {
            $('#yarn_nav_window').css({"border":"none"});
          }, 6000);
        });

$('#proj_nav_locate_icon').unbind('click').bind('click', function() {
         $('#proj_column').css({"z-index":"1000000000"});
          $('#greywindow').animate({"opacity":"1"}, 800);
          $('#proj_nav_window').css({"background-color":"rgba(255,255,255,0)", "border":"3px solid white"});
          $('#proj_column_window').css({"background-color":"transparent"});
          $('#yarn_nav_button, #report_nav_button, #logo_nav_button, #user_button, #yarn_column, #report_column').animate({"opacity":"0.3"},800);
          $('#proj_nav_window').delay(2000).addClass('flash');
          window.setTimeout(function() {
            $('#yarn_nav_button, #report_nav_button, #logo_nav_button, #user_button, #yarn_column, #report_column').animate({"opacity":"1"},800);
            $('#greywindow').animate({"opacity":"0"}, 800);
            $('#proj_nav_window').removeClass('flash');
        }, 5000);
          window.setTimeout(function() {
            $('#proj_nav_window').css({"border":"none"});
          }, 6000);
        });

$('#report_nav_locate_icon').unbind('click').bind('click', function() {
          $('#report_column').css({"z-index":"1000000000"});
          $('#greywindow').animate({"opacity":"1"}, 800);
          $('#report_nav_window').css({"background-color":"rgba(255,255,255,0)", "border":"3px solid white"});
          $('#report_column_window').css({"background-color":"transparent"});
          $('#yarn_nav_button, #proj_nav_button, #logo_nav_button, #user_button, #yarn_column, #proj_column').animate({"opacity":"0.3"},800);
          $('#report_nav_window').delay(2000).addClass('flash');
          window.setTimeout(function() {
            $('#yarn_nav_button, #proj_nav_button, #logo_nav_button, #user_button, #yarn_column, #proj_column').animate({"opacity":"1"},800);
            $('#greywindow').animate({"opacity":"0"}, 800);
            $('#report_nav_window').removeClass('flash');
        }, 5000);
          window.setTimeout(function() {
            $('#report_nav_window').css({"border":"none"});
          }, 6000);
        });

  function fnConfirmTutExit() {
    $("#dialog-confirm").html("<br>Whoa there, speedy...<br><br>Are you sure you want to move on before reading the brief introduction to each navigation icon?<br><br>This will be your only opportunity to do so.");

    // Define the Dialog and its properties.
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Confirm",
        height: 250,
        width: 400,
        buttons: {
            "I'm ready to begin": function () {
                $(this).dialog('close');
                callback(true);
            },
                "Give me another minute": function () {
                $(this).dialog('close');
                callback(false);
            }
        }
    });
}

function fnNewProjPage() {
    $("#dialog-confirm").html("<br>To the Yarn page, it's time to begin!");

    // Define the Dialog and its properties.
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Add Yarn",
        height: 250,
        width: 400,
        buttons: {
            "Yarn": function () {
                $(this).dialog('close');
                callback(true);
            },
                
        }
    });
}

$('#btnOpenDialog').click(function() {
  if (y>=1 && p>=1 && r>=1) {
      // console.log('redirecting to new yarn page');
      fnNewProjPage();
    }
    else {
      // console.log('tut item missed');
      fnConfirmTutExit();
    }
  });

function callback(value) {
    if (value) {
        alert("To New Yarn");
    } else {
        
    }
}



  // $('#yarn_ex_icon').click(function() {
  //   $('#yarn_head').animate({opacity:1,}, 100);
  //   $('#yarn_head').animate({"width":"80%",}, 1000);
  //   $('#yarn_head').animate({"top":"20px","height":"350px",}, 1000);
  //   $('#yarn_head > .popout').delay(2000).animate({opacity:1,}, 1000);
  // });

  // $('#proj_ex_icon').click(function() {
  //   $('#proj_head').animate({opacity:1,}, 100);
  //   $('#proj_head').animate({"width":"80%",}, 1000);
  //   $('#proj_head').animate({"top":"20px","height":"350px",}, 1000);
  //   $('#proj_head > .popout').delay(2000).animate({opacity:1,}, 1000);
  // });

  // $('#report_ex_icon').click(function() {
  //   $('#report_head').animate({opacity:1,}, 100);
  //   $('#report_head').animate({"width":"80%",}, 1000);
  //   $('#report_head').animate({"top":"20px","height":"350px",}, 1000);
  //   $('#report_head > .popout').delay(2000).animate({opacity:1,}, 1000);
  // });


});





