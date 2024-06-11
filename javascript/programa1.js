function calcularPromedio() {
    // declarar variables
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    var numero2 = parseFloat(document.getElementById('txtNumero2').value);
    var numero3 = parseFloat(document.getElementById('txtNumero3').value);
    // hacer el promedio
    var calcularPromedio = (numero1 + numero2 + numero3) / 3;
    var promedio = document.getElementById('promedio');
    promedio.textContent = "El promedio es ".concat(calcularPromedio.toFixed(2));
}
