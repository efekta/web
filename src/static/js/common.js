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
        $('#company_1').toggleClass('open');
        // $('.coaching-company-item').addClass('open');
    });
    /**/
    $('#company-link_2').on('click', function() {
        $('#company_1').removeClass('open');
        $('#company_3').removeClass('open');
        $('#company_2').toggleClass('open');
        // $('.coaching-company-item').addClass('open');
    });
    /**/
    $('#company-link_3').on('click', function() {
        $('#company_1').removeClass('open');
        $('#company_2').removeClass('open');
        $('#company_3').toggleClass('open');
        // $('.coaching-company-item').addClass('open');
    });


    /**/
    $('#coaching-company-link_1').on('click', function() {
        $('#coaching-company_2').removeClass('open');
        $('#coaching-company_3').removeClass('open');
        $('#coaching-company_1').toggleClass('open');
        // $('#coaching-company-item_1').addClass('open');
    });
    /**/
    $('#coaching-company-link_2').on('click', function() {
        $('#coaching-company_1').removeClass('open');
        $('#coaching-company_3').removeClass('open');
        $('#coaching-company_2').toggleClass('open');
        // $('#coaching-company-item_2').addClass('open');
    });
    /**/
    $('#coaching-company-link_3').on('click', function() {
        $('#coaching-company_1').removeClass('open');
        $('#coaching-company_2').removeClass('open');
        $('#coaching-company_3').toggleClass('open');
        // $('#coaching-company-item_3').addClass('open');
    });
});
