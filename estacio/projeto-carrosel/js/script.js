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
const cpfFormat = document.getElementById("icpf");
const card = document.getElementById("icard");
const imageVisa = document.getElementById("image-visa");
const imageElo = document.getElementById("image-elo");
const imageMaster = document.getElementById("image-master");
const valueTot = document.getElementById("container-value");
let inputCupom = document.getElementById("icupom");

let price = 1368;
let calcResult = 0;


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
    showValue(ticketSaleOff(price));
}
function closeModal()
{
    activeModal.classList.remove("show-modal");
    document.body.style.overflowY = ``;
    inputCupom.value = "";
}


function flagOn(flag)
{
    flag.style.filter = `grayscale(0)`;
}
function flagOff(flag)
{
    flag.style.filter = ``;
    card.style.border = `none`;
}
function checkCardFlag()
{
    const flagArray = [0, 1, 2, 3, 7, 8, 9];
    let cardFlag = Number(card.value);


    if(cardFlag === 4)
    {
        flagOn(imageVisa);
    }
    else if (cardFlag === 5)
    {
        flagOn(imageMaster);
    }
    else if (cardFlag === 6)
    {
        flagOn(imageElo);
    }
    else if (cardFlag == " ")
    {
        flagOff(imageVisa);
        flagOff(imageMaster);
        flagOff(imageElo);
    }
    
    
}

function showValue(num)
{
    let formatPrice = num.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    valueTot.innerText = `Valor Total: ${formatPrice}`;
    valueTot.style.opacity = `1`;
    valueTot.style.visibility = `visible`;
}


function ticketSaleOff(num)
{
    let ticket = `promo5`;
    let inputTicket = inputCupom.value;
    if(inputTicket === ticket)
    {                           
        return valueTot.innerText = `Valor Total: ${(calcResult = (num - 5).toLocaleString("pt-BR" , {style: "currency", currency: "BRL"}))}`;
        
    }
    return num
}

cpfFormat.addEventListener("keypress", () => {
    let cpfLength = cpfFormat.value.length;
    if(cpfLength === 3 || cpfLength === 7)
    {
        cpfFormat.value += ".";
    }
    else if(cpfLength === 11)
    {
        cpfFormat.value += "-";
    }
});

card.addEventListener("keypress", () => {
    let cardLength = card.value.length;
    if(cardLength === 4 || cardLength === 9 || cardLength === 14)
    {
        card.value += " ";
    }
});
setInterval(nextImage, 3000); // Troca de imagem a cada 3 segundos