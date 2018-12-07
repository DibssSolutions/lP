import 'jquery-mask-plugin';

$(document).ready(function() {
  $('.js-date-mask').mask('99/99', { placeholder: '99/99' });
  $('.js-card-number').mask('0000');
});
