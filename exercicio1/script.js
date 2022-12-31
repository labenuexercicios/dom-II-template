const ulElemento = document.getElementById ('lista')

const newLi = document.createElement('li')
console.log(newLi)

const liZero = document.createTextNode('item 0')
console.log(liZero)

newLi.appendChild(liZero)

ulElemento.insertAdjacentElement('afterbegin', newLi)

const newLiCinco = document.createElement('li')
const liCinco = document.createTextNode('item 5')
newLiCinco.appendChild(liCinco)
ulElemento.insertAdjacentElement('beforeend', newLiCinco)