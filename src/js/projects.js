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

const prevButtonPr = document.querySelector('.project-swiper-button-prev');
const nextButtonPr = document.querySelector('.project-swiper-button-next');

function setButtonStyles() {
  const isPrevDisabled = prevButtonPr.disabled;
  const isNextDisabled = nextButtonPr.disabled;

  prevButtonPr.style.color = isPrevDisabled ? '#fafafa33' : '#fafafa';
  prevButtonPr.style.borderColor = isPrevDisabled ? '#fafafa33' : '#fafafa';

  nextButtonPr.style.color = isNextDisabled ? '#fafafa33' : '#fafafa';
  nextButtonPr.style.borderColor = isNextDisabled ? '#fafafa33' : '#fafafa';
}

setButtonStyles();

prevButtonPr.addEventListener('click', setButtonStyles);
nextButtonPr.addEventListener('click', setButtonStyles);
