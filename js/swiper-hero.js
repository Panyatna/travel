import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiperHero = new Swiper('.swiper-hero', {

  modules: [Pagination],

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      spaceBetween: 20,
    },

    768: {
      spaceBetween: 40,
    },

    1440: {
      spaceBetween: 40,
      simulateTouch: false,
    },
  },
});

export {swiperHero};
