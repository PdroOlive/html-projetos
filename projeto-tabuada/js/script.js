function clicou()
{
    let num = document.getElementById("inum")
    let res = document.getElementById("resul")
    let cont = 1
    let tabuada = 0
    res.innerHTML = ""
    if(num.value.length == "")
    {
        res.innerHTML = `ERRO!!! Entre com um valor válido!`
        res.style.color = "red"
    }
    else
    {
        let n = Number(num.value)
        res.style.color = "black"
        res.innerHTML = `TABUADA DO ${n} <br>`
        res.style.border = "1px solid black"
        while(cont <= 10)
        {
            tabuada = n * cont;
            res.innerHTML += `${n} x ${cont} = ${tabuada} <br>`
            cont++
        }
    }
}