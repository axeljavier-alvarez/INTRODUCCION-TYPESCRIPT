function calcularPromedio() {
    // declarar variables
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    var numero2 = parseFloat(document.getElementById('txtNumero2').value);
    var numero3 = parseFloat(document.getElementById('txtNumero3').value);
    // hacer el promedio
    var promedio = (numero1 + numero2 + numero3) / 3;
    // convertir a 2 decimales
    document.getElementById('promedio').textContent = promedio.toFixed(2);
}
