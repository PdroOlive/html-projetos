function clicou()
{
    let num1 = document.getElementById("inum1")
    let num2 = document.getElementById("inum2")
    let pulou = document.getElementById("ipular")
    let res = document.getElementById("resul")

    n1 = Number(num1.value)
    n2 = Number(num2.value)
    pass = Number(pulou.value)

    for(n1 = n1; n1 <= n2; n1 += pass)
    {
        res.innerText =  `${n1}`
    }
}