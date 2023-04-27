// Atenção segurando SHIFT  , evento ao pressionar shift

const input = document.getElementsByTagName('input')[0]
const paragrafo = document.getElementsByTagName('p')[0]

const ativaShift = (event)=>{
   
   if(event.shiftKey){

    paragrafo.innerHTML = 'Atençao: Segurando SHIFT!'
   } else{
        paragrafo.innerHTML = ''
   }
}