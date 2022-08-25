export const initHeader = () => {

  const header = document.querySelector('.header');
  const root = document.documentElement;
  let width = root.clientWidth;

  const getHeaderHeight = () => {
    if (header) {
      const height = getComputedStyle(header).height;
      root.style.setProperty('--header-height', height);
    }
  };

  getHeaderHeight();

  window.addEventListener('resize', () => {
    if (root.clientWidth !== width) {
      width = root.clientWidth;
      getHeaderHeight();
    }
  });
};
