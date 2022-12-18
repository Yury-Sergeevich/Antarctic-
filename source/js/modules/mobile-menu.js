import {ScrollLock} from '../utils/scroll-lock';

const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav__item-link');
const scrollLock = new ScrollLock();

function controlsScrollElements() {
  navLinks.forEach((item) => {
    item.addEventListener('click', function () {
      if (item) {
        nav.classList.remove('nav--open');
        scrollLock.enableScrolling();
      }
    });
  });
}

function closedMenuEsc(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    nav.classList.remove('nav--open');
    scrollLock.enableScrolling();
  }
}

function activateMobileMenu() {
  if (menuToggle) {
    menuToggle.addEventListener('click', function (evt) {
      evt.preventDefault();
      nav.classList.toggle('nav--open');
      if (nav.classList.contains('nav--open')) {
        document.addEventListener('keydown', closedMenuEsc, controlsScrollElements);
        scrollLock.disableScrolling();
      } else {
        document.addEventListener('keydown', closedMenuEsc);
        scrollLock.enableScrolling();
      }
    });
  }
}

// mobileMenu.classList.add('nav__list--close');
// toggleMenu.classList.add('menu-toggle--no-js');
// headerWrapper.classList.remove('header__wrapper--no-js');

// function controlsScroll() {
//   navItem.forEach((item) => {
//     item.addEventListener('click', function () {
//       if (item) {
//         document.body.style.overflow = '';
//         mobileMenu.classList.remove('nav__list--open');
//         logoMenu.classList.remove('logo__icon--open');
//         headerWrapper.classList.remove('header__wrapper--open');
//         toggleMenu.classList.remove('black');
//         toggleMenu.classList.remove('open');
//       } else {
//         document.body.style.overflow = 'hidden';
//       }
//     });
//   });
// }


export {activateMobileMenu};
