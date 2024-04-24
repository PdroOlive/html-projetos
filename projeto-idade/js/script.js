function clicar()
{
    let ano = document.getElementById("iano")
    let agora = new Date().getFullYear()
    let idade = Number(agora) - Number(ano.value)
    let div = document.getElementById("container")

    let genero = document.getElementsByName("sexo")
    let img = document.getElementById("foto")
    if(ano.value == 0 || ano.value >= agora || ano.value < 1930)
    {   
        alert("Erro!! Verifique os dados e tente novamente")

    }
    else if(genero[0].checked && idade >= 50)
    {
        div.innerHTML = `Identificamos um Homem idoso de ${idade} anos.`
        img.src = `img/man-old.png`
    }
    else if(genero[1].checked && idade >= 50)
    {
        div.innerHTML = `Identificamos uma Mulher idosa de ${idade} anos.`
        img.src = `img/woman-old.png`
    }

}