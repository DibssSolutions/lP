const likes = document.querySelectorAll('.js-like');
const likesArr = [].slice.call(likes);

likesArr.forEach(like => {
  like.addEventListener('click', e => {
    like.classList.add('is-liked');
  });
});
