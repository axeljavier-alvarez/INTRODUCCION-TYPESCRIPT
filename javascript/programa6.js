function invertir() {
    var texto = document.getElementById('txtTexto').value;
    var textoInvertido = texto.split('').reverse().join('');
    var resultado = document.getElementById('resultado');
    resultado.textContent = "Texto invertido: ".concat(textoInvertido);
}
