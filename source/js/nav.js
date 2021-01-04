let nav = document.querySelector('.js-nav');
let navOpen = document.querySelector('.js-nav-open');
let navClose = document.querySelector('.js-nav-close');

navOpen.addEventListener('click', () => {
  nav.classList.add('is-open');
});

navClose.addEventListener('click', () => {
  nav.classList.remove('is-open');
});
