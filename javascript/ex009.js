let agora = new Date()

let hora = agora.getHours()

console.log(`Agora são ${hora} horas.`)

if(hora < 12)
{
    console.log(`Bom dia!`)
}
else if(hora <= 18)
{
    console.log(`Boa Tarde!`)
}
else if(hora >= 19 && hora <= 23)
{
    console.log(`Boa noite!`)
}
