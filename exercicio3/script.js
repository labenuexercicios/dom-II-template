let p = document.getElementById('mensagem');


function checaCaps(event){
    if(event.key === "Shift"){
        p.innerHTML = 'Tecla SHIFT está ativada'
    }

    if(event.key !== "Shift"){
        p.innerHTML = ""
    }
}