var heroSLider = new Swiper('.hero-slider', {
  // Common options
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  speed: 700,
  centeredSlides: true,
  autoplay: {
    delay: 113000,
    disableOnInteraction: false,
  },
})
var showcaseSlider = new Swiper('.showcase__slider', {
  // Common options
  loop: true,
  spaceBetween: 24,
  slidesPerView: 2.8,
  speed: 700,
  centeredSlides: false,
  autoplay: {
    delay: 113000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.s-next',
    prevEl: '.s-prev',
  },
})
var showcaseSlider = new Swiper('.testimonial__slider', {
  // Common options
  loop: true,
  spaceBetween: 24,
  slidesPerView: 1,
  speed: 700,
  centeredSlides: false,
  autoplay: {
    delay: 113000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.t-next',
    prevEl: '.t-prev',
  },
})
