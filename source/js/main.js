$(function () {
    const catalogHeight = $('.catalog').height();
    const viewportWidth = $(window).width();
    $('#banner-carousel .carousel-item').css({
        height: viewportWidth < 768 ? catalogHeight / 2 : catalogHeight
    })
});

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});