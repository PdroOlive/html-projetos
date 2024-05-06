const songName = document.getElementById("nome-musica"); // Nome da Musica
const artistName = document.getElementById("nome-artista"); // Nome do Artista
const img = document.getElementById("img-album"); // Manipular img atraves dessa variavel
const song = document.getElementById("audio"); // Manipular o audio atraves dessa variavel
const play = document.getElementById("img-play"); // Manipular o Botao Play
const voltar = document.getElementById("img-voltar"); // Manipular o Botao Voltar
const passar = document.getElementById("img-passar"); // Manipular o Botao Passar

let playing = false; // Variavel para coletar se o botao play esta ativo ou nao (true or false)

const Mars = { // objeto com as informaçoes do cantor Bruno mars
    songName: "That's What I Like",
    artist: "Bruno Mars",
    file: "bruno-mars"

}

const Savage = { // Objeto com as informações do cantor 21 Savage
    songName: "Glock in my Lap",
    artist: "21 Savage",
    file: "savage"
}

const Fun = { // Objeto com as informações do cantor Fun
    songName: "We Are Young",
    artist: "Fun",
    file: "fun"
}

const playlist = [Mars, Savage, Fun]; // Vetor criado para servir de playlist (contem todos os objetos criados acima)
let index = 0;

function Play() // função que faz alteração ao clicar no botao play
{
    play.src = `images/pause.svg`;
    song.play();
    playing = true;
}

function Pause() // função que faz alteração ao clicar no botao pause (play)
{
    play.src = `images/play.svg`;
    song.pause();
    playing = false;
}

function playDecider() // função que testa se a variavel playing esta com o valor true ou false, se for true retorna a função Pause() e se for false retorna a função Play()
{
    if(playing === true)
    {
        Pause();
    }
    else if(playing === false)
    {
        Play();
    }
}

function loadingSong() // função que ira dinamizar o nome da musica, cantor e foto do album
{
    img.src = `images/${playlist[index].file}.png`; // busca na playlist o objeto file que contem a foto do album
    song.src = `songs/${playlist[index].file}.mp3`; // busca na playlist o objeto file que contem o audio 
    songName.innerText = playlist[index].songName; // busca na playlist o objeto songName que contem o nome da musica
    artistName.innerText = playlist[index].artist; // busca na playlist o objeto artist que contem o nome do cantor
    if(index == 1) // dependo do index o background color ira mudar
    {
        document.body.style.background = "rgb(59, 26, 26) 0%"

    }
    else if(index == 2)
    {
        document.body.style.background = "gray"
    }
    else
    {
        document.body.style.background = "rgba(90,0,0,1) 100%"
    }
}

function voltarSong() // função que testa, dado um index ira decrementar(trocar de musica voltar)
{
    if(index === 0)
    {
        index = playlist.length - 1;
    }
    else
    {
        index -= 1;
    }
    loadingSong();
    Play()
}

function passarSong() // função que testa, dado um index ira incrementar (trocar de musica passar)
{
    if(index === playlist.length - 1)
    {
        index = 0;
    }
    else
    {
        index += 1;
    }
    loadingSong(); // assim que trocar de musica essa função é executada junto
    Play() // assim que trocar de musica ja vai começar a tocar
}

loadingSong(); // o javascript carrega as informações da musica assim que abrir o site

play.addEventListener("click", playDecider); // evento que implementa a função playDecider
voltar.addEventListener("click", voltarSong); // evento que implementa a função voltarSong
passar.addEventListener("click", passarSong); // evento que implementa a função passarSong
