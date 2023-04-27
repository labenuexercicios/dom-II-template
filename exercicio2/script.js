// ESCONDENDO A SENHA
const inputSenha = document.getElementById('password')

const escondeSenha = (event) => {
    // previne o comportamento padrão, que nesse caso é recarregar a página assim que o botão é pressionado
    event.preventDefault()

    inputSenha.setAttribute('type', 'password')
}

// ALTERANDO A CLASSE DO FORM
const formulario = document.getElementsByTagName('form')[0]

// console.log(formulario)

formulario.classList.remove('light')

formulario.classList.add('dark')

