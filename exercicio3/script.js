const checaCaps = (event) => {
    // const inputTexto =document.getElementById("textoInput")
    // console.log(inputTexto)


    console.log(event.shiftKey)
    const paragrafo = document.getElementById("mensagem")
    if (event.shiftKey) {
        paragrafo.innerHTML ="ATENÇÃO: SEGURANDO SHIFT"
    }else{
        paragrafo.innerHTML = ""
    }

}