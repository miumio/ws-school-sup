export const toggleText = () => {

  document.addEventListener('click', (ev) => {
    const container = ev.target.closest('[data-toggle]');

    if (ev.target.closest('[data-toggle-button]')) {
      container.classList.toggle('is-open');
    }
  });
}
