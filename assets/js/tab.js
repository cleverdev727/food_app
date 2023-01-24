$(document).ready(function() {
  $('ul.tab > li').click(function() {
    $(this).parent().children('.bg-gray-difficult').toggleClass('hover:bg-number-bg bg-gray-difficult');
    $(this).toggleClass('bg-gray-difficult hover:bg-number-bg');
  });
  
  $('ul.orange-tab > li').click(function() {
    $(this).parent().children('.bg-orange-difficult').toggleClass('bg-orange-difficult text-white hover:bg-gray-difficult');
    $(this).toggleClass('bg-orange-difficult text-white hover:bg-gray-difficult');
  });
});