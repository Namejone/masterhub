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
  slidesPerView: 1.2,
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
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.8,
      spaceBetween: 30,
    },
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


// header-nav
document.addEventListener("DOMContentLoaded", function () {
  const bar = document.querySelector(".header__bar");
  const menu = document.querySelector(".header__menu");

  // Toggle menu on button click
  bar.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from closing the menu immediately
    if (menu.classList.contains("-left-full")) {
      menu.classList.remove("-left-full");
      menu.classList.add("left-0");
    } else {
      menu.classList.remove("left-0");
      menu.classList.add("-left-full");
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !bar.contains(event.target)) {
      menu.classList.remove("left-0");
      menu.classList.add("-left-full");
    }
  });
});
