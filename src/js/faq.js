import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const faqList = document.querySelector('.faq-list');
const faqItems = document.querySelectorAll('.faq-li');
const faqButtons = document.querySelectorAll('.fqa-btn-open');


function toggleAccordion(event) {
    
    const faqItem = event.currentTarget.closest('.faq-li');
    
    const panel = faqItem.querySelector('.panel');

    
    faqItem.classList.toggle('active');

    
    if (panel.style.display === 'none' || panel.style.display === '') {
        panel.style.display = 'block';
    } else {
        panel.style.display = 'none';
    }
}


faqButtons.forEach(button => {
    button.addEventListener('click', toggleAccordion);
});


faqItems.forEach(faqItem => {
    const panel = faqItem.querySelector('.panel');
    panel.style.display = 'none';
});
