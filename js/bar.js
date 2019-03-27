$(document).ready(function () {
    $('.skill-icons').children('.active').each(function(i) {
      var row = $(this);
      setTimeout(function() {
        row.css('background','#FC5C03');
      }, 100*i);
    });
  });