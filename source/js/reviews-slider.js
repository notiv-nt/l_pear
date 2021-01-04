import 'owl.carousel';

let $slider = $('.js-reviews-slider').owlCarousel({
  items: 1,
  loop: true,
  smartSpeed: 450,
  // mouseDrag: false,
  // dots: false,
  autoHeight: true,
  nav: false,
  dotsContainer: '.js-reviews-dots'
});
