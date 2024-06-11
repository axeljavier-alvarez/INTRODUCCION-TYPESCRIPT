function verificarPrimo() : void{

    const numero: number = parseFloat((document.getElementById('txtNumero') as HTMLInputElement).value);
  
    if (isNaN(numero)) {
      mostrarResultado("No es un número válido");
      return;
    }
  
    if (numero <= 1) {
      mostrarResultado(numero + " no es un número primo");
      return;
    }
  
    let esPrimo = true;
  
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
  
    mostrarResultado(esPrimo ? numero + " es un número primo" : numero + " no es un número primo");
  }
  
  function mostrarResultado(resultado: string) {
    const resultadoElement = document.getElementById('resultado') as HTMLParagraphElement;
    resultadoElement.textContent = resultado;
  }