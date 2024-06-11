function calcular() : void {

    const numero: number = parseFloat((document.getElementById('txtNumero') as HTMLInputElement).value);
    let factorial: number = 1;
  
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
    
    // resultado
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;
    resultado.textContent = `El factorial de ${numero} es: ${factorial.toFixed(2)}`;
    
}