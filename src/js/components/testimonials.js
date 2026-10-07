import Splide from '@splidejs/splide';

export function initTestimonials() {
  document.querySelectorAll('.js--testimonials-slider').forEach((element) => {
    new Splide(element, {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      focus: 'center',
      gap: 24,
      padding: 20,
      speed: 300,
      mediaQuery: 'min',
      breakpoints: {
        540: { padding: 30 },
        768: { fixedWidth: 606, gap: 50, padding: 0 },
      },
      classes: {
        page: 'splide__pagination__page s-testimonials__page',
      },
      reducedMotion: { speed: 0 },
    }).mount();
  });
}
