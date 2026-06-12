let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

// Show specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

// Go to next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Go to previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Initialize first slide after page load
window.onload = function () {
  showSlide(currentSlide);
};



//animate the skills bar
window.addEventListener("load", function () {
  const fills = document.querySelectorAll(".fill");
  fills.forEach(fill => {
    const percent = fill.getAttribute("data-percent");
    fill.style.width = percent;
  });
});



// Fade-in on scroll
function handleScrollFadeIn() {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 50;

    if (isVisible) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollFadeIn);
window.addEventListener("load", handleScrollFadeIn); // run on page load too
