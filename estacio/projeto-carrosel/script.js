let carouselImages = document.querySelector('.carousel-images');
let images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
let totalImages = images.length;
let onImgYearly = document.querySelector("#image-yearly");
let textYearly = document.querySelector("#image-yearly p");


function createObjectCard(height, text)
{
  this.height = height,
  this.text = text
}

let imgYearly = new createObjectCard("500px", `Beneficio`);
let imgMonthly = new createObjectCard("500px", `Olar`);
let imgWeekly = new createObjectCard("500px", `oiiii`);


function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

function updateCarousel() {
  let newPosition = -currentIndex * 100 + '%';
  carouselImages.style.transform = `translateX(${newPosition})`;
}


function imgSwitchOn()
{
  textYearly.innerHTML = imgYearly.text;
  onImgYearly.style.height = imgYearly.height;
}

function imgSwitchOff()
{
  textYearly.innerHTML = ``;
  onImgYearly.style.height = ``;
}


onImgYearly, .addEventListener("mouseenter", imgSwitchOn);
onImgYearly.addEventListener("mouseout", imgSwitchOff);
setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos
