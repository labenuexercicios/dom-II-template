function insereItem(event) {
    document.getElementById('lista').appendChild(document.createElement('li')).innerHTML = document.getElementById("meu-input").value
    document.getElementById("meu-input").value = ''
}