// INPUTS
const inputNumero1 = document.getElementById('txtNumero1') as HTMLInputElement;
const inputNumero2 = document.getElementById('txtNumero2') as HTMLInputElement;
// BOTONES
const btnResta = document.getElementById('btnResta') as HTMLButtonElement;
const btnMulti = document.getElementById('btnMulti') as HTMLButtonElement;
const btnDiv = document.getElementById('btnDivi') as HTMLButtonElement;
/* -------------------------- */
// Añadiendo eventos a botones (evento, funcion)
btnResta.addEventListener('click', restar);
btnMulti.addEventListener('click', multiplicar);
btnDiv.addEventListener('click', dividir);


// se muestra el resultado
const divResultado = document.getElementById('resultado') as HTMLParagraphElement;

// VARIABLES NUMEROS
var numero1: number = 0;
var numero2: number = 0;

// funciones para las diversas operaciones
function recibirValores() : number{
     let respuesta: number = 0;
     respuesta= 0;
     numero1  = parseFloat(inputNumero1.value);
     numero2  = parseFloat(inputNumero2.value);

     if(isNaN(numero1) || isNaN(numero2)){
        respuesta = 100;
     }

     return respuesta;
     
}
function sumar(){

    if(recibirValores()==100){
        // no es un
        divResultado.textContent = "Error en valores";
    }else{
        recibirValores();
        const suma = numero1 + numero2;
        divResultado.textContent = "La suma es: " + suma;
    }
    
}

function restar(){
    if(recibirValores()==0){


        const resta = numero1 - numero2;

        divResultado.textContent = "La resta es: " + resta;
    } else {



























































































































        




    }
  
}

function multiplicar(){
    recibirValores();
    const multiplicacion = numero1 * numero2;
    divResultado.textContent = "La multiplicacion es: " + multiplicacion;
}

function dividir(){
    recibirValores();
    const division = numero1 / numero2;
    divResultado.textContent = "La division es: " + division;
}

