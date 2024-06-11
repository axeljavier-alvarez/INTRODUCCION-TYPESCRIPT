class OperacionesPoo{
    // atributos (caracteristicas = variables)
    private numero1 : number = 0;
    private numero2 : number = 0;
    private resultado : number = 0;
    // metodos (funciones)
    // metodo que permite asignar valor al atributo numero 1
    /* METODO SET */
    public asignarNumero1(valor: number){
        this.numero1 = valor;
    }
    public asignarNumero2(valor: number){
        this.numero2 = valor;
    }
    public sumar(): string {
        this.resultado = this.numero1 + this.numero2;
        return "La suma es: " + this.resultado + "\n";
    }

    public restar(): string {
        this.resultado = this.numero1 - this.numero2;
        return "La resta es: " + this.resultado + "\n";
    } 

    public multiplicar(): string {
        this.resultado = this.numero1 * this.numero2;
        return "La multiplicacion es: " + this.resultado + "\n";
    } 

    public dividir(): string {
        this.resultado = this.numero1 / this.numero2;
        return "La division es: " + this.resultado.toFixed(2) + "\n";
    } 
}
/* ------------- FINALIZA LA CLASE ----------------*/
// crear un objeto tipo OperacionesPoo = instanciar la clase Operaciones
const operacionesPoo = new OperacionesPoo();
let divDatos = document.getElementById('datos') as HTMLParagraphElement;


function obtenerDatos(){
    // asignando a los atributos del objeto los valores de los controles del formulario
    operacionesPoo.asignarNumero1(
        parseFloat((document.getElementById("txtNumero1") as HTMLInputElement).value)
    );
    operacionesPoo.asignarNumero2(
        parseFloat((document.getElementById("txtNumero2") as HTMLInputElement).value)
    );
}

// FUNCION SUMAR: 
function sumar() : void {
    obtenerDatos();
        divDatos.textContent = operacionesPoo.sumar();
}

function restar() : void {
    obtenerDatos();
        divDatos.textContent = operacionesPoo.restar();
}

function multiplicar() : void {
    obtenerDatos();
        divDatos.textContent = operacionesPoo.multiplicar();
}

function dividir() : void {
    obtenerDatos();
        divDatos.textContent = operacionesPoo.dividir();
}
  

  

