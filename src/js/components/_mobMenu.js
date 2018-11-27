import { ACTIVE } from '../constants';

$('.js-mob-search-toggler').click(function(e) {
  if (!$(this).hasClass('js-mob-search-submit')) {
    e.preventDefault();
  }

  $('.js-header').toggleClass(ACTIVE);
  $(this).addClass('js-mob-search-submit');
  $(this).removeClass('js-mob-search-toggler');
});

$('.js-mob-search-submit').click(function(e) {
  $(this)
    .closest('form')
    .submit();
});
