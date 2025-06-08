document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll("#construction-plumbing span");
  
    // GSAP Timeline
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
      scale: 1.5, // Make the text bigger
      opacity: 1,
      stagger: 0.05, // Delay between each letter's animation
      ease: "power4.inOut",
      duration: 0.75
    });
  
    // Function to generate random values
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
  });