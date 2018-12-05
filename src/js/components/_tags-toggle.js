import { ACTIVE, DOC, WIN } from '../constants';
import { mediaWidth } from '../utils';
// const tags = document.querySelectorAll('.js-tag');
// const tagsContainer = document.querySelector('.js-tags-container');

// const getDirection = function(el, e) {
//   let mousePos = e.clientX;
//   let xPos = el.offsetLeft;
//   let direction;
//   direction = mousePos - xPos > 100 ? 'right' : 'left';
//   return direction;
// };

// if (tags) {
//   const tagsArr = [].slice.call(tags);
//   tagsArr.forEach(tag => {
//     tag.addEventListener('mouseenter', e => {
//       tag.classList.remove('to-left', 'to-right');
//       let dir = getDirection(tag, e);
//       tag.classList.add(`from-${dir}`);
//     });
//     tag.addEventListener('mouseleave', e => {
//       tag.classList.remove('from-left', 'from-right');
//       let dir = getDirection(tag, e);
//       tag.classList.add(`to-${dir}`);
//     });
//   });

//   tagsContainer.addEventListener('mouseenter', e => {
//     if (e.target.classList.contains(ACTIVE)) return;
//     setTimeout(() => tagsContainer.classList.add('is-hoverable'), 200);
//     // tagsContainer.classList.add('is-hoverable');
//   });
//   tagsContainer.addEventListener('mouseleave', e => {
//     tagsContainer.classList.remove('is-hoverable');
//     tagsArr.forEach(tag => {
//       if (tag.classList.contains(ACTIVE)) return;
//       setTimeout(() => tag.classList.remove('to-left', 'to-right'), 400);
//     });
//   });
// }

// var movingLine = {
//   init: function init() {
//     this.el = $('.js-tags-container');
//     this.el.find('li').on('mouseover', this._move);

//     var line = this.el.find('.js-moving-bg');
//     var active = this.el.find('li.is-active');
//     var activeProp = {
//       width: active.outerWidth(),
//       offsetLeft: active.position().left
//     };

//     line.css({
//       width: activeProp.width + 'px',
//       left: activeProp.offsetLeft + 'px',
//       opacity: 1
//     });
//   },

//   _move: function _move() {
//     var $line = $(this).siblings('.js-moving-line');
//     var width = $(this).width();
//     var offsetLeft = $(this).position().left;

//     $line.css({
//       width: width + 'px',
//       left: offsetLeft + 'px'
//     });
//     console.log("I'm working");
//   }
// };

// movingLine.init();

DOC.ready(function() {
  WIN.on('load resize', function() {
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
