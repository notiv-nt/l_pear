import 'owl.carousel';

let $slider = $('.js-hero-slider').owlCarousel({
  center: true,
  items: 5,
  margin: 0,
  loop: true,
  smartSpeed: 450,
  mouseDrag: false,
  autoWidth: true,
  dots: false,
  nav: false
});

$slider.on('click', 'img', function(e) {
  let $this = $(this);

  let closest = $this.closest('.owl-item');
  if (closest.hasClass('is-prev-1') || closest.hasClass('is-prev-2')) {
    $slider.trigger('prev.owl.carousel');
  }

  if (closest.hasClass('is-next-1') || closest.hasClass('is-next-2')) {
    $slider.trigger('next.owl.carousel');
  }
});

function onChange() {
  $slider.find('.owl-item').removeClass('is-prev-1 is-prev-2 is-next-1 is-next-2');

  setTimeout(() => {
    let $current = $slider.find('.owl-item.center');

    // prev items
    $current
      .prev()
      .addClass('is-prev-1')
      .prev()
      .addClass('is-prev-2');

    // next items
    $current
      .next()
      .addClass('is-next-1')
      .next()
      .addClass('is-next-2');
  }, 0);
}

$slider.on('change.owl.carousel', onChange);

onChange();
