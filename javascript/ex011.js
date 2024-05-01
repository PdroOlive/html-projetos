let num = 0
let vetor = [6, 3, 5]
for( let i = 0; i < 5; i++) 
{
    vetor.push(5)
    num = vetor.indexOf(8)
    console.log(vetor[i]) 

/*
    if(num[i] && vetor[i] == 5)
    {
        console.log("Interseção")
    }*/
}

if(vetor.indexOf(num) == -1)
{
    console.log("Hello World!!")
}
else
{
    console.log("Olá")
}