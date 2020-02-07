$('#about').click(function(e) {
    e.preventDefault();
    $('.about').toggle();
})

$('#projects').click(function(e) {
    e.preventDefault();
    $('section').toggle();
    $('html').animate({
        scrollTop: $('section').offset().top},
        'slow');
})

$('#contact').click(function(e) {
    e.preventDefault();
    $('.contact').toggle();
})
