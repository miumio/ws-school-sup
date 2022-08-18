export const initSwipers = () => {
  // eslint-disable-next-line
  let swiper = [].concat(new Swiper('[data-swiper]', {
    speed: 1000,
    loop: true,
    direction: 'horizontal',
    effect: "fade",
    lazy: true,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },
    navigation: {
      nextEl: '[data-swiper] .swiper-button-next',
      prevEl: '[data-swiper] .swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
      waitForTransition: true,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // eslint-disable-next-line
      renderBullet: function (index, className) {
        return `<button type="button" aria-label="перейти к слайду №${index + 1}" class=${className}></button>`;
      },
    },
  }));
};
