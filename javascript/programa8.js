function comprobarNumero() {
    var numero = parseFloat(document.getElementById('txtNumero').value);
    var sumaDivisores = 0;
    for (var i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    var esPerfecto = numero === sumaDivisores;
    var mensaje = "El numero ".concat(numero, " ");
    if (esPerfecto) {
        mensaje += "es un número perfecto";
    }
    else {
        mensaje += "no es un número perfecto";
    }
    var resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
}
