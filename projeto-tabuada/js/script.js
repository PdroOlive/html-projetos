function clicou()
{
    let num = document.getElementById("inum")
    let res = document.getElementById("resul")
    let cont = 1
    let tabuada = 0
    let n = Number(num.value)
    res.innerHTML = ""
    while(cont <= 10)
    {
        tabuada = n * cont;
        res.innerHTML += `${n} x ${cont} = ${tabuada} <br>`
        cont++
    }
}