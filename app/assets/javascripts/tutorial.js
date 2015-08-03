




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
      $('#next_step').delay(20000).animate({opacity:1,},500);
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

  $('#next_step').unbind('click').bind('click', function() {
     console.log(y,p,r);
    if (y>=1 && p>=1 && r>=1) {
      console.log('redirecting to new project page');
    }
    else {
      console.log('you missed one');
      $(function() {
        $( "#dialog" ).dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "Delete all items": function() {
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      }
    });
      });
    }
  });

  function fnOpenNormalDialog() {
    $("#dialog-confirm").html("Confirm Dialog Box");

    // Define the Dialog and its properties.
    $("#dialog-confirm").dialog({
        resizable: false,
        modal: true,
        title: "Modal",
        height: 250,
        width: 400,
        buttons: {
            "Yes": function () {
                $(this).dialog('close');
                callback(true);
            },
                "No": function () {
                $(this).dialog('close');
                callback(false);
            }
        }
    });
}

$('#btnOpenDialog').click(fnOpenNormalDialog);

function callback(value) {
    if (value) {
        alert("Confirmed");
    } else {
        alert("Rejected");
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



