function calcularPotencia() {
    var numero = parseFloat(document.getElementById('txtNumero').value);
    var potencia = parseFloat(document.getElementById('txtPotencia').value);
    var resultado = document.getElementById('resultado');
    var resultadoPotencia = Math.pow(numero, potencia);
    resultado.textContent = "El resultado de elevar ".concat(numero, " a la potencia ").concat(potencia, " es: ").concat(resultadoPotencia);
}
