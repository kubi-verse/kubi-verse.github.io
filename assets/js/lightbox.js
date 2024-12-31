const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const caption = document.getElementById("caption");

const images = document.querySelectorAll(".gallery-grid img");

function openLightbox(index) {
  lightbox.style.display = "flex";
  lightboxImage.src = images[index].src;
  caption.textContent = images[index].alt;
}

function closeLightbox() {
  lightbox.style.display = "none";
}
