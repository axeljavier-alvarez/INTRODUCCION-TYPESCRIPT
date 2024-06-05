function calcularPromedio(): void {
    // declarar variables
    const numero1: number = parseFloat((document.getElementById('txtNumero1') as HTMLInputElement).value);
    const numero2: number = parseFloat((document.getElementById('txtNumero2')as HTMLInputElement).value);
    const numero3: number = parseFloat((document.getElementById('txtNumero3')as  HTMLInputElement).value);

    // hacer el promedio
    const promedio: number = (numero1 + numero2 + numero3) / 3;
     
    // convertir a 2 decimales
    document.getElementById('promedio').textContent = promedio.toFixed(2);
}

