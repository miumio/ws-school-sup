export const initScrollToTop = () => {
  const scrollToTopButton = document.querySelector('[data-scroll]');

  if (!scrollToTopButton) {
    return;
  }

  const COORD_Y = 400;

  const scrollFunc = () => {
    let y = window.scrollY;

    if (y > COORD_Y) {
      scrollToTopButton.classList.add('is-active');
    } else {
      scrollToTopButton.classList.remove('is-active');
    }
  };

  window.addEventListener('scroll', scrollFunc);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
  };
};
