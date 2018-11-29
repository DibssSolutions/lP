const toggler = document.querySelector('.js-dd-trigger');
const tickets = document.querySelector('.js-dd-hidden');

if (toggler) {
  toggler.addEventListener('click', e => {
    e.preventDefault();
    tickets.classList.add('is-active');
  });
}
