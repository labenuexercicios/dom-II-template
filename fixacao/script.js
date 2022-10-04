//Neste template, temos uma lista de itens, e um formulário. 
//Agora, ao clicar no botão “Enviar”, 
//devemos adicionar o conteúdo do Formulário à nossa lista de itens.

function insereItem(event){
    //criar um elemento novo
    let elementoNovo = document.createElement("li")
        console.log(elementoNovo)
    
    //criar uma variável que guarda os itens novos
    let input = document.getElementById("meu-input")
        console.log(input.value)
    
    //colocar item novo no elemento novo
    elementoNovo.innerHTML = input.value

    let referencia = document.getElementById("lista")
    referencia.insertAdjacentElement("beforeend",elementoNovo)
    input.value = "" //extra, assim vai limpar o imput após o usuário
    //digitar o valor.
}   


