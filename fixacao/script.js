const listItems = document.getElementById('lista')

const input = document.getElementById('meu-input')


const insereItem = (event) =>{
    const itemFinal = document.createElement('li')

    itemFinal.innerHTML = input.value

    listItems.appendChild(itemFinal)

    input.value = ''
}