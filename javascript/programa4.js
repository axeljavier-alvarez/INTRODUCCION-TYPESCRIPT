function calcularDatos() {
    // declaracion de variables
    var numero1 = parseFloat(document.getElementById('txtNumero1').value);
    var numero2 = parseFloat(document.getElementById('txtNumero2').value);
    var numero3 = parseFloat(document.getElementById('txtNumero3').value);
    // comparaciones
    var mayor = numero1;
    var menor = numero1;
    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }
    if (numero2 < menor) {
        menor = numero2;
    }
    if (numero3 < menor) {
        menor = numero3;
    }
    var resultado = document.getElementById('resultado');
    resultado.textContent = "El numero mayor es: ".concat(mayor, " <br>El numero menor es: ").concat(menor);
}
