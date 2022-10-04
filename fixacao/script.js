//1º FORMA

//const newFood = document.getElementById('meu-input')
//const list = document.getElementById('lista');

// function insereItem(event) {
//     let newItem = document.createElement('li');
//     newItem.innerHTML = newFood.value;
//     list.insertAdjacentElement('beforeend', newItem)
// }

//2º FORMA
function insereItem(event){
    const newFood = document.getElementById('meu-input');
    const list = document.getElementById('lista');

    list.innerHTML += `<li>${newFood.value}</li>`
}