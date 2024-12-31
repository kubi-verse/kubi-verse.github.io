// Select the overlap image and body
const parallaxImage = document.querySelector(".header-overlap");
const body = document.body;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  // Parallax effect for the overlap image
  parallaxImage.style.transform = `translateY(${scrollPosition * -0.2}px)`;
});
