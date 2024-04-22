let agora = new Date()

let hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)

if(hora >= 6 && hora <= 12)
{
    console.log(`Bom dia!`)
}
else if(hora >= 13 && hora <= 18)
{
    console.log(`Boa Tarde!`)
}
else if(hora >= 19 && hora <= 23)
{
    console.log(`Boa noite!`)
}
else if(hora < 6)
{
    console.log(`Boa Madrugada!`)

}
