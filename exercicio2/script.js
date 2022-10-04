function escondeSenha(event) {
    event.preventDefault();
    let ipt = document.getElementById('password');
    ipt.setAttribute("type", "password")
}

const changeDarkMode = () => {
    let form = document.getElementById('forms')
    form.classList.remove("light")
    form.classList.add("dark");
}
changeDarkMode()