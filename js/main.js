$(window).on('load', function () {
    // loaded
    const pageBody  = $('body');
    setTimeout (function(){
        pageBody.addClass('loaded');
    });
});

$(document).ready(function($){

    // readmore
    $('.readmore-text').readmore({
        speed: 300,
        moreLink: '<a href="#" class="readmore-link"></a>',
        lessLink: '<a href="#" class="readless-link"></a>'
    });

    // fancybox
    $('[data-src]').fancybox({
        autoFocus: false
    });

    // niceSelect
    $('select:not(.ignore)').niceSelect();

    // parallax
    $('.section-parallax').parallax();

    // ScrollReveal
    ScrollReveal().reveal('.welcome-block__img,.partners-block__item,.products-block__media,.demo-block__img,.partners-block__title', {
        scale: 1,
        duration: 1500,
        interval: 30,
        mobile: false,
    });

    // ScrollReveal
    ScrollReveal().reveal('.section__title,.products-block__txt > *,.catalog-block__item,.faq-block__item,.demo-block__txt > *,.welcome-block__txt > *,.faq-block__title', {
        scale: 1,
        duration: 1500,
        interval: 30,
        mobile: false,
        origin: 'bottom',
        distance: '50px',
    });

    // slider
    var mySwiper = new Swiper('.stats-slider', {
        direction: 'vertical',
        slidesPerView: 2,
        slidesPerGroup: 1,
        speed: 200,
        loop: true,
        navigation: {
            nextEl: '.stats-button-next',
            prevEl: '.stats-button-prev',
        },
        breakpoints:{
            575:{
                slidesPerView: 1,
            },
        }
    });

    // slider
    var partnersSlider = $('.partners-slider');
    partnersSlider .each(function(){
        var partnersSwiper = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 0,
            speed: 500,
            loop: true,
            navigation: {
                nextEl: $(this).parents('.slider-block').find('.swiper-button-next')[0],
                prevEl: $(this).parents('.slider-block').find('.swiper-button-prev')[0],
            },
        });
    });

    function toggleMenu() {
        $('.header-menu').toggleClass('active');
        $('body').toggleClass('active');
        $('.menu-btn').toggleClass('active');
    }

    // menu
    $('.menu-btn').click(function(){
        toggleMenu();
    });

    $('.header-menu a').click(function () {
        toggleMenu();
    })

    $('.overlay').click(function(){
        console.log("fired overlay click")
        $('.header-menu').removeClass('active');
        $('.menu-btn').removeClass('active');
        $('body').removeClass('active');
        $(this).removeClass('active');
    });

    $('.header-menu__pull').click(function(){
        $(this).toggleClass('active');
        $(this).next('ul').toggleClass('active');
    });

    // header fixed
    $(window).scroll(function() {
        var $full = $('.header').height();
        if ($(this).scrollTop() > $full){
            $('.header').addClass("sticky");
        }
        else{
            $('.header').removeClass("sticky");
        }
    });

    $(".faq-block__item .faq-block__pull").click(function() {
        if($(this).next("div").is(":visible")){
            $(this).removeClass('active');
            $(this).next("div").slideUp(400);
        } else {
            $('.faq-block__item .faq-block__pull').removeClass('active');
            $(this).addClass('active');
            $(".faq-block__item .faq-block__hidden").slideUp(400);
            $(this).next("div").slideToggle(400);
        }

    });

});

$(function(){
    var onInputClass = "onFormControl";
    var showInputClass = "showFormControl";

    $(".form-control").bind("checkval",function(){
        var labelFC = $(this).parents('.input-field').find('.form-control__label');
        if(this.value !== ""){
            labelFC.addClass(showInputClass);
        } else {
            labelFC.removeClass(showInputClass);
        }
    }).on("keyup",function(){
        $(this).trigger("checkval");
    }).on("focus",function(){
        $(this).parents('.input-field').find('.form-control__label').addClass(onInputClass);
    }).on("blur",function(){
        $(this).parents('.input-field').find('.form-control__label').removeClass(onInputClass);
    }).trigger("checkval");

    $("#signinForm").on('submit', function (e) {
        e.preventDefault();

        $("#error-block").css("display", "block");
    })
});