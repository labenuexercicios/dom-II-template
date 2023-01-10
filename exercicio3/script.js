//ATENÇÃO , SEGURANDO O SHIFT



const paragrafo = document.getElementById("mensagem")

const checaCaps = (event) => {
    if(event.shiftKey){
        paragrafo.innerHTML = 'ATENÇÃO,SEGURANDO SHIFT'
    }else{
        paragrafo.innerHTML =""
    }
}