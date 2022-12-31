const paragrafo = document.getElementById('mensagem')

// paragrafo.innerHTML = 'Alguma coisa'

const checaCaps = (event) => {
    if(event.shiftKey){
        paragrafo.innerHTML = 'Atenção: SEGURANDO SHIFT'
    }else{
        paragrafo.innerHTML = ""
    }
  
}