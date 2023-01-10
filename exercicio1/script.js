
const ulElemento = document.getElementById('lista')

const newLi = document.createElement('li')// Cria um novo elemento 

const liZero = document.createTextNode('Item 0') // Adiciona texto ao elemento

newLi.appendChild(liZero) // adiciona um valor dentro de outro elemento

ulElemento.insertAdjacentElement('afterbegin', newLi)// Posiciona o elemento na página



const newLicinco = document.createElement('li')
const liCinco = document.createTextNode('Item 5')
newLicinco.appendChild(liCinco)
ulElemento.insertAdjacentElement('beforeend', newLicinco)