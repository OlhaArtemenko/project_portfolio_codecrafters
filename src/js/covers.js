// Функція, яка перевіряє, чи секція "Covers" відображається в області видимості користувача
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функція для виконання анімації
function animateElementOnScroll() {
  const covers = document.querySelector('#covers');
  const animateElements = document.querySelectorAll('.marquee-line');

  window.addEventListener('scroll', function () {
    animateElements.forEach(function (animateElement) {
      if (isInViewport(covers)) {
        animateElement.classList.add('animate');
      } else {
        animateElement.classList.remove('animate');
      }
    });
  });
}

// Виклик функції після завантаження сторінки
document.addEventListener('DOMContentLoaded', animateElementOnScroll);
