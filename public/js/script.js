// Initialize AOS animations
AOS.init();

// Smooth scrolling for navigation links
$(document).ready(function(){
    var headerHeight = $('header').outerHeight();
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - headerHeight
            }, 1000);
        }
    });
});