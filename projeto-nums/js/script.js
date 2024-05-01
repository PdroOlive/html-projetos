let num = document.querySelector("#inum")
let lista = document.getElementById("lista")
let vetor = []

function verificarNum(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

function verificarLista(n, li)
{
    if(li.indexOf(Number(n)) == -1)
    {
        return true
    }
    else
    {
        return false
    }
} 

function clicou()
{
    
    
    if(verificarNum(num.value) && verificarLista(num.value, vetor))
    {
        vetor.push(Number(num.value))
        let item = document.createElement("p")
        item.innerText = `Valor ${num.value} foi Adicionado`
        lista.appendChild(item)
        console.log(vetor)
    }
    else
    {
        alert("ERRO!!! Entre com um valor válido!")
    }
    num.value = ""
    num.focus()
    
}

let res = document.querySelector("#res")


let soma = 0
let media = 0

function Analisar()
{
    document.getElementById("botao").disabled = true;
    document.getElementById("button").disabled = true;

    let itemLar = document.createElement("p")
    itemLar.innerHTML = `Foram cadastrados ${vetor.length} números neste mês`
    res.appendChild(itemLar)

    let maior = vetor[0]
    let menor = vetor[0]

    for(let i in vetor)
    {
        soma += vetor[i];
        if(vetor[i] > maior)
            maior = vetor[i]
        if(vetor[i] < menor)
            menor = vetor[i]
        
    }

    let itemMaior = document.createElement("p")
    itemMaior.innerHTML = `O maior número foi ${maior}`
    res.appendChild(itemMaior)

    let itemMenor = document.createElement("p");
    itemMenor.innerHTML = `O menor número foi ${menor}`
    res.appendChild(itemMenor)

    let itemSoma = document.createElement("P")
    itemSoma.innerHTML = `A soma dos valores ${soma}`
    res.appendChild(itemSoma)

    media = soma / vetor.length;

    let itemMedia = document.createElement("p")
    itemMedia.innerHTML = `A média dos valores é ${media.toFixed(2)}`
    res.appendChild(itemMedia)

    
}
