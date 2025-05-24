function buscaBinaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while(baixo <= alto) {
        let meio = parseInt((baixo + alto) / 2);
        let chute = lista[meio];
        if(chute === item) return meio;
        if(chute > item) alto = meio - 1;
        else baixo = meio + 1;
    }
    return null
    
}


let minhaLista = [1, 3, 5, 7, 9];
console.log(buscaBinaria(minhaLista, 3))
console.log(buscaBinaria(minhaLista, -1))
0