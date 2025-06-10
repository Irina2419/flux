document.addEventListener("DOMContentLoaded", function () {
  // Auto Update Year in Footer
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Hide the navbar when scrolling
  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY; // Track last scroll position

  window.addEventListener("scroll", function () {
    const currentScrollY = window.scrollY;

    // Hide navbar when scrolling down, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      navbar.classList.add("nav-hide");
    } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
      // Show if scrolling up or if at the top
      navbar.classList.remove("nav-hide");
    }
    lastScrollY = currentScrollY; // Update last scroll position
  });

  // Function to apply scaling effect to interactive blocks (carousel and video)
  function applyInteractiveBlockScaling(blockSelector) {
    const block = document.querySelector(blockSelector);
    if (block) {
      window.addEventListener('scroll', function () {
        const rect = block.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Calculate how much of the block is in the viewport
        let visible = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
        let percentVisible = visible / rect.height;

        // Clamp scale between 0.98 and 1.01 for a subtle effect
        // Apple's effect is very subtle, often just a slight "pop" or "sink"
        let scale = 0.98 + 0.03 * percentVisible; // (max_scale - min_scale) * percentVisible + min_scale

        block.style.transform = `scale(${scale})`;
      });
    }
  }

  // Apply scaling to the carousel on the WunderFloor page (assuming it uses .interactive-block.carousel-card)
  applyInteractiveBlockScaling('.interactive-block.carousel-card');

  // Apply scaling to the new video card on the home page
  applyInteractiveBlockScaling('.interactive-block.video-card');

});
