const likes = document.querySelectorAll('.js-like');
const likesArr = [].slice.call(likes);
console.log(likes, likesArr);

likesArr.forEach(like => {
  like.addEventListener('click', e => {
    like.classList.add('is-liked');
    console.log('liked');
  });
});
