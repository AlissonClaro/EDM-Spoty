let musics = [
    {titulo:'Alienígena (Original Mix) ft. Alien Code ', artista:'Chapeleiro', src:'music/Alienígena (Original Mix) ft. Alien Code - Chapeleiro.mp3', img:'./resource/Chapeleiro.png'},
    {titulo:'Astronaut In The Ocean ft. dksh & Citycreed', artista:'SLAP HOUSE MAFIA', src:'./music/Astronaut In The Ocean ft. dksh & Citycreed - SLAP HOUSE MAFIA.mp3', img:'./resource/SLAP HOUSE MAFIA.png'},
    {titulo:'Balance ft. Malive', artista:'Illusionize', src:'./music/Balance ft. Malive - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Beat Du Mau (Original Mix) ft. Draco', artista:'Chapeleiro', src:'./music/Beat Du Mau (Original Mix) ft. Draco - Chapeleiro.mp3', img:'./resource/Chapeleiro.png'},
    {titulo:'Bounce (Original Mix) ft. Diamn', artista:'Illusionize', src:'./music/Bounce (Original Mix) ft. Diamn - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Cash', artista:'SLAP HOUSE MAFIA', src:'./music/Cash - SLAP HOUSE MAFIA.mp3', img:'./resource/SLAP HOUSE MAFIA.png'},
    {titulo:'Catch Me If You Can', artista:'SLAP HOUSE MAFIA', src:'./music/Catch Me If You Can - SLAP HOUSE MAFIA.mp3', img:'./resource/SLAP HOUSE MAFIA.png'},
    {titulo:'Conexões Orgânicas', artista:'Illusionize', src:'./music/Conexões Orgânicas - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Damello ft. Sterium & Emy Perez', artista:'Illusionize', src:'./music/Damello ft. Sterium & Emy Perez - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Digital Viewpoints', artista:'Reflection', src:'./music/Digital Viewpoints - Reflection.mp3', img:'./resource/Reflection.png'},
    {titulo:'Falling (Original Mix) ft. Breaking Beattz', artista:'Illusionize', src:'./music/Falling (Original Mix) ft. Breaking Beattz - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Groove (Original Mix) ft. Synthatic', artista:'Chapeleiro', src:'./music/Groove (Original Mix) ft. Synthatic - Chapeleiro.mp3', img:'./resource/Chapeleiro.png'},
    {titulo:'Keep On Dancing ft. Ashibah', artista:'Illusionize', src:'./music/Keep On Dancing ft. Ashibah - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Mantra (Original Mix)', artista:'Chapeleiro', src:'./music/Mantra (Original Mix) - Chapeleiro.mp3', img:'./resource/Chapeleiro.png'},
    {titulo:'Medo (Original Mix)', artista:'Chapeleiro', src:'./music/Medo (Original Mix) - Chapeleiro.mp3', img:'./resource/Chapeleiro.png'},
    {titulo:'Multiverso (Original Mix) ft. Freakaholics', artista:'Chapeleiro', src:'./music/Multiverso (Original Mix) ft. Freakaholics - Chapeleiro.mp3', img:'./resource/Chapeleiro.png'},
    {titulo:'Payiz ft. Dia & Emty', artista:'Liu', src:'./music/Payiz ft. Dia & Emty - Liu.mp3', img:'./resource/Liu.png'},
    {titulo:'Phoneline (Original Mix) ft. Visage Music', artista:'Illusionize', src:'./music/Phoneline (Original Mix) ft. Visage Music - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Pullin Up ft. dksh', artista:'SLAP HOUSE MAFIA', src:'./music/Pullin Up ft. dksh - SLAP HOUSE MAFIA.mp3', img:'./resource/SLAP HOUSE MAFIA.png'},
    {titulo:'The Groov ft. Dual Channels', artista:'Illusionize', src:'./music/The Groov ft. Dual Channels - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Tick Tick Boom ft. WALF', artista:'SLAP HOUSE MAFIA', src:'./music/Tick Tick Boom ft. WALF - SLAP HOUSE MAFIA.mp3', img:'./resource/SLAP HOUSE MAFIA.png'},
    {titulo:'Time ft. Shapeless', artista:'Illusionize', src:'./music/Time ft. Shapeless - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'Trevas (Original Mix) ft. Doubkore', artista:'Chapeleiro', src:'./music/Trevas (Original Mix) ft. Doubkore - Chapeleiro.mp3', img:'./resource/Chapeleiro.png'},
    {titulo:'Trump It', artista:'Illusionize', src:'./music/Trump It - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'UFO (Original Mix) ft. RZO', artista:'Chapeleiro', src:'./music/UFO (Original Mix) ft. RZO - Chapeleiro.mp3', img:'./resource/Chapeleiro.png'},
    {titulo:'Unforgettable ft. Marcos Ferrari & dksh', artista:'SLAP HOUSE MAFIA', src:'./music/Unforgettable ft. Marcos Ferrari & dksh - SLAP HOUSE MAFIA.mp3', img:'./resource/SLAP HOUSE MAFIA.png'},
    {titulo:'WATCH OUT ft. Malive', artista:'Illusionize', src:'./music/WATCH OUT ft. Malive - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'We Come Back (Original Mix) ft. Victor Lou & Visage Music', artista:'Illusionize', src:'./music/We Come Back (Original Mix) ft. Victor Lou & Visage Music - Illusionize.mp3', img:'./resource/Illusionize.png'},
    {titulo:'With U ft. Volkoder', artista:'Illusionize', src:'./music/With U ft. Volkoder - Illusionize.mp3', img:'./resource/Illusionize.png'}
];
// variaveis

let musica = document.querySelector('.audio');
let indexMusic = 0;
let musicDuration = document.querySelector('.end');
musica.addEventListener('loadeddata', duration);
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let musicArtist = document.querySelector('.description i');

renderizeMusic(indexMusic);

//funções
function renderizeMusic(index) {
    musica.setAttribute('src', musics[index].src);
    musica.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].titulo;
        musicArtist.textContent = musics[index].artista;
        image.src = musics[index].img;
        musicDuration.textContent = secToMinutes(Math.floor(musica.duration));

        musica.addEventListener('ended', () => {
            // Troque para a próxima música automaticamente
            indexMusic = (indexMusic + 1) % musics.length;
            renderizeMusic(indexMusic);
            tocarMusica();
        });
    })  
}

