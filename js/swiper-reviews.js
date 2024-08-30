import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperReviews = new Swiper('.swiper-reviews', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 30,
      slidesPerView: 1,
    },

    768: {
      spaceBetween: 36,
      slidesPerView: 1.2,
      simulateTouch: false,
    },

    1440: {
      spaceBetween: 112,
      slidesPerView: 1.6,
      simulateTouch: false,
    },
  },
});

export {swiperReviews};
