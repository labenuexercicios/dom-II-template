const escondeSenha = (event) => {
    event.preventDefault()
    const inputSenha = document.getElementById("password")
    inputSenha.setAttribute("type", "password")
}

const darkForm = document.querySelector(".light")
console.log (darkForm)
darkForm.classList.remove("light")
darkForm.classList.add("dark")