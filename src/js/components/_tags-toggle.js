import { ACTIVE } from '../constants';

const tags = document.querySelectorAll('.js-tag');
const tagsContainer = document.querySelector('.js-tags-container');

const getDirection = function(el, e) {
  let mousePos = e.clientX;
  let xPos = el.offsetLeft;
  let direction;
  direction = mousePos - xPos > 100 ? 'right' : 'left';
  return direction;
};

if (tags) {
  const tagsArr = [].slice.call(tags);
  tagsArr.forEach(tag => {
    tag.addEventListener('mouseenter', e => {
      tag.classList.remove('to-left', 'to-right');
      let dir = getDirection(tag, e);
      tag.classList.add(`from-${dir}`);
    });
    tag.addEventListener('mouseleave', e => {
      tag.classList.remove('from-left', 'from-right');
      let dir = getDirection(tag, e);
      tag.classList.add(`to-${dir}`);
    });
  });

  tagsContainer.addEventListener('mouseenter', e => {
    if (e.target.classList.contains(ACTIVE)) return;
    setTimeout(() => tagsContainer.classList.add('is-hoverable'), 200);
    // tagsContainer.classList.add('is-hoverable');
  });
  tagsContainer.addEventListener('mouseleave', e => {
    tagsContainer.classList.remove('is-hoverable');
    tagsArr.forEach(tag => {
      if (tag.classList.contains(ACTIVE)) return;
      setTimeout(() => tag.classList.remove('to-left', 'to-right'), 400);
    });
  });
}
