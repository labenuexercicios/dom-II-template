let item0 = document.createElement('li');
item0.innerHTML = 'Item 0'

let lista = document.getElementById('lista');
lista.insertAdjacentElement('afterbegin', item0)

let item5 = document.createElement('li');
item5.innerHTML = 'Item 5';

lista.insertAdjacentElement('beforeend', item5)