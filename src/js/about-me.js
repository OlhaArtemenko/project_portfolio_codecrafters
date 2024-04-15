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
  slidesPerView: 'auto',
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
    init: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    },
    slideChange: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    },
  },
});
// Add event listener for 'next' button
const nextButton = document.querySelector('.skills-button-next');
nextButton.addEventListener('click', function () {
  const visibleSlides = swiper.slides.filter(slide => slide.isVisible());
  const isEnd = swiper.isEnd && visibleSlides.length === swiper.slides.length;

  if (isEnd || visibleSlides.length === swiper.slides.lengthVisible) {
    swiper.slideTo(0); // Перехід до першого елемента
  } else {
    swiper.slideNext(); // Виклик методу slideNext() для переміщення наступного слайда
  }
});
