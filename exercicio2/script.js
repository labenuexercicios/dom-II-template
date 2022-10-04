function esconderSenha(event) {
    event.preventDefault()
    const inputSenha = document.getElementById("password")
    console.log(inputSenha)
    inputSenha.setAttribute("type", "password")
    
}

const corFormulario = document.querySelector(".light")
console.log(corFormulario)
corFormulario.classList.remove("light")
corFormulario.classList.add("dark")