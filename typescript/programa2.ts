// funcion de typescript
/* function sumar(): void {
    // forma 1
    const numero1 : number = parseFloat((document.getElementById("txtNumero1") as HTMLInputElement).value);

    // forma 2
    const numero2 = document.getElementById("txtNumero2")  as HTMLInputElement;
    const n2 : number = parseFloat(numero2.value);

    // suma forma 1
    const suma : number = numero1 + n2;

    // suma forma 2
    const suma2: number = numero1 + parseFloat(numero2.value);

    // resultado
    document.getElementById("resultado").innerHTML = "La suma es: " + suma;
    
} */


function calcularArea(): void {
    const base: number= parseFloat((document.getElementById('txtBase') as HTMLInputElement).value);
    const altura: number= parseFloat((document.getElementById('txtAltura') as HTMLInputElement).value);

    const area: number = (base * altura)/2;

    document.getElementById("resultado").innerHTML = "El valor del area es: " + area.toFixed(2);



}