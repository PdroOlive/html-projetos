let num = [5, 8, 4]
let vetor = [6, 3, 5]

for( let i in num && vetor) 
{
    console.log(num[i]) 
    console.log(vetor[i]) 


    if(num[i] && vetor[i] == 5)
    {
        console.log("Interseção")
    }
    
}
