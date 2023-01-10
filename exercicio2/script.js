//criar uma função que implemente no onclick desse botão para alterar o type de text para password.


const passwordInput = document.getElementById("password");
const formulario = document.getElementById("formulario")

const escondeSenha = (event) => {
    event.preventDefault()
    passwordInput.setAttribute("type", "password")
    console.log("FUNCIONOU")
}

//mudar a classe de light para dark
formulario.classList.remove("light");
formulario.classList.add("dark");

