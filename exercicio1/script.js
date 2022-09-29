// cria um novo elemento
const novoElemnto1= document.createElement("li")
const novoElemnto2= document.createElement("li")

// cria um conteudo
const conteudo1=document.createTextNode("item 0")
const conteudo2=document.createTextNode("item 5")

// coloca o conteudo no elemento criado
novoElemnto1.appendChild(conteudo1)
novoElemnto2.appendChild(conteudo2)

const elementoPai = document.getElementById("lista")

// adciona no elemento pai o novo elemento criado mas antes do seus filhos
elementoPai.insertAdjacentElement("afterbegin", novoElemnto1)

// adciona no elemento pai o novo elemento criado mas depois do seus filhos
elementoPai.insertAdjacentElement("beforeend", novoElemnto2)