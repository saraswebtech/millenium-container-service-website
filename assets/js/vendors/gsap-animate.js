// Initialize GSAP and SplitText
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the .section-title class
  const titles = document.querySelectorAll(".section-title");

  // Loop through each title and create an animation
  titles.forEach((title) => {
    // Split the text into characters
    const splitText = new SplitText(title, { type: "words,chars" });
    const chars = splitText.chars;

    // Set initial state for each character
    gsap.set(chars, { x: 50, autoAlpha: 0 }); // Use autoAlpha instead of opacity

    // Create the animation timeline with ScrollTrigger
    gsap.timeline({
      scrollTrigger: {
        trigger: title,         // Trigger animation when this title comes into view
        start: "top 90%",       // Start animation when the top of the title reaches 80% of the viewport
        end: "bottom 20%",      // End animation when the bottom of the title reaches 20% of the viewport
        once: true              // Play the animation only once
      },
    }).to(chars, {
      x: 0,                     // Move characters to their original position
      autoAlpha: 1,             // Fade in characters using autoAlpha
      duration: 1,              // Duration of the animation
      stagger: 0.03             // Stagger the animation for each character
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-fill");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const percentage = target.getAttribute("data-percentage");
        const progressText = target.querySelector(".progress-text");

        gsap.to(target, {
          width: percentage + "%",
          duration: 1.5,
          ease: "power2.out"
        });

        gsap.to(progressText, {
          innerHTML: percentage + "%",
          x: percentage + "%",
          duration: 1.5,
          ease: "power2.out",
          snap: { innerHTML: 1 }
        });

        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => observer.observe(bar));
});




gsap.registerPlugin(ScrollTrigger);
// Function to apply animation if the element exists
function applyAnimation(selector, animationConfig) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    const duration = element.getAttribute('data-animation-duration') || 1;
    const delay = element.getAttribute('data-animation-delay') || 0;
    gsap.from(element, {
      ...animationConfig,
      duration: parseFloat(duration),
      delay: parseFloat(delay),
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        once: true // Ensure the animation triggers only once
      }
    });
  });
}
// Animation From Bottom to Top
applyAnimation(".animate-bottom-to-top", {
  opacity: 0,
  y: 50,
});

// Animation From Top to Bottom
applyAnimation(".animate-top-to-bottom", {
  opacity: 0,
  y: -50,
});

// Animation From Left to Right
applyAnimation(".animate-left-to-right", {
  opacity: 0,
  x: -50,
});

// Animation From Right to Left
applyAnimation(".animate-right-to-left", {
  opacity: 0,
  x: 50,
});

// Animation From Right to Left
applyAnimation(".animate-zoom-in", {
  opacity: 0,
  scale: 0.2,
});

// Animation From Right to Left
applyAnimation(".animate-fade", {
  opacity: 0,
});

const portfolioList = document.querySelector('.portfolio-list');
const imageContainer = document.querySelector('.image-container');

if (portfolioList && imageContainer) {
  const portfolioItems = portfolioList.querySelectorAll('.portfolio-item');
  const defaultImage = imageContainer.querySelector('.background-img').src; // Store the default background image

  portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      const newImage = document.createElement('img');
      newImage.src = item.getAttribute('data-img');
      newImage.classList.add('background-img');
      newImage.style.opacity = 0;
      newImage.style.transform = 'scale(1.2)'; // Initial zoom out scale
      imageContainer.appendChild(newImage);

      gsap.to(newImage, { opacity: 1, scale: 1.1, duration: 0.3, ease: ' Linear.ease' });
    });

    item.addEventListener('mouseleave', function () {
      const images = imageContainer.querySelectorAll('.background-img');
      if (images.length > 1) {
        const lastImage = images[images.length - 1];
        gsap.to(lastImage, {
          opacity: 0, scale: 1, duration: 0.3, ease: ' Linear.ease', onComplete: () => {
            imageContainer.removeChild(lastImage);
          }
        });
      }
    });
  });
}


// JavaScript for GSAP scroll animation
document.addEventListener('DOMContentLoaded', function () {
  // Check if the service section and image exist
  const serviceSection = document.querySelector('.section-service');
  const serviceImage = document.getElementById('service-image');

  if (serviceSection && serviceImage) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(serviceImage, {
      scrollTrigger: {
        trigger: serviceSection,
        start: 'top 50%', // Adjust start point as needed
        end: 'bottom top',
        scrub: true, // Smooth scrubbing
      },
      x: '70%', // Move to 10% of the container's width
      duration: 2, // Duration of the animation
    });
  }
});

// Split the text into span letters
const textEl = document.getElementById("logo-text");
const text = textEl.textContent;
textEl.textContent = "";

text.split("").forEach((char, i) => {
  const span = document.createElement("span");
  span.classList.add("letter");
  span.textContent = char;
  textEl.appendChild(span);
});

// Animate wave with GSAP
gsap.to(".letter", {
  y: -10,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  stagger: {
    each: 0.1,
    repeat: -1,
    yoyo: true
  }
});

// Slide-out preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    gsap.to("#preloader", {
      y: "-100%",
      duration: 0.5,
      ease: "power2.inOut",
      opacity: 0,
      onComplete: () => {
        document.querySelector("#preloader").style.display = "none";
        document.querySelector(".main-wrapper").style.display = "block";
      }
    });
  }, 1000);
});