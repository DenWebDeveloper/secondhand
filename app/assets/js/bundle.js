(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(function () {
    const catalogHeight = $('.catalog').height();
    const viewportWidth = $(window).width();
    $('#banner-carousel .carousel-item').css({
        height: viewportWidth < 768 ? catalogHeight / 2 : catalogHeight
    })
});

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 0,
    slidesPerGroup: 3,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 320px
        340: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        // when window width is <= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        // when window width is <= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
        }
    }
});
},{}]},{},[1]);
