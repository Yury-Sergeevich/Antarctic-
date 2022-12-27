import {ScrollLock} from '../utils/scroll-lock';

const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.nav__item-link');
const closeOverlay = document.querySelector('.nav__overlay');
const noJsMenu = document.querySelector('.nav__overlay-nojs');
const scrollLock = new ScrollLock();

noJsMenu.classList.remove('nav__overlay-nojs');

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

closeOverlay.addEventListener('click', (evt) => {
  evt.stopPropagation();
  let target = evt.target;
  if (target === closeOverlay) {
    if (nav.classList.contains('nav--open')) {
      nav.classList.remove('nav--open');
      scrollLock.enableScrolling();
    }
  }
});

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
        document.addEventListener('keydown', closedMenuEsc);
        scrollLock.disableScrolling();
        controlsScrollElements();
      } else {
        document.addEventListener('keydown', closedMenuEsc);
        scrollLock.enableScrolling();
      }
    });
  }
}

export {activateMobileMenu};
