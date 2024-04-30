function clicou()
{
    let num = Number(document.getElementById("inum").value)
    let vetor = []
    let res = document.getElementById("resul")
    res.innerHTML = ""

    if(num < 1 || num > 100)
    {
        alert(`ERRO!! Tente um número entre 1 e 100`)
    }
    else
    {
        vetor.push(num)  
        let item = document.createElement("option")
        
        item.innerText = `Valor ${num} foi Adicionado`
        res.appendChild(item)
        console.log(vetor[i])
    } 
}