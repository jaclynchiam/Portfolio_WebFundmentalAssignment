document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
  
    elements.forEach((el) => observer.observe(el));
  
    // Lightbox effect for images
    document.querySelectorAll('.royalscreen-uiux,.login-page').forEach(img => {
      img.addEventListener('click', () => {
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox').style.display = 'flex';
      });
    });
  
    document.getElementById('lightbox').addEventListener('click', () => {
      document.getElementById('lightbox').style.display = 'none';
    });
  });