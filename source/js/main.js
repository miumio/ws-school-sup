import { initModals } from './modules/modals/init-modals';
import { initSwipers } from './modules/init-swiper';
import { initNewsSwiper } from './modules/init-news-slider';
import { toggleText } from './modules/toggle-text';
import { initScrollToTop } from './modules/init-scroll-to-top';
import { initTabs } from './modules/init-tabs';
import { initMenu } from './modules/init-menu';
import { initHeader } from './modules/init-header';

window.addEventListener('DOMContentLoaded', () => {

  initSwipers();
  initNewsSwiper();
  toggleText();
  initScrollToTop();
  initTabs();
  initMenu();
  initModals();
  initHeader();

});
