function clicou()
{
    let num1 = document.getElementById("inum1")
    let num2 = document.getElementById("inum2")
    let pulou = document.getElementById("ipular")
    let res = document.getElementById("resul")
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let pass = Number(pulou.value);

    if(n1 <= 0 || n2 == 0 || pass == 0 || n1 == n2)
    {
        alert("Erro Insira um número válido!")
    }
    else if(pass > n2)
    {
        alert("Erro Insira um número válido!")
    }
    else if (n1 > n2)
    {
        res.innerHTML = `Contando: `
        while(n1 >= n2)
        {
            res.innerHTML += `&#128073; ${n1} `
            n1 -= pass
        }
        res.innerHTML += `&#x1F3C1;`
    }
    else
    {
        res.innerHTML = `Contando: `
        while(n1 <= n2)
        {
            res.innerHTML += `&#128073; ${n1} `
            n1 += pass
        }
        res.innerHTML += `&#x1F3C1;`
    }
 
}