

const paragrafo = document.getElementById('mensagem')

const checaCaps = (event) => {
    if(event.shiftKey){
        paragrafo.innerHTML = 'Atenção: SEGURANDO SHIFT'
    }else{
        paragrafo.innerHTML = ''
    }

}