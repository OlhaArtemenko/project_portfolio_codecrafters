import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

document.addEventListener('DOMContentLoaded', function () {
  const WorkSwiper = new Swiper('.projects .swiper', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'disabled',
    },
    modules: [Navigation, Pagination],
  });

  // Функція для встановлення стилів кнопок перемикання
  function setButtonStyles() {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');

    const isPrevDisabled = prevButton.classList.contains('disabled');
    const isNextDisabled = nextButton.classList.contains('disabled');

    prevButton.style.color = isPrevDisabled ? '#fafafa33' : '#fafafa';
    prevButton.style.borderColor = isPrevDisabled ? '#fafafa33' : '#fafafa';

    nextButton.style.color = isNextDisabled ? '#fafafa33' : '#fafafa';
    nextButton.style.borderColor = isNextDisabled ? '#fafafa33' : '#fafafa';
  }

  setButtonStyles();

  // Додаємо обробник події для встановлення стилів при зміні слайда
  WorkSwiper.on('slideChange', function () {
    setButtonStyles();
  });
});
