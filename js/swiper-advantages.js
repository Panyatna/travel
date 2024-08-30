import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperAdvantages = document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width > 1439) {
    new Swiper('.swiper-advantages', {
      modules: [Navigation],

      direction: 'horizontal',

      navigation: {
        nextEl: '.advantages-button-next',
        prevEl: '.advantages-button-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 2,
          initialSlide: 0,
          loopAdditionalSlides: 0,
          loopAddBlankSlides: false,
          loop: true,
        },
      },
    });
  };
});



export {swiperAdvantages};
