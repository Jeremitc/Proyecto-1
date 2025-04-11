let entrada = document.getElementById('entrada');    
function addToInput(valor) {    
    entrada.value += valor;    
}    
function clearEntry() {    
    entrada.value = '';    
}    
function deleteLast() {    
    entrada.value = entrada.value.slice(0, -1);    
}

function calculateResult() {
    try {

    entrada.value = eval(entrada.value);
    } catch (error) {
        entrada.value = 'Error';    
    }
}