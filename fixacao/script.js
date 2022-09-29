

const lista = document.getElementById("lista");

const input = document.getElementById("meu-input")


const newLi = document.createElement("li");


function insereItem(event) {
	event.preventDefault()
	const newLiContent = document.createTextNode(input.value);
	novali.appendChild(newLiContent);
	lista.insertAdjacentElement("beforeend", newLi);
	
}










