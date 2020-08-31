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

    /**/
    $('#company-link_1').on('click', function() {
        $('#company_2').removeClass('open');
        $('#company_3').removeClass('open');
        $('#company_1').toggleClass('open')
    });
    /**/
    $('#company-link_2').on('click', function() {
        $('#company_1').removeClass('open');
        $('#company_3').removeClass('open');
        $('#company_2').toggleClass('open');
    });
    /**/
    $('#company-link_3').on('click', function() {
        $('#company_1').removeClass('open');
        $('#company_2').removeClass('open');
        $('#company_3').toggleClass('open')
    });
});
