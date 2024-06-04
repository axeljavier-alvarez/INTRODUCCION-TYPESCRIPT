// funcion de typescript
function sumar() {
    // forma 1
    var numero1 = parseFloat(document.getElementById("txtNumero1").value);
    // forma 2
    var numero2 = document.getElementById("txtNumero2");
    var n2 = parseFloat(numero2.value);
    // suma forma 1
    var suma = numero1 + n2;
    // suma forma 2
    var suma2 = numero1 + parseFloat(numero2.value);
    // resultado
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;
}
