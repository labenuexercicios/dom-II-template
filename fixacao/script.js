

    function insereItem() {
        const ulElement = document.getElementById("lista");
        const newli = document.createElement('li');
        const input = document.getElementById("meu-input");
        const liszero = document.createTextNode(input.value);
    
        newli.appendChild(liszero);
        ulElement.insertAdjacentElement('afterbegin', newli)
        
    }
    
