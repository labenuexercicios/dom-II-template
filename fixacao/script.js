const insereItem = () =>{

    let newLegume = document.createElement("li")
    console.log(newLegume)

    // const legume = document.createTextNode("xuxu")

    // newLegume.inseriItem(legume)

    let input = document.getElementById("meu-input")
    console.log(input.value)

    // referli.insertAdjacentElement("beforebegin",newLegume)
    newLegume.innerHTML = input.value

    let referleg = document.getElementById("lista")

    referleg.insertAdjacentElement("beforeend",newLegume)

    input.value = ""
}

// inseriItem()
