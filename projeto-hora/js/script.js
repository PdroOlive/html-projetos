let agora = new Date()
let hora = agora.getHours()
let texto = document.getElementById("texto")
let img = document.getElementById("imagem")


if(hora >= 6 && hora <= 12)
{
    texto.innerHTML = `Bom dia!! Agora são <strong>${hora} horas.</strong>`
    img.src = `img/bdia.webp`
    
}
else if(hora >= 13 && hora <= 18)
{
    texto.innerHTML = `Boa Tarde!! Agora são <strong>${hora} horas.</strong>`
    img.src = `img/btarde.png`
}
else if(hora >= 19 && hora <= 23)
{
    texto.innerHTML = `Boa noite!! Agora são <strong>${hora} horas.</strong>`
    img.src = `img/bnoite.webp`
}