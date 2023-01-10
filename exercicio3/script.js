const paragrafo = document.getElementById('mensagem')
// Event.siftkey
function checaCaps(event) {

    if(event.shiftKey){
        paragrafo.innerHTML = 'ATENCAO, VOCE APERTOU O SHIFT '
    }

    
    // if(event.key == "Shift"){
    //     paragrafo.innerHTML = 'ATENCAO, VOCE APERTOU O SHIFT '
    // }

    else{
        paragrafo.innerHTML = ""
    }

    // console.log(event.target)
    // console.log(event.key)
    // const verificaevento = verificaevento + event.target
    // console.log(verificaevento)
    // for(let x = 0; )
}