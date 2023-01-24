$(document).ready(function() {
  let temp = '';
  $('.numbers > div').not('.delete').click(function() {
    if (temp.length < 4) {
      temp += $(this).children().html().trim();
      $('.pin > li:eq('+ (temp.length - 1) +')').addClass('bg-white');
    }
  });

  $('.delete').on('click', function() {
    temp = temp.slice(0, -1);
    $('.pin > li:eq('+ (temp.length) +')').removeClass('bg-white');
  });
});