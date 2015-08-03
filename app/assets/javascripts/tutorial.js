




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
      
    }
    else {
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
      
    }
    else {
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
      
    }
    else {
      $('#report_head > .popout').animate({opacity:0,}, 1000);
      $('#report_head').delay(1000).animate({"top":"150px","height":"0px",}, 1000);
      $('#report_head').animate({"width":"0%",}, 1000);
      $('#report_head').animate({opacity:0,}, 100);

    }

  r = r + 1;
  });

  $('#btnOpenDialog').unbind('click').bind('click', function() {
     console.log(y,p,r);
    
  });

  function fnConfirmTutExit() {
    $("#dialog-confirm").html("Whoa there, speedy...<br>Are you sure you want to move on before reading the brief introduction to each category?<br>This will be your only opportunity to do so.");

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
    $("#dialog-confirm").html("And we are off to the Projects page to enter your first project!");

    // Define the Dialog and its properties.
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Let's Add a New Project",
        height: 250,
        width: 400,
        buttons: {
            "To the Project Page": function () {
                $(this).dialog('close');
                callback(true);
            },
                
        }
    });
}

$('#btnOpenDialog').click(function() {
  if (y>=1 && p>=1 && r>=1) {
      console.log('redirecting to new project page');
      fnNewProjPage();
    }
    else {
      console.log('you missed one');
      fnConfirmTutExit();
    }
  });

function callback(value) {
    if (value) {
        alert("To the New Project Page!");
    } else {
        alert("Back to Tutorial");
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



