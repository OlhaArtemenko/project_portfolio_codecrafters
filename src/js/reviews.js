import iziToast from 'izitoast';
import Swiper from 'swiper';
import 'swiper/css';
import { getReviews } from './api.js';


function renderReviews(reviews, reviewList, ok) {
  if (ok) {
    const reviewHTML = reviews
      .map(
        ({ author, avatar_url, review }) =>
          `<li class="reviews-list-item swiper-slide">
            <img 
              class="reviews-person-img"
              src="${avatar_url}"
              alt="${author} photo"
              width="48"
              height="48"
              loading="lazy">
            <div class="reviews-text-content">
              <h3 class="reviews-person-name">${author}</h3>
              <p class="reviews-text-p">${review}</p>
            </div>
          </li>`
      )
      .join('');
    reviewList.innerHTML = reviewHTML;
  } else {
    reviewList.innerHTML = `<h3>Not found :(</h3>`;
  }
}
