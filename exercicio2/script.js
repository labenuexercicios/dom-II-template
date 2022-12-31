

const escondeSenha = () => {
    const input = document.getElementById('password')
    input.setAttribute('type', 'password')
}

const selectForm = document.getElementsByTagName('form')

selectForm[0].setAttribute('class', 'dark')

console.log(selectForm[0])