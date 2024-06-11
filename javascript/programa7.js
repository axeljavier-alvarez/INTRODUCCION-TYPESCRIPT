function calcular() {
    var numero = parseFloat(document.getElementById('txtNumero').value);
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }
    // resultado
    var resultado = document.getElementById('resultado');
    resultado.textContent = "El factorial de ".concat(numero, " es: ").concat(factorial.toFixed(2));
}
