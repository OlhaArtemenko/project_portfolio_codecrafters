import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const buttonAccordion = document.querySelector('.accordion-button-up-down');

new Accordion('.accordion-info-list', {
  duration: 700,
  showMultiple: false,
  openOnInit: [0],
  onOpen: currentElement => {
    currentElement.querySelector('.ac-trigger').classList.add('button-roll');
  },
  onClose: currentElement => {
    currentElement.querySelector('.ac-trigger').classList.remove('button-roll');
  },
});

const swiper = new Swiper('.skills-container', {
  modules: [Navigation, Keyboard, Mousewheel],
  loop: true,
  speed: 700,
  grabCursor: true,
  allowTouchMove: true,
  navigation: {
    nextEl: '.skills-button-next',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
  mousewheel: {
    invert: false,
  },
  on: {
    reachEnd: function () {
      this.slideNext();
    },
  },
});
