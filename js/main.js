$(function() {
    $('.toggle-menu').click(function() {
        //toggle the close menu
        $('.close').toggleClass('active');

        //toggle the hamburger
        $('.toggle-menu').toggleClass('active');

        //toggle the nav menu
        $('.menu').toggleClass('active');

        //toggle the h3 text
        $('h3').toggleClass('active');
    });

    $('.menu ul li a').click(function() {
        // hide the full screen nav menu 
        $('.menu').removeClass('active');

        //toggle the hamburger
        $('.toggle-menu').toggleClass('active');

        //remove the active class from the close menu
        $('.close').removeClass('active');

        //remove the active class from h3 text
        $('h3').removeClass('active');
        
        
    });
});