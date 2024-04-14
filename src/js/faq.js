import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const btnAcc = document.querySelectorAll('.ac-trigger');

new Accordion('.faq-list', {
  duration: 700,
  showMultiple: false,
  onOpen: currentElement => {
    currentElement.querySelector('.ac-trigger').classList.add('button-roll');
  },
  onClose: currentElement => {
    currentElement.querySelector('.ac-trigger').classList.remove('button-roll');
  },
});

// const faqList = document.querySelector('.faq-list');
// const faqItems = document.querySelectorAll('.faq-li');
// const faqButtons = document.querySelectorAll('.fqa-btn-open');

// function toggleAccordion(event) {

//     const faqItem = event.currentTarget.closest('.faq-li');

//     const panel = faqItem.querySelector('.panel');

//     faqItem.classList.toggle('active');

//     if (panel.style.maxHeight === '0px' || panel.style.maxHeight === '') {
//         panel.style.maxHeight = panel.scrollHeight + 'px';
//     } else {
//         panel.style.maxHeight = '0';
//     }
// }

// faqButtons.forEach(button => {
//     button.addEventListener('click', toggleAccordion);
// });

// faqItems.forEach(faqItem => {
//     const panel = faqItem.querySelector('.panel');

//     panel.style.maxHeight = '0';
//     panel.style.overflow = 'hidden';
//     panel.style.transition = 'max-height 0.7s ease';
// });
