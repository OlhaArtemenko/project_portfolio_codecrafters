import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  const WorkSwiper = new Swiper('.projects .swiper', {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    navigation: {
      nextEl: '.projects-swiper-button-next',
      prevEl: '.projects-swiper-button-prev',
      disabledClass: 'disabled',
    },
    modules: [Navigation, Pagination],
  });
});
