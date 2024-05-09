const songName = document.getElementById("nome-musica"); // Nome da Musica
const artistName = document.getElementById("nome-artista"); // Nome do Artista
const img = document.getElementById("img-album"); // Manipular img atraves dessa variavel
const song = document.getElementById("audio"); // Manipular o audio atraves dessa variavel
const play = document.getElementById("img-play"); // Manipular o Botao Play
const voltar = document.getElementById("img-voltar"); // Manipular o Botao Voltar
const passar = document.getElementById("img-passar"); // Manipular o Botao Passar
const bar = document.getElementById("current-progress");  
const barProgress = document.getElementById("container-bar");  
const arrowButton = document.getElementById("img-arrows"); 
const repeatButton = document.getElementById("img-repeat"); 
const actualTime = document.getElementById("actual-time");
const totalTime = document.getElementById("total-time");


const Mars = { // objeto com as informaçoes do cantor Bruno mars
    songName: "That's What I Like",
    artist: "Bruno Mars",
    estilo: "linear-gradient(0deg, rgb(59, 26, 26) 0%, rgba(135,0,0,1) 90%, rgba(90,0,0,1) 100%, rgba(111,0,0,1) 100%, rgba(255,0,0,1) 100%)",
    file: "bruno-mars"

}

const Savage = { // Objeto com as informações do cantor 21 Savage
    songName: "Glock in my Lap",
    artist: "21 Savage",
    estilo: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(153,116,0,1) 100%, rgba(255,193,0,1) 100%)",
    file: "savage"
}

const Fun = { // Objeto com as informações do cantor Fun
    songName: "We Are Young",
    artist: "Fun",
    estilo: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(38,17,17,1) 55%, rgba(59,26,26,1) 85%, rgba(59,26,26,1) 100%)",
    file: "fun"
}

const playlist = [Mars, Savage, Fun]; // Vetor criado para servir de playlist (contem todos os objetos criados acima)
let index = 0;
let randomArray = [...playlist];
let playing = false; // Variavel para coletar se o botao play esta ativo ou nao (true or false)
let shuffled = false;
let repeatOn = false;





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
    img.src = `images/${randomArray[index].file}.png`; // busca na playlist o objeto file que contem a foto do album
    song.src = `songs/${randomArray[index].file}.mp3`; // busca na playlist o objeto file que contem o audio 
    songName.innerText = randomArray[index].songName; // busca na playlist o objeto songName que contem o nome da musica
    artistName.innerText = randomArray[index].artist; // busca na playlist o objeto artist que contem o nome do cantor
    document.body.style.backgroundImage = randomArray[index].estilo;
}

function voltarSong() // função que testa, dado um index ira decrementar(trocar de musica voltar)
{
    if(index === 0)
    {
        index = randomArray.length - 1;
    }
    else
    {
        index -= 1;
    }
    loadingSong();
    Play();
}

function passarSong() // função que testa, dado um index ira incrementar (trocar de musica passar)
{
    if(index === randomArray.length - 1)
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



function updateProgress()
{
    const barWidth = (song.currentTime/song.duration)*100;
    bar.style.setProperty("--update", `${barWidth}%`);
    actualTime.innerText = FormatTime(song.currentTime);
}

function jumpTo(event)
{
    const width = barProgress.clientWidth;
    const clickPosition = event.offsetX;
    const jumpTime = (clickPosition/width)* song.duration;
    song.currentTime = jumpTime;
}

function shuffleArray(preArray)
{
    const size = preArray.length;
    let currentIndex = size - 1;
    while(currentIndex > 0)
    {
       let randomIndex = parseInt(Math.random()*size);
       let suport = preArray[currentIndex];
       preArray[currentIndex] = preArray[randomIndex];
       preArray[randomIndex] = suport;
       currentIndex -= 1;
    }
}

function shuffleButton()
{
    if(shuffled === false)
    {
        shuffled = true;
        shuffleArray(randomArray);
        arrowButton.style.filter = `brightness(0) saturate(100%) invert(63%) sepia(29%) saturate(1456%) hue-rotate(50deg) brightness(109%) contrast(83%)`;
    }
    else
    {
        shuffled = false;
        randomArray = [...playlist];
        arrowButton.style.filter = `brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(13%) hue-rotate(81deg) brightness(106%) contrast(106%)`;
    }

}

function dynamicRepeat()
{
    if(repeatOn === false)
    {
        repeatOn = true;
        repeatButton.style.filter = `brightness(0) saturate(100%) invert(63%) sepia(29%) saturate(1456%) hue-rotate(50deg) brightness(109%) contrast(83%)`;
    }
    else
    {
        repeatOn = false;
        repeatButton.style.filter = `brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(13%) hue-rotate(81deg) brightness(106%) contrast(106%)`;
    }
}

function nextOrRepeat()
{
    if(repeatOn === false)
    {
        passarSong();
    }
    else
    {
        Play()
    }
}

function FormatTime(timeOrgin)
{
    let hours = Math.floor(timeOrgin / 3600);
    let min = Math.floor((timeOrgin - hours * 3600)/60);
    let sec = Math.floor(timeOrgin - hours * 3600 - min * 60);

    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}


function updateTotalTime()
{
    
    totalTime.innerText = FormatTime(song.duration);
}



loadingSong(); // o javascript carrega as informações da musica assim que abrir o site

play.addEventListener("click", playDecider); // evento que implementa a função playDecider
voltar.addEventListener("click", voltarSong); // evento que implementa a função voltarSong
passar.addEventListener("click", passarSong); // evento que implementa a função passarSong
song.addEventListener("timeupdate", updateProgress);
barProgress.addEventListener("click", jumpTo);
arrowButton.addEventListener("click", shuffleButton);
repeatButton.addEventListener("click", dynamicRepeat);
song.addEventListener("ended", nextOrRepeat);
song.addEventListener("loadedmetadata", updateTotalTime)