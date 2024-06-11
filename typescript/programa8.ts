function comprobarNumero() : void{

    const numero: number = parseFloat((document.getElementById('txtNumero') as HTMLInputElement).value);
    let sumaDivisores = 0;
  
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        sumaDivisores += i;
      }
    }
  
    const esPerfecto: boolean = numero === sumaDivisores;
    let mensaje: string = `El numero ${numero} `;
  
    if (esPerfecto) {
      mensaje += "es un número perfecto";
    } else {
      mensaje += "no es un número perfecto";
    }
  
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;
    resultado.textContent = mensaje;

  }