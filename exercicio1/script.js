function addnewelement () {
    const newelement = document.createElement("li")
    const newtext = document.createTextNode("Item 0");
    newelement.appendChild(newtext);
    const pegaidbase = document.getElementById("lista")
    pegaidbase.insertAdjacentElement('afterbegin', newelement)
}

addnewelement()

function addnewelementafter (){
    const newelement = document.createElement("li")
    const newtext = document.createTextNode("Item 5");
    newelement.appendChild(newtext);
    const pegaidbase = document.getElementById("lista")
    pegaidbase.insertAdjacentElement('beforeend', newelement)
}

addnewelementafter()