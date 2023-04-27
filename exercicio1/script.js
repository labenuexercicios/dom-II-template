// adicionar elementos Item 0 e Item 5

const lista = document.getElementById('lista')

console.log(lista)

// Item ZERO
const itemZero = document.createElement('li')

// colocando texto através do innerHTML
itemZero.innerHTML = 'Item 0'

// ITEM CINCO
const itemCinco = document.createElement('li')

// colocando texto através do creatTextNode
const textoItemCinco = document.createTextNode('Item 5')

itemCinco.appendChild(textoItemCinco)

//adicionando novos itens a lista
lista.insertAdjacentElement('afterbegin', itemZero)
lista.insertAdjacentElement('beforeend', itemCinco)
