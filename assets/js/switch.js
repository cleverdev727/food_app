$(document).ready(function() {
  $('.switch').click(function() {
    $(this).children().toggleClass('ml-[15px]');
    $(this).toggleClass('bg-gray-difficult bg-yellow-difficult hover:bg-gray-difficult-hover');
  });

  $('.button-switch > div').click(function() {
    $(this).parent().children('.bg-white').toggleClass('bg-white border-[0.5px] border-button-border shadow-button-shadow');
    $(this).toggleClass('bg-white border-[0.5px] border-button-border shadow-button-shadow');
  });
});