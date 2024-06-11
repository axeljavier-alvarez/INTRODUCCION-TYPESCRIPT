function calcularArea() {
    var base = parseFloat(document.getElementById('txtBase').value);
    var altura = parseFloat(document.getElementById('txtAltura').value);
    // totales de las areas
    var area = (base * altura) / 2;
    var resultado = document.getElementById('resultado');
    resultado.textContent = "El valor del area es: ".concat(area.toFixed(2));
}
