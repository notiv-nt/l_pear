const ESC_KEYCODE = 27;

let search = document.querySelector('.js-nav-search');
let navSearchContainer = document.querySelector('.js-nav-search-container');
let searchOpen = document.querySelector('.js-nav-search-open');
let searchClose = document.querySelector('.js-nav-search-close');
let searchInput = document.querySelector('.js-nav-seacrh-input');

searchInput.addEventListener('keyup', function(e) {
  if (e.keyCode === ESC_KEYCODE) {
    closeNav();
  }
});

function openNav() {
  let nav = document.querySelector('.js-nav');

  navSearchContainer.classList.add('is-open');
  nav.classList.add('is-search-open');

  setTimeout(() => {
    searchInput.focus();
  }, 200);
}

function closeNav() {
  let nav = document.querySelector('.js-nav');

  navSearchContainer.classList.remove('is-open');
  nav.classList.remove('is-search-open');
  searchInput.value = '';
}

searchOpen.addEventListener('click', function(e) {
  e.preventDefault();

  openNav();
});

searchClose.addEventListener('click', function(e) {
  e.preventDefault();

  closeNav();
});
