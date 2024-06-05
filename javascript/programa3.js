function esPar(numero) {
    return numero % 2 === 0;
}
function determinarNumero() {
    var numero = parseFloat(document.getElementById('txtNumero').value);
    var paridad = esPar(numero);
    var resultado = document.getElementById('resultado');
    resultado.textContent = "El n\u00FAmero ".concat(numero, " es ").concat(paridad ? 'par' : 'impar');
}
