const container = document.getElementById('mensagem')

function checaCaps(event) {
  console.log(event)
  
  // TERNÁRIO = condiçao ? true : false
  event.key === 'Shift'
    ? (container.innerHTML = 'TECLA SHIFT')
    : (container.innerHTML = '')

  // if (event.key === 'Shift') {
  //   // key => tecla
  //   container.innerHTML = 'TECLA SHIFT'
  // } else {
  //   container.innerHTML = ''
  // }
}