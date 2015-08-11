// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(document).ready(function() {


    // BEGIN: User navbar dropdown
    $('#user_dropdown').mouseleave(function() {
      $(this).animate({opacity:0}, 3000);
      var t = setTimeout(function() {
        $('#user_btn_group').removeClass('open');
        $('#user_button').attr("aria-expanded","false");
        $('#user_dropdown').animate({opacity:1},100);
      },3200);
      
    $('#user_dropdown').mouseenter(function() {
      $(this).stop(true).animate({opacity:1},100);
      window.clearTimeout(t);
    });

  });
  // END: User navbar dropdown
    
});


