// const form = document.querySelector('.form');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(document.getElementById('form'));

//   fetch('https://portfolio-js.b.goit.study/api/requests', {
//     method: 'POST',
//     body: formData,
//   })
//     .then(response => {
//       if (response.ok) {
//         document.getElementById('modalW').classList.remove('visually-hidden');
//         document.addEventListener('keydown', function(event) {
//           if (event.key === 'Escape') {
//             document.getElementById('modalW').classList.add('visually-hidden');
//           }
//         });
//         const modalBtn = document.querySelector('.modal-button');
//         modalBtn.addEventListener('click', function() {
//           document.getElementById('modalW').classList.add('visually-hidden');
//         });
//         form.reset();
//       } else {
//         alert('An error occurred when sending it. Please try again.');
//       }
//     })
//     .catch(error => {
//       alert('An error occurred when sending it. Please check your internet connection.');
//     });
// }


// import axios from 'axios';
// import { getRequest } from './api.js';

// const form = document.querySelector('.form');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const formData = new FormData(document.getElementById('form'));

//   axios.post('https://portfolio-js.b.goit.study/api/requests', formData)
//     .then(response => {
//       if (response.status === 200) {
//         document.getElementById('modalW').classList.remove('visually-hidden');
//         document.addEventListener('keydown', function(event) {
//           if (event.key === 'Escape') {
//             document.getElementById('modalW').classList.add('visually-hidden');
//           }
//         });
//         const modalBtn = document.querySelector('.modal-button');
//         modalBtn.addEventListener('click', function() {
//           document.getElementById('modalW').classList.add('visually-hidden');
//         });
//         form.reset();
//       } else {
//         alert('An error occurred when sending it. Please try again.');
//       }
//     })
//     .catch(error => {
//       alert('An error occurred when sending it. Please check your internet connection.');
//     });
// }



import axios from 'axios';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(document.getElementById('form'));

  axios.post('https://portfolio-js.b.goit.study/api/requests', formData)
    .then(response => {
      if (response.status === 200) {
        document.getElementById('modalW').classList.remove('visually-hidden');
        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') {
            document.getElementById('modalW').classList.add('visually-hidden');
          }
        });
        const modalBtn = document.querySelector('.modal-button');
        modalBtn.addEventListener('click', function() {
          document.getElementById('modalW').classList.add('visually-hidden');
        });
        form.reset();
      } else {

        throw new Error('An error occurred when sending it. Please try again.');
      }
    })
    .catch(error => {
      alert('An error occurred when sending it. Please check your internet connection.');
    });
}