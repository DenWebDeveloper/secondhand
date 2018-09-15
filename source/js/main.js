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