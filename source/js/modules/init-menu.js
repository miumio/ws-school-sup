export const initMenu = () => {

  document.addEventListener('click', (ev) => {
    const nav = ev.target.closest('.main-nav');

    if (ev.target.closest('[data-toggler]')) {
      nav.classList.toggle('is-open');
    }
  });
}
