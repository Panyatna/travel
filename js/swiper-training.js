import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperTraining = new Swiper('.swiper-training', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.training-button-next',
    prevEl: '.training-button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 20,
      slidesPerView: 1,
      initialSlide: 2,
    },

    768: {
      spaceBetween: 20,
      slidesPerView: 3,
    },

    1440: {
      spaceBetween: 20,
      slidesPerView: 4,
      simulateTouch: false,
    },
  },
});

export {swiperTraining};
