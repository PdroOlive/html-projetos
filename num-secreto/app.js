// Declaração de Variaveis
let listaNum = []
let numLimite = 100
let numSecreto = geradorNum();
let num = 100;
let tentativas = 1;

// Função para exibição de Diversos texto na tela
function exibirTexto(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// Função para reduzir a repetição de codigo deixando o projeto mais clan
function msgIncial()
{
    exibirTexto("h1", "Descubra  número Secreto");
    exibirTexto("p", `Escolha um número entre 1 e ${num}`);
}
msgIncial();

// Função para fazer a verificação do chute
function VerificarChute()
{
    let chute = document.querySelector("input").value;
    if (chute == numSecreto)
    {
        exibirTexto("h1", "Acertou!!");
        // Solução para palavra tentativas no plural
        let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let msg = `Você Acertou o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTexto("p", msg);
        // habilitando o botão "Novo Jogo" no jogo
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else
    {   //Condicional caso o chute inserido for maior que o Número Secreto
        if (chute > numSecreto)
        {
            exibirTexto("h1", "Erroooou!!");
            exibirTexto("p", "Tente um número menor!!");
        } 
        else
        {   //Condicional caso o chute chute inserido seja menor que o número secreto    
            exibirTexto("h1", "Erroooou!!");
            exibirTexto("p", "Tente um número maior!!");
        }
        //Concatenação que armazena o numero de vezes tentada 
        tentativas ++;
        // Chamada da Função para limpar o campo de interação com o usuario cada vez que houver uma tentativa
        limparCampo();
    }
}
// Função que gera os números secretos
function geradorNum()
{
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidadeelem = listaNum.length;
    //Condicional caso a lista estiver cheia, essa condicional irá esvaziar a mesma
    if (quantidadeelem == numLimite)
    {
        listaNum = [];
    }
    // Condicional que procura o elemento na lista se o elemento não for encontrado
    // na lista haverá um return para chamar a função novamente (recursão). Ou seja
    // Um novo número irá ser gerador caso a função includes ache o número sorteado na lista
    if (listaNum.includes(numEscolhido))
    {
        return geradorNum();
    }
    else
    {   //Condicional para adicionar um elemento na lista 
        listaNum.push(numEscolhido);
        console.log(listaNum)
        return numEscolhido
    }
    
    
}
// Função para limpar o campo de interação com o usuário
function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = "";
}
// Função para reiniciar o jogo quando você ganhar
function reiniciarJogo()
{
    numSecreto = geradorNum();
    limparCampo();
    tentativas = 1;
    msgIncial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}