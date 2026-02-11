"use strict";

/* ::::::::::::::::::::
:: GLobal Javascript ::
::::::::::::::::::::::: */

// ==== Sticky Menu ====
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky-menu", window.scrollY > 0);
});


// ==== Scroll to Top ====
let mybutton = document.querySelector(".scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.transform = "scale(1)";
  } else {
    mybutton.style.transform = "scale(0)";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}



// ==== Mobile Menu ====
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  const subcategory = category.querySelector('.subcategory');
  category.addEventListener('click', () => {
    subcategory.classList.toggle('active');
  });
});

// === Pricing Toggle Button ===
function toggleSwitch() {
  var month = document.querySelectorAll(".month");
  var annual = document.querySelectorAll(".annual");
  for (var i = 0; i < month.length; i++) {
    if (document.getElementById("toggle").checked == true) {
      month[i].classList.add("hidden");
      annual[i].classList.remove("hidden");
    } else {
      month[i].classList.remove("hidden");
      annual[i].classList.add("hidden");
    }
  }
}

// ================================Animate Interaction on Scroll ==================================
JOS.init({
  // disable: false, // Disable JOS gloabaly | Values :  'true', 'false'
  // debugMode: true, // Enable JOS debug mode | Values :  'true', 'false'
  passive: false, // Set the passive option for the scroll event listener | Values :  'true', 'false'

  once: true, // Disable JOS after first animation | Values :  'true', 'false' || Int : 0-1000
  animation: "fade-up", // JOS global animation type | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  // animationInverse: "static", // Set the animation type for the element when it is scrolled out of view | Values :  'fade', 'slide', 'zoom', 'flip', 'fade-right', 'fade-left', 'fade-up', 'fade-down', 'zoom-in-right', 'zoom-in-left', 'zoom-in-up', 'zoom-in-down', 'zoom-out-right', 'zoom-out-left', 'zoom-out-up', 'zoom-out-down', 'flip-right', 'flip-left', 'flip-up', 'flip-down, spin, revolve, stretch, "my-custom-animation"
  timingFunction: "ease", // JOS global timing function | Values :  'ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'steps()', 'cubic-bezier()', 'my-custom-timing-function'
  //mirror : false, // Set whether the element should animate back when scrolled out of view | Values :  'true', 'false'
  threshold: 0, // Set gloabal the threshold for the element to be visible | Values :  0-1
  delay: 0.3, // Set global the delay for the animation to start | Values :  0,1,2,3,4,5
  duration: 0.5, // Set global the duration for the animation playback | Values :  flota : 0-1 & int : 0,1,2,3,4,5

  // startVisible: "true", // Set whether the element should animate when the page is loaded | Values :  'true', 'false' || MS : 0-10000
  scrollDirection: "down", // Set the scroll direction for the element to be visible | Values :  'up', 'down', 'none'
  //scrollProgressDisable: true // disable or enable scroll callback function | Values :  'true', 'false'
  // intersectionRatio: 0.4, // Set the intersection ratio between which the element should be visible | Values :  0-1 (automaticaly set)
  // rootMargin_top: "0%", // Set by which percent the element should animate out (Recommended value between 10% to -30%)
  // rootMargin_bottom: "-50%", // Set by which percent the element should animate out (Recommended value between -10% to -60%)
  rootMargin: "0% 0% 5% 0%", // Set the root margin for the element to be visible | Values :  _% _% _% _%  (automaticaly set)
});

/* ::::::::::::::::::::
:: Template Javascript ::
::::::::::::::::::::::: */
// Testimonial Slider - 1
const heroSliderOne = new Swiper('.hero-slider-1', {
  // Default parameters
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  speed: 2000,
  autoplay: {
    reverseDirection: true,
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    direction: "vertical",
    el: '.swiper-pagination',
    clickable: true,
  },

  on: {
    init: function () {
      animateText(this.slides[this.activeIndex]);
    },
    slideChange: function () {
      animateText(this.slides[this.activeIndex]);
    },
  },

});

// Function to animate text
function animateText(slide) {
  const heroTitle = slide.querySelector('.hero-title');
  if (heroTitle) {
    const splitText = new SplitText(heroTitle, { type: 'chars, words, lines' });
    gsap.from(splitText.chars, {
      duration: 0.5,
      opacity: 0,
      y: 50,
      stagger: 0.05,
      ease: 'power2.out',
    });
  }
}
// Testimonial Slider - 1
const testimonialOne = new Swiper('.testimonial-one', {
  // Default parameters
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

});

// Blog Slider - 2
const blogSliderOne = new Swiper('.blog-slider-1', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },

});

 //>> Wow Animation Start <<//
        new WOW().init();

const projectSliderOne = new Swiper('.project-slider-1', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },

  // If we need pagination
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },

});

// Service Slider Slider - 1
const serviceSliderOne = new Swiper('.service-slider-1', {
  slidesPerView: 1,
  loop: true,
  // spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

});

const projectSlider3 = new Swiper(".project-slider-3", {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
      navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

const testimonialSlider5 = new Swiper(".testimonail-slider-5", {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
      navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
    breakpoints: {
        991: {
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
        },
        400: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
});

const testimonialContentSlider = new Swiper(".testimonial-content-slider", {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
      navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },

});

const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
      navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

});

// Client Slider - 1
const clientOne = new Swiper('.client-one', {
  // Default parameters
  slidesPerView: 1,
  loop: true,
  speed: 3000,
  spaceBetween: 80,
  autoplay: {
    reverseDirection: true,
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1600: {
      slidesPerView: 6,
    },
  },
});


 document.addEventListener('DOMContentLoaded', function () {
      const image = document.getElementById('zoomImg');

      if (!image) return; // Safety check

      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const zoomLevel = 1 + scrollTop / 1000;

        image.style.transform = `scale(${zoomLevel})`;
      });
    });