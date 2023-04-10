$(document).ready(function() {
});

$('.dark').click( function(){
    $('html').attr('data-bs-theme','dark');
    $('.dark').addClass('invisible');
    $('.light').removeClass('invisible');
    $('.light').addClass('text-light');
})

$('.light').click( function(){
    $('html').attr('data-bs-theme','light');
    $('.light').addClass('invisible');
    $('.dark').removeClass('invisible');
})