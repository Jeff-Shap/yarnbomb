$(document).ready(function() {

  // FORM HELPERS
  $('#user_name').unbind('focusin').bind('focusin',function() {
    console.log('name - in');
    $('#name_bubble').css({"display":"inline-block"});
  });
  $('#user_name').unbind('focusout').bind('focusout',function() {
    console.log('name - out');
    $('#name_bubble').css({"display":"none"});
  });

  $('#user_email').unbind('focusin').bind('focusin',function() {
    console.log('name - in');
    $('#email_bubble').css({"display":"inline-block"});
  });
  $('#user_email').unbind('focusout').bind('focusout',function() {
    console.log('name - out');
    $('#email_bubble').css({"display":"none"});
  });

  $('#user_password').unbind('focusin').bind('focusin',function() {
    console.log('name - in');
    $('#password_bubble').css({"display":"inline-block"});
  });
  $('#user_password').unbind('focusout').bind('focusout',function() {
    console.log('name - out');
    $('#password_bubble').css({"display":"none"});
  });

  $('#profbutton').click(function() {
    console.log('click');
  });




  // PRIVACY STATEMENT FOR PC
  // $('#lockdiv').unbind('mouseenter').bind('mouseenter',function(){
  //   $('#lock-top-pic').animate({'top':'-=20px'}, 1000);
  //   $('#lock-bottom-pic').animate({'bottom':'-=210px'}, 1000);
  //   $('#privacy_statement').delay(800).animate({opacity: 1.0,}, 1500);
  // });

  // $('#lockdiv').unbind('mouseleave').bind('mouseleave',function(){
  //   $('#privacy_statement').delay(800).animate({opacity: 0,}, 800);
  //   $('#lock-top-pic').delay(1800).animate({'top':'-=-20px'}, 1000);
  //   $('#lock-bottom-pic').delay(1800).animate({'bottom':'-=-210px'}, 1000);
  // });

  

  // PRIVACY STATEMENT FOR MOBILE
  var i = 0

  $('#lockdiv').unbind('click').bind('click',function(){
    if (i%2==0) {
      $('#lock-top-pic').animate({'top':'-=20px'}, 1000);
      $('#lock-bottom-pic').animate({'bottom':'-=210px'}, 1000);
      $('#privacy_statement').delay(800).animate({opacity: 1.0,}, 1500);
    }
    else {
      $('#privacy_statement').delay(100).animate({opacity: 0,}, 800);
      $('#lock-top-pic').delay(700).animate({'top':'-=-20px'}, 1000);
      $('#lock-bottom-pic').delay(700).animate({'bottom':'-=-210px'}, 1000);
    }

  i = i + 1;
  });






});