import { ACTIVE } from '../constants';

$('.js-mob-search-open').click(function(e) {
  $('.js-header').addClass(ACTIVE);
});

$('.js-mob-search-close').click(function(e) {
  $('.js-header').removeClass(ACTIVE);
});
