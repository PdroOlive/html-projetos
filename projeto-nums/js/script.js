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
/*
function verificarLista(n, li)
{
    if(li.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
} 
*/



function clicou()
{
    
    
    if(verificarNum(num.value) == true)
    {
        vetor.push(num.value)  
        let item = document.createElement("p")
        lista.innerText = `Valor ${num.value} foi Adicionado`
        lista.appendChild(item)
    }
    else
    {
        alert("ERRO!!! Entre com um valor válido!")
    }
    console.log(vetor)
}