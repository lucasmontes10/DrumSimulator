document.body.addEventListener("keyup", function (evento){ //Adicionando um observador de eventos, no primeiro parâmetro adicionamos o evento desejado
    playAudio(evento.code.toLowerCase());
})  

document.querySelector('.composicao button').addEventListener('click', function(){
    let song = document.querySelector('#input').value.toLowerCase();
    if(song != ''){
        let songArray = song.split('');
        tocarComposicao(songArray);
    }
})

function playAudio(media){
    let mediaSelector = document.querySelector(`#s_${media}`);
    let teclaSelector = document.querySelector(`div[data-key = "${media}"]`);
    if(mediaSelector){
        mediaSelector.currentTime = 0; //Tirando o bug de ele só iniciar o audio quando outro tiver terminado
        mediaSelector.play();
    }
    if(teclaSelector){
        teclaSelector.classList.add("active");
        setTimeout(() => {
            teclaSelector.classList.remove("active");
        }, 400);
    }
}

function tocarComposicao(songArray){
    let timer = 0;
    for(let i in songArray){
        setTimeout(() => {
            playAudio(`key${songArray[i]}`);
        }, timer);
        timer += 250;
    }
}