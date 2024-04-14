// import axios from 'axios';
// const form = document.querySelector('.form');
// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const email = document.querySelector('.input-footer[type="email"]').value;
//   const message = document.getElementById('message').value;

//   const formData = {
//     email: email,
//     message: message,
//   };

//   axios
//     .post('https://portfolio-js.b.goit.study/api/requests', formData)
//     .then(response => {
//       if (response.status === 200) {
//         document.getElementById('modalW').classList.remove('visually-hidden');
//         document.addEventListener('keydown', function (event) {
//           if (event.key === 'Escape') {
//             document.getElementById('modalW').classList.add('visually-hidden');
//           }
//         });
//         const modalBtn = document.querySelector('.modal-button');
//         modalBtn.addEventListener('click', function () {
//           document.getElementById('modalW').classList.add('visually-hidden');
//         });
//         form.reset();
//       } else {
//         throw new Error('An error occurred when sending it. Please try again.');
//       }
//     })
//     .catch(error => {
//       alert(
//         'An error occurred when sending it. Please check your internet connection.'
//       );
//     });
// }


const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = document.querySelector('.input-footer[type="email"]').value;

  const data = {
    email: email
  };

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
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
        return response.json();
      } else {
        throw new Error('An error occurred when sending it. Please try again.');
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      alert('An error occurred when sending it. Please check your internet connection.');
    });
}