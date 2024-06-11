function contarVocales() {
    var texto = document.getElementById('txtTexto').value;
    if (texto.trim() === '') {
        alert('Ingrese un texto válido.');
        return;
    }
    var contadorVocales = 0;
    var vocales = 'aeiouá';
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        var index = vocales.indexOf(caracter);
        var esVocal = index !== -1;
        if (esVocal) {
            contadorVocales++;
        }
    }
    var resultado = document.getElementById('resultado');
    resultado.textContent = "Numero de vocales: ".concat(contadorVocales);
}
