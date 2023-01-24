$(document).ready(function() {
  $('.search').click(function() {
    $('.menu').toggleClass('hidden');
    $('.search-bar').toggleClass('hidden');
    $('.overlay').toggleClass('hidden');
  });
});