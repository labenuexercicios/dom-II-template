function checaCaps(event){
    // exibe o elemnto que ativou o evento
    console.log(event.target);

    // pega todas as teclas shift alt
    console.log(event.key);

    // pega o elemento p atraves do seu id
    const mensagem = document.getElementById("mensagem")

    // verifica se a tecla apertada é shift
    if(event.key==="Shift"){

        // modifica o elemento p no html
        mensagem.innerHTML= "ATENÇÃO: SEGURANDO O SHIFT"
    }else{
        mensagem.innerHTML=""
    }
}