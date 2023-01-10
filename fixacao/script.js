const paragrafo = document.getElementById('lista')

function insereItem(event) {
    event.preventDefault()
    const frase = document.getElementById("meu-input").value

    const newelement = document.createElement("li")
    // newelement.appendChild(frase)
    newelement.innerHTML = frase
    // console.log(frase)
    // frase = ""

}