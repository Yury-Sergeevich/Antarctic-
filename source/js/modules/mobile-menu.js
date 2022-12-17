const toggleMenu = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.nav__list');
const logoMenu = document.querySelector('.logo__icon');
const headerWrapper = document.querySelector('.header__wrapper');
const navItem = document.querySelectorAll('.nav__item');


mobileMenu.classList.add('nav__list--close');
toggleMenu.classList.add('menu-toggle--no-js');
headerWrapper.classList.remove('header__wrapper--no-js');

function controlsScroll() {
  navItem.forEach((item) => {
    item.addEventListener('click', function () {
      if (item) {
        document.body.style.overflow = '';
        mobileMenu.classList.remove('nav__list--open');
        logoMenu.classList.remove('logo__icon--open');
        headerWrapper.classList.remove('header__wrapper--open');
        toggleMenu.classList.remove('black');
        toggleMenu.classList.remove('open');
      } else {
        document.body.style.overflow = 'hidden';
      }
    });
  });
}


function openMobMenu() {
  if (toggleMenu) {
    toggleMenu.addEventListener('click', function () {
      if (mobileMenu.classList.contains('nav__list--open')) {
        toggleMenu.classList.remove('open');
        mobileMenu.classList.remove('nav__list--open');
        logoMenu.classList.remove('logo__icon--open');
        headerWrapper.classList.remove('header__wrapper--open');
        document.body.style.overflow = '';
      } else {
        headerWrapper.classList.add('header__wrapper--open');
        toggleMenu.classList.add('open');
        toggleMenu.classList.add('black');
        mobileMenu.classList.add('nav__list--open');
        logoMenu.classList.add('logo__icon--open');
        controlsScroll();
        document.body.style.overflow = 'hidden';
      }
    });
  }
}

export {openMobMenu};
