import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.ac-faq-li');
  faqItems.forEach((faqItem, index) => {
    const panel = faqItem.querySelector('.ac-panel');
    panel.style.maxHeight = '0'; // Закрити панель
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

  // Додаємо обробник події прокрутки
  window.addEventListener('scroll', () => {
    // Перевіряємо, чи акордеон повністю видимий на екрані
    const isVisible = Array.from(faqItems).some(item => {
      const bounding = item.getBoundingClientRect();
      return bounding.top >= 0 && bounding.bottom <= window.innerHeight;
    });

    // Якщо акордеон не видно, закрити всі панелі
    if (!isVisible) {
      faqItems.forEach(faqItem => {
        const panel = faqItem.querySelector('.ac-panel');
        faqItem.classList.remove('active');
        panel.style.maxHeight = '0';
      });
    }
  });

  // Ініціалізація бібліотеки accordion-js
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
