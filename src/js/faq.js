import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.ac-faq-li');
  faqItems.forEach((faqItem, index) => {
    const panel = faqItem.querySelector('.ac-panel');
    if (index === 0) {
      // Перший елемоент за замовчуванням відкритий
      faqItem.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    } else {
      panel.style.maxHeight = '0';
    }
    panel.style.overflow = 'hidden';
    panel.style.transition = 'max-height 0.7s ease';
  });
  const faqButtons = document.querySelectorAll('.fqa-btn-open');
  function toggleAccordion(event) {
    const faqItem = event.currentTarget.closest('.ac-faq-li');
    const panel = faqItem.querySelector('.ac-panel');
    const isOpen = faqItem.classList.contains('active');
    faqItems.forEach(item => {
      if (item !== faqItem) {
        const otherPanel = item.querySelector('.ac-panel');
        item.classList.remove('active');
        otherPanel.style.maxHeight = '0';
      }
    });
    faqItem.classList.toggle('active');
    if (isOpen) {
      panel.style.maxHeight = '0';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
  faqButtons.forEach(button => {
    button.addEventListener('click', toggleAccordion);
  });
  new Accordion('.faq-list', {
    duration: 700,
    showMultiple: false,
    onOpen: currentElement => {
      currentElement.querySelector('.ac-trigger').classList.add('button-roll');
    },
    onClose: currentElement => {
      currentElement
        .querySelector('.ac-trigger')
        .classList.remove('button-roll');
    },
  });
});
