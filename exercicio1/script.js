//Prática Guiada1
//Criar uma nova tag li

const novoItem = document.createElement("li")
console.log(novoItem)

//Adicionando conteúdo no elemento
const conteudoItemNovo = document.createTextNode("item 0")
console.log(conteudoItemNovo)

//adicionando conteúdo no elemento
conteudoItemNovo.appendChild(novoItem)
console.log(novoItem)

//definir conteúdo de referencia
const elementoReferencia = document.getElementById("lista")
console.log(elementoReferencia)

//adicionar na tela 
elementoReferencia.insertAdjacentElement("afterbegin",novoItem)

//elemento 5
const itemFinal = document.createElement("li")

const conteudoItemFinal =document.createTextNode("item 5")

itemFinal.appendChild(conteudoItemFinal)
console.log(itemFinal)

elementoReferencia.insertAdjacentElement("beforeend",itemFinal)


