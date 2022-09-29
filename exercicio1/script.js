// PEGAR A LISTA
const lista = document.getElementById('lista')

// ADICIONAR O ITEM 0
// CRIA UMA NOVA LI
const novaLi = document.createElement('li')
// CRIA O CONTEUDO DA LI
const novaLiConteudo = document.createTextNode('Item 0')
// COLOCA O CONTEUDO DENTRO DA LI
novaLi.appendChild(novaLiConteudo)
// COLOCA A LI DENTRO DA LISTA
lista.insertAdjacentElement('afterbegin', novaLi)




const novaLi1 = document.createElement('li')

const novaLiConteudo1 = document.createTextNode('Item 5')

novaLi1.appendChild(novaLiConteudo1)

lista.insertAdjacentElement('beforeend', novaLi1)
