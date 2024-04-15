const form = document.querySelector('.form');
const modal = document.getElementById('modalW');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = document.querySelector('.input-footer[type="email"]').value;

  const data = {
    email: email,
  };

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        modal.classList.remove('visually-hidden');
        document.addEventListener('keydown', closeModalOnEscape);
        modal.addEventListener('click', closeModalOnBackdrop);
        const modalBtn = document.querySelector('.modal-button');
        modalBtn.addEventListener('click', closeModalOnClick);
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
      alert(
        'An error occurred when sending it. Please check your internet connection.'
      );
    });
}

function closeModalOnClick() {
  modal.classList.add('visually-hidden');
  document.removeEventListener('keydown', closeModalOnEscape);
  modal.removeEventListener('click', closeModalOnBackdrop);
}

function closeModalOnBackdrop(event) {
  if (event.target === modal) {
    modal.classList.add('visually-hidden');
    document.removeEventListener('keydown', closeModalOnEscape);
    modal.removeEventListener('click', closeModalOnBackdrop);
  }
}

function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    modal.classList.add('visually-hidden');
    document.removeEventListener('keydown', closeModalOnEscape);
    modal.removeEventListener('click', closeModalOnBackdrop);
  }
}
