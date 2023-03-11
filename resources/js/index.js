


// Fade In //

// JavaScript code to detect when the div is scrolled into view and add the 'show' class to fade it in
$(window).scroll(function() {
  $('.fade-in-from-left').each(function() {
    var elementPos = $(this).offset().left;
    var scrollPos = $(window).scrollLeft() + $(window).width();
    if (elementPos < scrollPos) {
      $(this).addClass('show');
    }
  });
});


$(window).scroll(function() {
  $('.fade-in-from-right').each(function() {
    var elementPos = $(this).offset().left + $(this).outerWidth();
    var scrollPos = $(window).scrollLeft() + $(window).width();
    if (elementPos < scrollPos) {
      $(this).addClass('show');
    }
  });
});