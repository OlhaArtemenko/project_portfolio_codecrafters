import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
document.addEventListener('DOMContentLoaded', function () {
  const WorkSwiper = new Swiper('.projects .swiper', {
    loop: false,
    navigation: {
      nextEl: '.project-swiper-button-next',
      prevEl: '.project-swiper-button-prev',
    },
    modules: [Navigation, Pagination],
  });

  function setButtonStyles() {
    const prevButton = document.querySelector('.project-swiper-button-prev');
    const nextButton = document.querySelector('.project-swiper-button-next');

    const isFirstSlide = WorkSwiper.isBeginning;
    const isLastSlide = WorkSwiper.isEnd;

    if (isFirstSlide) {
      prevButton.classList.add('disabled');
    } else {
      prevButton.classList.remove('disabled');
    }

    if (isLastSlide) {
      nextButton.classList.add('disabled');
    } else {
      nextButton.classList.remove('disabled');
    }
  }

  setButtonStyles();

  // Додаємо обробник події для встановлення стилів при зміні слайда
  WorkSwiper.on('slideChange', function () {
    setButtonStyles();
  });
});
