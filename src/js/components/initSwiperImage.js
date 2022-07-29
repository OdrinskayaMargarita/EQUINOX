import Swiper, {Navigation, Pagination, EffectFade} from 'swiper';

export default () => {
    Swiper.use([Navigation, Pagination]);
    const imageSlider = document.querySelector('.image-slider');
    const imageSwiper = imageSlider.querySelector('.swiper-container');
    const prev = imageSlider.querySelector('.swiper-button-prev');
    const next = imageSlider.querySelector('.swiper-button-next');

    let swiper = new Swiper(imageSwiper, {
        slidesPerView:1,
        speed: 500,
        spaceBetween: 20,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: next,
            prevEl: prev,
        },
    });

}
