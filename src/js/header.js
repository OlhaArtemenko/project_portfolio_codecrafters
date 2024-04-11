const menuButton = document.querySelector('.menu-btn-desctab');
const menuList = document.querySelector('.header-menu-list');

menuButton.addEventListener('click', function() {
    if (menuList.classList.contains('header-menu-list_active')) {
menuList.classList.remove('header-menu-list_active');
}   else {
menuList.classList.add('header-menu-list_active');
}
});