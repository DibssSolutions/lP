import { ACTIVE, DOC, WIN } from '../constants';
import { mediaWidth, isTouch } from '../utils';

DOC.ready(function() {
  WIN.on('load resize', function() {
    const tags = document.querySelector('.js-tags-container');
    if (!tags || isTouch()) return false;

    var activeEL = $('.js-tag.is-active');
    var activeTag = $('.js-tag.is-active .tag');
    var bg = $('.js-moving-bg');
    var $thisnav = activeEL.offset().left;
    const w = mediaWidth(768);

    if (!w) {
      $('.js-tag').hover(
        function() {
          var $left = $(this).offset().left - $thisnav;
          var $width = $(this).outerWidth();
          var $start = 0;
          bg.css({ left: $left, width: $width });
          activeTag.css({ color: 'black' });
        },
        function() {
          var $initwidth = $('.js-tag.is-active').outerWidth();
          bg.css({ left: '0', width: $initwidth });
          activeTag.css({ color: 'white' });
        }
      );
    }
  });
});
