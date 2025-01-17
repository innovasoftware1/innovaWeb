var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
      invert: false,
  },
  autoplay: {
      delay: 5000,
      disableOnInteraction: false, 
  },
  pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
  },
});
