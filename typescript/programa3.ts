function esPar(numero: number): boolean {
    return numero % 2 === 0;
}

function determinarNumero(): void {
    const numero: number = parseFloat((document.getElementById('txtNumero') as HTMLInputElement).value);
    const paridad: boolean = esPar(numero);

    const resultado = document.getElementById('resultado') as HTMLParagraphElement;
    resultado.textContent = `El número ${numero} es ${paridad ? 'par' : 'impar'}`;
}