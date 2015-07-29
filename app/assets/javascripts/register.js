$(document).ready(function() {


$('#lockdiv').unbind('mouseenter').bind('mouseenter',function(){
  console.log('open lock');
  $('#lock-top-pic').animate({'top':'-=20px'}, 1000);
  $('#lock-bottom-pic').animate({'bottom':'-=210px'}, 1000);
  $('#privacy_statement').delay(800).animate({opacity: 1.0,}, 1500);
});

$('#lockdiv').unbind('mouseleave').bind('mouseleave',function(){
  console.log('close lock');
  $('#privacy_statement').delay(100).animate({opacity: 0,}, 800);
  $('#lock-top-pic').delay(700).animate({'top':'-=-20px'}, 1000);
  $('#lock-bottom-pic').delay(700).animate({'bottom':'-=-210px'}, 1000);
});

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