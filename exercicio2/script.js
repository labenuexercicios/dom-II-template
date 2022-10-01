//pegar input

const input = document.getElementById("password")

function escondeSenha(event){//evento é o parametro comportamento do submit botao
    event.preventDefault() //nao executar o comportamento padrao // naoa tualizar a pagina com submit
     input.setAttribute("type" , "password") //
}


const form = document.getElementsByTagName('form')

console.log(form)

form[0].setAttribute('class' , 'dark') // trocar classe light para class dark

// form[0].classList.replace('class' , 'dark')

// form[0].classList.remove('light') // removendo classe light
// form[0].classList.add('dark') // adicionando classe dark


