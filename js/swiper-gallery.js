import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperGallery = document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 1439) {
    new Swiper('.swiper-gallery', {
      modules: [Navigation],

      direction: 'horizontal',
      loop: true,

      navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
      },

      breakpoints: {
        320: {
          spaceBetween: 5,
          slidesPerView: 2,
        },

        768: {
          spaceBetween: 5,
          slidesPerView: 3,
          simulateTouch: false,
        },
      },
    });
  };
});



export {swiperGallery};
