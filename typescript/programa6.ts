function invertir() : void{
    const texto: string = (document.getElementById('txtTexto') as HTMLInputElement).value;

    const textoInvertido: string = texto.split('').reverse().join('');
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;

    resultado.textContent = `Texto invertido: ${textoInvertido}`;

  }