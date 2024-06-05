// INPUTS
var inputNumero1 = document.getElementById('txtNumero1');
var inputNumero2 = document.getElementById('txtNumero2');
// BOTONES
var btnResta = document.getElementById('btnResta');
var btnMulti = document.getElementById('btnMulti');
var btnDiv = document.getElementById('btnDivi');
/* -------------------------- */
// Añadiendo eventos a botones (evento, funcion)
btnResta.addEventListener('click', restar);
btnMulti.addEventListener('click', multiplicar);
btnDiv.addEventListener('click', dividir);
// se muestra el resultado
var divResultado = document.getElementById('resultado');
// VARIABLES NUMEROS
var numero1 = 0;
var numero2 = 0;
// funciones para las diversas operaciones
function recibirValores() {
    var respuesta = 0;
    respuesta = 0;
    numero1 = parseFloat(inputNumero1.value);
    numero2 = parseFloat(inputNumero2.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 100;
    }
    return respuesta;
}
function sumar() {
    if (recibirValores() == 100) {
        // no es un
        divResultado.textContent = "Error en valores";
    }
    else {
        recibirValores();
        var suma = numero1 + numero2;
        divResultado.textContent = "La suma es: " + suma;
    }
}
function restar() {
    recibirValores();
    var resta = numero1 - numero2;
    divResultado.textContent = "La resta es: " + resta;
}
function multiplicar() {
    recibirValores();
    var multiplicacion = numero1 * numero2;
    divResultado.textContent = "La multiplicacion es: " + multiplicacion;
}
function dividir() {
    recibirValores();
    var division = numero1 / numero2;
    divResultado.textContent = "La division es: " + division;
}
