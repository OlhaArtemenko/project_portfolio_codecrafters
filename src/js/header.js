const menuButton = document.querySelector('.menu-btn-desctab');
const menuList = document.querySelector('.header-menu-list');


menuButton.addEventListener('click', function() {
    if (menuList.classList.contains('header-menu-list_active')) {
menuList.classList.remove('header-menu-list_active');
}   else {
menuList.classList.add('header-menu-list_active');
}
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.querySelector('.header-burger-btn');
    const menuContainer = document.querySelector('.header-menu-container');
    const closeBtn = document.querySelector('.menu-btn-close');
    const menuList = document.querySelector('.header-menu-list');
    const buttonLink = document.querySelector('.header-button-link');
  
    burgerBtn.addEventListener('click', function() {
      menuContainer.classList.toggle('is-open');
      burgerBtn.classList.toggle('visually-hidden');
      closeBtn.classList.remove('visually-hidden');
      buttonLink.classList.remove('btn-link-none');
      menuList.classList.remove('header-menu-list');
      menuList.classList.add('header-menu-list-mobile');
    });
  
    closeBtn.addEventListener('click', function() {
      menuContainer.classList.remove('is-open');
      burgerBtn.classList.remove('visually-hidden');
      closeBtn.classList.add('visually-hidden');
      closeBtn.classList.add('header-button-link-none');
      buttonLink.classList.add('btn-link-none');
      menuList.classList.remove('header-menu-list-mobile');
      menuList.classList.add('header-menu-list');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});