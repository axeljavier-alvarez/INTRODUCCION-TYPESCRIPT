function calcularDatos() : void {

    // declaracion de variables
    const numero1: number = parseFloat((document.getElementById('txtNumero1') as HTMLInputElement).value);
    const numero2: number = parseFloat((document.getElementById('txtNumero2') as HTMLInputElement).value);
    const numero3: number = parseFloat((document.getElementById('txtNumero3') as HTMLInputElement).value);

    // comparaciones
    let mayor: number = numero1;
    let menor: number = numero1;

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

    const resultado = document.getElementById('resultado') as HTMLParagraphElement;

    resultado.textContent = `El número mayor es: ${mayor} <br>El número menor es: ${menor}`;
}