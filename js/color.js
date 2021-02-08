$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 700) {
        $('body').addClass('change-color');
        $('.primnav').addClass('change-color-nav');

    } else {
        $('body').removeClass('change-color');
        $('.primnav').removeClass('change-color-nav');
    }
});