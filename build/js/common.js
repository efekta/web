$(document).ready(function(){
    /*========================
     mob menu
     =======================*/
    $(".menu-toggle").on('click', function() {
        $(this).toggleClass("on");
        $('.nav-list').toggleClass("show");
        // $('.nav').toggleClass("nav_hide");
        $('body').toggleClass('overflow');
    });
    jQuery(window).width() <= 992 && $(".nav-list li").on('click', function() {
        $('.menu-toggle').removeClass("on");
        $('.nav-list').removeClass("show");
        // $('.nav').removeClass("nav_hide");
        $('body').removeClass('overflow');
    });
});
