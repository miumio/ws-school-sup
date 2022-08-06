export const initScrollToTop = () => {
  const scrollToTopButton = document.querySelector('[data-scroll]');
  const breakpoint = window.matchMedia('(min-width:1023px)');

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

  // scrollToTopButton.onclick = function (e) {
  //   e.preventDefault();
  //   scrollToTop();
  // };

  document.addEventListener('click', (ev) => {
    if (ev.target.closest('.scroll-button') && breakpoint.matches) {
      scrollToTop();
    }
  });

};
