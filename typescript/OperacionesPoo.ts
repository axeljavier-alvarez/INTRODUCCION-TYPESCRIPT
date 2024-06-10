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
        return "La suma es: " + this.resultado;
    }

    public restar(): string {
        this.resultado = this.numero1 - this.numero2;
        return "La resta es: " + this.resultado;
    }
}
/* ------------- FINALIZA LA CLASE ----------------*/
// crear un objeto tipo OperacionesPoo = instanciar la clase Operaciones
const operacionesPoo = new OperacionesPoo();
// const operaciones2 = new OperacionesPoo();

    operacionesPoo.asignarNumero1(10);
    operacionesPoo.asignarNumero2(20);
    console.log(operacionesPoo.sumar());
    console.log(operacionesPoo.restar());
    

