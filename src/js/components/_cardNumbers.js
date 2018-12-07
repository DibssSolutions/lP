const cardNumbers = document.querySelectorAll('.js-card-number');
const cardNumbersArr = [].slice.call(cardNumbers);

cardNumbersArr.forEach(el => {
  el.addEventListener('keyup', e => {
    const val = el.value;
    if (val.length >= 4) {
      let next = el.nextElementSibling;
      if (next) {
        next.focus();
      } else {
        el.blur();
      }
    }
  });
});
