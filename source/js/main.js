import $ from 'jquery';
window.$ = window.jQuery = $;

import Mediabox from 'mediabox';
import Parallax from 'scroll-parallax';
const { WOW } = require('wowjs');

import './nav-search';
import './nav';
require('./nav-slider');
require('./reviews-slider');

let p = new Parallax('.js-parallax', {
  intensity: 20,
  center: 0.5
}).init();

Mediabox('.js-popup-video');

let wow = new WOW({
  boxClass: 'animation',
  animateClass: 'is-animated'
});
wow.init();

setTimeout(() => {
  document.querySelector('body').classList.add('is-loaded');
}, 100);
