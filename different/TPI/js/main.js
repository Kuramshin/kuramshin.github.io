
// scrollup button
jQuery( document ).ready(function() {
    jQuery('#scrollup div').mouseover( function(){
        jQuery( this ).animate({opacity: 0.65},100);
    }).mouseout( function(){
        jQuery( this ).animate({opacity: 1},100);
    }).click( function(){
        window.scroll(0 ,0);
        return false;
    });

    jQuery(window).scroll(function(){
        if ( jQuery(document).scrollTop() > 0 ) {
            jQuery('#scrollup').fadeIn('fast');
        } else {
            jQuery('#scrollup').fadeOut('fast');
        }
    });
});

//header bottom nav menu

jQuery(document).ready(function () {
    jQuery('.header-bottom-menu > div').click(function () {
        jQuery('.news').toggleClass('hide');
        jQuery('.about_us').toggleClass('hide');

        jQuery('.header-bottom').toggleClass('header-bottom-menu_active');
    });
});