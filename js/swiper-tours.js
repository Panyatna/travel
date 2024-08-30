import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperTours = new Swiper('.swiper-tours', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.tours-button-next',
    prevEl: '.tours-button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
    },

    768: {
      spaceBetween: 18,
      slidesPerView: 2,
    },

    1440: {
      spaceBetween: 30,
      slidesPerView: 3,
      simulateTouch: false,
    },
  },
});

export {swiperTours};
