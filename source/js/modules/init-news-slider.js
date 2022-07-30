export const initNewsSwiper = () => {
  // eslint-disable-next-line
  let swiper = new Swiper('[data-news-swiper]', {
    direction: 'horizontal',
    slideToClickedSlide: false,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // eslint-disable-next-line
      renderBullet: function (index, className) {
        return `<button type="button" aria-label="перейти к слайду №${index + 1}" class=${className}></button>`;
      },
    },
    allowTouchMove: true,
    breakpoints: {
      0: {
        slidesPerView: 1.15,
        spaceBetween: 4,
      },
      768: {
        slidesPerView: 3.3,
        spaceBetween: 8,
      },
    },
  });
};
