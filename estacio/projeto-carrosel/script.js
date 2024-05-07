let carouselImages = document.querySelector('.carousel-images');
let images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
let totalImages = images.length;

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  let newPosition = -currentIndex * 100 + '%';
  carouselImages.style.transform = `translateX(${newPosition})`;
}

setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos
