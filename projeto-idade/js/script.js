function clicar()
{
    let ano = document.getElementById("iano")
    let agora = new Date().getFullYear()
    let idade = Number(agora) - Number(ano.value)
    let div = document.getElementById("container")

    let genero = document.getElementsByName("sexo")
    if(Number(ano.value) == 0 || ano.value >= agora)
    {   
        alert("Erro!! Verifique os dados e tente novamente")

    }
    else if(genero[0].checked)
    {
        div.innerHTML = `Identificamos um Homem de ${idade} anos.`
    }
    else if(genero[1].checked)
    {
        div.innerHTML = `Identificamos uma Mulher de ${idade} anos.`
    }

}