function calcularPotencia() : void {
    const numero: number = parseFloat((document.getElementById('txtNumero') as HTMLInputElement).value);
    const potencia: number = parseFloat((document.getElementById('txtPotencia') as HTMLInputElement).value);

    const resultado = document.getElementById('resultado') as HTMLParagraphElement;
    
    const resultadoPotencia: number = Math.pow(numero, potencia);
    
    resultado.textContent = `El resultado de elevar ${numero} a la potencia ${potencia} es: ${resultadoPotencia}`;

}