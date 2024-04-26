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
        div.innerHTML = `Identificamos um Homem idoso com ${idade} anos.`
        document.querySelector("main").style.height = "600px"
        img.setAttribute("src", "img/man-old.png")
    }
    else if(genero[1].checked && idade >= 50)
    {
        div.innerHTML = `Identificamos uma Mulher idosa com ${idade} anos.`
        document.querySelector("main").style.height = "600px"
        img.setAttribute("src", "img/woman-old.png")
    }
    else if(genero[0].checked && idade < 50 && idade >= 26)
    {
        div.innerHTML = `Identificamos um Homem com ${idade} anos`
        document.querySelector("main").style.height = "600px"
        img.setAttribute("src", "img/man.png")
    }
    else if(genero[1].checked && idade < 50 && idade >= 26)
    {
        div.innerHTML = `Identificamos uma Mulher com ${idade} anos`
        document.querySelector("main").style.height = "600px"
        img.setAttribute("src", "img/woman.png")
    }
    else if(genero[0].checked && idade > 10 && idade < 26)
    {
        div.innerHTML = `Identificamos um Jovem com ${idade} anos`
        document.querySelector("main").style.height = "600px"
        img.setAttribute("src", "img/man-young.png")

    }
    else if(genero[1].checked && idade > 10 && idade < 26 )
    {
        div.innerHTML = `Identificamos uma Jovem com ${idade} anos`
        document.querySelector("main").style.height = "600px"
        img.setAttribute("src", "img/woman-young.png")
    }
    else if(genero[0].checked && idade >= 1 && idade <= 10)
    {
        div.innerHTML = `Identificamos uma Criança do sexo masculino com ${idade} anos`
        document.querySelector("main").style.height = "600px"
        img.setAttribute("src", "img/kid-boy.png")
    }

    else if(genero[1].checked && idade >= 1 && idade <= 10)
    {
        div.innerHTML = `Identificamos uma Criança do sexo feminino com ${idade} anos`
        document.querySelector("main").style.height = "600px"
        img.setAttribute("src", "img/kid-girl.png")
    }

    div.appendChild(img)

}