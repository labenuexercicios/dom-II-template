
function insereItem() {
    const ulElemento = document.getElementById('lista')
    const input = document.getElementById('meu-input') 
    const newLi = document.createElement('li')
    const textLi = document.createTextNode(input.value) 
    newLi.appendChild(textLi) 
    ulElemento.insertAdjacentElement('beforeend', newLi) 
    }