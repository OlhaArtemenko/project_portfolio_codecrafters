import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import { getReviews } from './api.js';

const reviewsList = document.querySelector('.reviews-list');

getReviews()
  .then(response => {
    if (!response.statusText === 'OK') {
      throw new Error('Empty response data');
    }

    renderReviews(response.data, reviewsList, true);
  })
  .catch(() => {
    showMessage('Server error. Please try again!');
    renderReviews([], reviewsList, false);
  });

function renderReviews(reviews, reviewList, ok) {
  if (ok) {
    const reviewHTML = reviews
      .map(
        ({ _id, author, avatar_url, review }) =>
          `<li class="reviews-list-item swiper-slide" id="review-${_id}" aria-label="review">
          <picture>
            <source srcset="${avatar_url}" 
              type="image/jpeg">
              <img 
                class="review-photo" 
                src="${avatar_url}" 
                alt="${author} photo" 
                width="48" 
                height="48" 
                loading="lazy"
              />
          </picture>
          <h3 class="review-author" aria-label="reviews author name">${author}</h3>
          <div class="review-text-container">
            <p class="review-text" aria-label="review text">${review}</p>
          </div>
          
      </li>`
      )
      .join('');

    reviewList.insertAdjacentHTML('beforeend', reviewHTML);
  } else {
    reviewList.insertAdjacentHTML('beforeend', `<h3>Not found :(</h3>`);
  }
}

function showMessage(message) {
  const popup = document.createElement('div');
  popup.className = 'popup-server-error';
  popup.textContent = message;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add('activate-popup-animation');
  }, 50);

  setTimeout(() => {
    popup.classList.remove('activate-popup-animation');
  }, 4000);

  setTimeout(popup.remove.bind(popup), 5000);
}

const reviewsSwiper = new Swiper('.reviews-swiper', {
  modules: [Navigation, Keyboard],
  speed: 800,
  grabCursor: true,
  allowTouchMove: true,
  direction: 'horizontal',
  watchOverflow: true,
  spaceBetween: 16,

  navigation: {
    nextEl: '.next-review-btn',
    prevEl: '.prev-review-btn',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
    },
    1440: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
  },
});

const prevButton = document.querySelector('.prev-review-btn');
const nextButton = document.querySelector('.next-review-btn');

function setButtonStyles() {
  const isPrevDisabled = prevButton.disabled;
  const isNextDisabled = nextButton.disabled;

  prevButton.style.color = isPrevDisabled ? '#fafafa33' : '#fafafa';
  prevButton.style.borderColor = isPrevDisabled ? '#fafafa33' : '#fafafa';

  nextButton.style.color = isNextDisabled ? '#fafafa33' : '#fafafa';
  nextButton.style.borderColor = isNextDisabled ? '#fafafa33' : '#fafafa';
}

setButtonStyles();

prevButton.addEventListener('click', setButtonStyles);
nextButton.addEventListener('click', setButtonStyles);
