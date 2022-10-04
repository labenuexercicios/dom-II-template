// const addItem0 = () =>{

 const addItem = document.createElement("li")
   console.log (addItem)

 const newItem = document.createTextNode("Item 0")
     console.log (newItem)

    addItem.appendChild(newItem)
    // console.log (addItem)

    const referItem = document.getElementById("lista")
  
     referItem.insertAdjacentElement("afterbegin", addItem)
  
//     }
  
//     addItem0()


const addItem5 = document.createElement("li")
console.log (addItem5)

const newItem5 = document.createTextNode("Item 5")
  console.log (newItem5)

 addItem5.appendChild(newItem5)
 // console.log (addItem)

const referItem5 = document.getElementById("lista")

  referItem5.insertAdjacentElement("beforeend", addItem5)