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

const arrow = document.querySelector('.arrow');

window.addEventListener('scroll', () => {
  const scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition > 700) {
    arrow.classList.add('show');
  } else {
    arrow.classList.remove('show');
  }
});
