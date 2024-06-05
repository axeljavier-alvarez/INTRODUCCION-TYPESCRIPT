
function calcularArea() {
    var base = parseFloat(document.getElementById('txtBase').value);
    var altura = parseFloat(document.getElementById('txtAltura').value);
    var area = (base * altura) / 2;
    document.getElementById("resultado").innerHTML = "El valor del area es: " + area.toFixed(2);
}
