function verificarPrimo() {
    var numero = parseFloat(document.getElementById('txtNumero').value);
    if (isNaN(numero)) {
        mostrarResultado("No es un número válido");
        return;
    }
    if (numero <= 1) {
        mostrarResultado(numero + " no es un número primo");
        return;
    }
    var esPrimo = true;
    for (var i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    mostrarResultado(esPrimo ? numero + " es un número primo" : numero + " no es un número primo");
}
function mostrarResultado(resultado) {
    var resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = resultado;
}
