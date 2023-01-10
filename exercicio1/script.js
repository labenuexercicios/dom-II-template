const lista = document.getElementById("lista")

// criar um elemento li
//add texto
// acrescentar ele na lista,um no começo e um no fim

//Criando elementos no HTML usando o JS, codigos a baixo!
//Em uma lista de 4 itens, do 1 ao 4, tive que criar o item 0 e o 5. Um no começo e outro no final da lista!


const criar = document.createElement("li")
criar.innerHTML = "Item 0"
lista.insertAdjacentElement('afterbegin', criar)



const criarUltimo = document.createElement("li")
const texto = document.createTextNode("Item 5")
criarUltimo.appendChild(texto)

lista.appendChild(criarUltimo)






