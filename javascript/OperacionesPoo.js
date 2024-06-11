var OperacionesPoo = /** @class */ (function () {
    function OperacionesPoo() {
        // atributos (caracteristicas = variables)
        this.numero1 = 0;
        this.numero2 = 0;
        this.resultado = 0;
    }
    // metodos (funciones)
    // metodo que permite asignar valor al atributo numero 1
    /* METODO SET */
    OperacionesPoo.prototype.asignarNumero1 = function (valor) {
        this.numero1 = valor;
    };
    OperacionesPoo.prototype.asignarNumero2 = function (valor) {
        this.numero2 = valor;
    };
    OperacionesPoo.prototype.sumar = function () {
        this.resultado = this.numero1 + this.numero2;
        return "La suma es: " + this.resultado + "\n";
    };
    OperacionesPoo.prototype.restar = function () {
        this.resultado = this.numero1 - this.numero2;
        return "La resta es: " + this.resultado + "\n";
    };
    OperacionesPoo.prototype.multiplicar = function () {
        this.resultado = this.numero1 * this.numero2;
        return "La multiplicacion es: " + this.resultado + "\n";
    };
    OperacionesPoo.prototype.dividir = function () {
        this.resultado = this.numero1 / this.numero2;
        return "La division es: " + this.resultado.toFixed(2) + "\n";
    };
    return OperacionesPoo;
}());
/* ------------- FINALIZA LA CLASE ----------------*/
// crear un objeto tipo OperacionesPoo = instanciar la clase Operaciones
var operacionesPoo = new OperacionesPoo();
var divDatos = document.getElementById('datos');
function obtenerDatos() {
    // asignando a los atributos del objeto los valores de los controles del formulario
    operacionesPoo.asignarNumero1(parseFloat(document.getElementById("txtNumero1").value));
    operacionesPoo.asignarNumero2(parseFloat(document.getElementById("txtNumero2").value));
}
// FUNCION SUMAR: 
function sumar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.sumar();
}
function restar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.restar();
}
function multiplicar() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.multiplicar();
}
function dividir() {
    obtenerDatos();
    divDatos.textContent = operacionesPoo.dividir();
}
/* console.log(operacionesPoo.sumar());
console.log(operacionesPoo.restar()); */
// agregar nuevo objeto
/*  const ope2 = new OperacionesPoo();
 ope2.asignarNumero1(750);
 ope2.asignarNumero2(854);
 console.log(ope2.sumar()); */
