import Swiper from 'swiper/swiper-bundle.esm.js';
import 'swiper/swiper-bundle.css';

export const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
