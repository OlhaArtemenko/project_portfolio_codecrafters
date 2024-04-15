import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';

const WorkSwiper = new Swiper('.project-swiper-div', {
  loop: false,
  speed: 800,

  navigation: {
    nextEl: '.project-swiper-button-next',
    prevEl: '.project-swiper-button-prev',
    disabledClass: 'disabled',
  },
  modules: [Navigation, Pagination],
});

// Функція для встановлення стилів кнопок перемикання
function setButtonStyles() {
  const prevButton = document.querySelector('.project-swiper-button-prev');
  const nextButton = document.querySelector('.project-swiper-button-next');

  const isPrevDisabled = prevButton.classList.contains('disabled');
  const isNextDisabled = nextButton.classList.contains('disabled');

  prevButton.style.color = isPrevDisabled ? '#fafafa33' : '#fafafa';
  prevButton.style.borderColor = isPrevDisabled ? '#fafafa33' : '#fafafa';

  nextButton.style.color = isNextDisabled ? '#fafafa33' : '#fafafa';
  nextButton.style.borderColor = isNextDisabled ? '#fafafa33' : '#fafafa';
}

setButtonStyles();

prevButton.addEventListener('click', setButtonStyles);
nextButton.addEventListener('click', setButtonStyles);
