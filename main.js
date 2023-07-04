function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();


    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else { 
        console.log('Elemento não econtrado ou seletor inválido');
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    const idAudio =`#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        console.log(evento.code == 'space')

        if (evento.code == 'space' || evento.code == 'Enter'){
        tecla.classList.add('ativa');
        }
    }    

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

  
}

