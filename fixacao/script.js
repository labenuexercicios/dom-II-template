const lista = document.getElementById("lista")

const insereItem = (event) =>{
    event.preventDefault()

    novaFruta = document.getElementById("meu-input").value;

    const novaLista = document.createElement("li");
    novaLista.innerHTML = novaFruta;
    lista.appendChild(novaLista);

    document.getElementById("meu-input").value = ""
}

