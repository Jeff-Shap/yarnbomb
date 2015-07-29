$(document).ready(function() {


$('#lock-pic').unbind('mouseenter').bind('mouseenter',function(){
  console.log('open lock');
});

$('#lock-pic').unbind('mouseleave').bind('mouseleave',function(){
  console.log('close lock');
});

});