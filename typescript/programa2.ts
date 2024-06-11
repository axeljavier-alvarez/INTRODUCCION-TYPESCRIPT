


function calcularArea(): void {
    const base: number= parseFloat((document.getElementById('txtBase') as HTMLInputElement).value);
    const altura: number= parseFloat((document.getElementById('txtAltura') as HTMLInputElement).value);

    // totales de las areas
    const area: number = (base * altura)/2;
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;

    resultado.textContent = `El valor del area es: ${area.toFixed(2)}`;

}