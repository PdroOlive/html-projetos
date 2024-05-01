let amigo = 
{
    nome:"Mario", 
    peso: 89.4, 
    sexo:"M",
    engordar(p=0)
    {
        console.log("Engordou")
        this.peso += p
    }
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)
