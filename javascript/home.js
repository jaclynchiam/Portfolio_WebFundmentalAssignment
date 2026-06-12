// Contact Me button
document.getElementById('contactme-button').addEventListener('click', function () {
  window.location.href = 'contact.html';
});

// Project box float and redirect
const projectBoxes = document.querySelectorAll('.project-box');

projectBoxes.forEach(box => {
  box.addEventListener('click', () => {
    // Remove float-out from others
    projectBoxes.forEach(b => {
      if (b !== box) b.classList.remove('float-out');
    });
    // Toggle this box
    box.classList.toggle('float-out');
  });
});

// Redirect function
function goToPage(url) {
  window.location.href = url;
}

// Fade-in on scroll (IntersectionObserver)
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});

// Circular skill bars animation
document.querySelectorAll(".skill").forEach((skill, index) => {
  const percent = parseInt(skill.getAttribute('data-percentage'));
  const label = skill.getAttribute('data-label');
  const offset = 472 - (472 * percent / 100);

  skill.innerHTML = `
    <div class="outer">
      <div class="inner">
        <div class="number" id="number-${index}">0%</div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="160px" height="160px">
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#fcd303" />
          <stop offset="100%" stop-color="#fcd303" />
        </linearGradient>
      </defs>
      <circle 
        cx="80" cy="80" r="70"
        stroke-dasharray="472"
        stroke-dashoffset="472"
      />
    </svg>
    <p class="label">${label}</p>
  `;

  // Animate number
  let counter = 0;
  const number = document.getElementById(`number-${index}`);
  const interval = setInterval(() => {
    if (counter >= percent) {
      clearInterval(interval);
    } else {
      counter++;
      number.textContent = counter + "%";
    }
  }, 20);

  // Animate circle
  const circle = skill.querySelector("circle");
  setTimeout(() => {
    circle.style.strokeDashoffset = offset;
  }, 100);
});
