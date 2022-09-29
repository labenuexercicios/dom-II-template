function escondeSenha(event){
    event.preventDefault()
    console.log(event);
    const inputPass = document.getElementById("password")

    inputPass.setAttribute("type","password")

}

const formulario = document.querySelector(".light")
formulario.classList.remove("light")
formulario.classList.add("dark")