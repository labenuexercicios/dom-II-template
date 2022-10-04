function checaCaps(event){
    //const inputTexto = document.getElementById("textoInput")
        //console.log.apply(inputTexto)

    console.log(event.shiftkey)
    const paragrafo = document.getElementById("mensagem")
    if(event.shiftkey){
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
    }else{
        paragrafo.innerHTML = ""
    }
}