function tocarMusica() {
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.pause').style.display = 'none';
}

function updateBar() {
    let progress = document.querySelector('progress');
    progress.style.width = (musica.currentTime / musica.duration) * 100 + '%';
    let timeUpdate = document.querySelector('.start');
    timeUpdate.textContent = secToMinutes(Math.floor(musica.currentTime));
}

function secToMinutes(seconds) {
    let minutesField = Math.floor(seconds / 60);
    let secondsField = seconds % 60;
    if (secondsField < 10) {
        secondsField = '0' + secondsField;
    }
    return minutesField + ':' + secondsField;
}


function duration(){
    let musicDuration = document.querySelector('.end');
    musicDuration.textContent = secToMinutes(Math.floor(musica.duration));
}

//eventos

document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', updateBar);
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusic--;
    if(indexMusic < 0) {
        indexMusic = 2;
    }
        renderizeMusic(indexMusic);
        tocarMusica();

});
document.querySelector('.proximo').addEventListener('click', () => {
    indexMusic++;
    if(indexMusic > 29) {
        indexMusic = 0;
    }
    renderizeMusic(indexMusic);
    tocarMusica();
});

// Evento de clique na barra de progresso
document.querySelector('.progress-bar').addEventListener('click', (event) => {
    let progressBar = document.querySelector('.progress-bar');
    let clickX = event.clientX - progressBar.getBoundingClientRect().left;
    let totalWidth = progressBar.clientWidth;
    let newPosition = (clickX / totalWidth) * musica.duration;

    // Defina a nova posição da música
    musica.currentTime = newPosition;
});