document.addEventListener("DOMContentLoaded", function () {
    // GSAP Shatter Text Animation for "Construction Plumbing"
    const letters = document.querySelectorAll("#construction-plumbing span");

    const tl = gsap.timeline({
        repeat: -1, // Infinite loop
        repeatDelay: 0.65, // Delay between repeats
        yoyo: true // Reverse animation on repeat
    });

    // Randomize initial positions
    letters.forEach((letter) => {
        gsap.set(letter, {
            x: getRandom(-500, 500),
            y: getRandom(-500, 500),
            rotation: getRandom(-720, 720),
            scale: 0,
            opacity: 0
        });
    });

    // Animate letters to their original positions and scale them up
    tl.to(letters, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1, // Reset scale to normal size, not bigger as per Apple style
        opacity: 1,
        stagger: 0.05, // Delay between each letter's animation
        ease: "power4.out", // Changed ease for a smoother arrival
        duration: 0.75
    });

    // Function to generate random values
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

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
});