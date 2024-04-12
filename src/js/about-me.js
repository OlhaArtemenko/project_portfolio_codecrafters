import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

function itemsAccordion() {
  const buttonAccordion = document.querySelector('.accordion-button-up-down');

  new Accordion('.accordion-info-list', {
    duration: 700,
    showMultiple: true,
    openOnInit: [0],
    onOpen: currentElement => {
      currentElement.querySelector('.ac-trigger').classList.add('button-roll');
    },
    onClose: currentElement => {
      currentElement
        .querySelector('.ac-trigger')
        .classList.remove('button-roll');
    },
  });
}

function addAboutMeSwiper() {
  const swiper = new Swiper('.skills-container', {
    modules: [Navigation, Keyboard, Mousewheel],

    navigation: {
      nextEl: '.skills-button-next',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      375: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1440: {
        slidesPerView: 6,
      },
    },
    mousewheel: {
      invert: true,
    },
    loop: true,
  });
}

