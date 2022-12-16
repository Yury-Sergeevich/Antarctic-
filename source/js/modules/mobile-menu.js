const toggleMenu = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav__list');
const logoMenu = document.querySelector('.logo__icon');
const headerWrapper = document.querySelector('.header__wrapper');

mobileMenu.classList.add('nav__list--close');
toggleMenu.classList.add('menu-toggle--no-js');
headerWrapper.classList.remove('header__wrapper--no-js');

function openMobMenu() {
  toggleMenu.addEventListener('click', function () {
    if (mobileMenu.classList.contains('nav__list--open')) {
      toggleMenu.classList.remove('open');
      mobileMenu.classList.remove('nav__list--open');
      logoMenu.classList.remove('logo__icon--open');
      headerWrapper.classList.remove('header__wrapper--open');
    } else {
      headerWrapper.classList.add('header__wrapper--open');
      toggleMenu.classList.add('open');
      toggleMenu.classList.add('black');
      mobileMenu.classList.add('nav__list--open');
      logoMenu.classList.add('logo__icon--open');
    }
  });
}

export {openMobMenu};
