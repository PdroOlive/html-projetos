let carouselImages = document.querySelector('.carousel-images');
let images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
let totalImages = images.length;
let onImgYearly = document.querySelector("#image-yearly");
let textYearly = document.querySelector("#image-yearly ul");
let onImgMonthly = document.querySelector("#image-monthly");
let textMonthly = document.querySelector("#image-monthly ul");
let onImgWeekly = document.querySelector("#image-weekly");
let textWeekly = document.querySelector("#image-weekly ul");
let activeModal = document.getElementById("container-modal");
let mainOn = document.getElementById("container-main");


function createObjectCard(height, text)
{
    this.height = height,
    this.text = text
}

let imgYearly = new createObjectCard("500px", `Beneficio`);
let imgMonthly = new createObjectCard("500px", `Olar`);
let imgWeekly = new createObjectCard("500px", `oiiii`);


function nextImage() 
{
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function updateCarousel() 
{
    let newPosition = -currentIndex * 100 + '%';
    carouselImages.style.transform = `translateX(${newPosition})`;
}


function imgSwitchOn(image, text)
{
    text.style.visibility = `visible`;
    text.style.opacity = `1`;
    image.style.height = imgMonthly.height;
    text.style.gap = `70px`
}

function imgSwitchOff(image, text)
{
    text.style.visibility = `hidden`;
    text.style.opacity = `0`;
    image.style.height = ``;
}


function showModal()
{
    activeModal.classList.add("show-modal");
    document.body.style.overflowY = `hidden`;
}



function closeModal()
{
    activeModal.classList.remove("show-modal");
    document.body.style.overflowY = ``;
}




setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos