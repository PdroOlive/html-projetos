let carouselImages = document.querySelector('.carousel-images');
let images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
let totalImages = images.length;
let imageYearlyOn = document.getElementById("img-anual");
let imageYearlyOff = document.getElementById("img-anual");

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  let newPosition = -currentIndex * 100 + '%';
  carouselImages.style.transform = `translateX(${newPosition})`;
}


function mouseOnImage()
{
  imageYearlyOn.innerText = `Oi`;

}

function mouseOffImage()
{
  
}




imageYearlyOn.addEventListener("mouseenter", mouseOnImage);
imageYearlyOff.addEventListener("mouseout", mouseOffImage);
setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos
