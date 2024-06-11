function contarVocales(): void {
    const texto: string = (document.getElementById('txtTexto') as HTMLInputElement).value;
  
    if (texto.trim() === '') {
      alert('Ingrese un texto válido.');
      return;
    }
  
    let contadorVocales: number = 0;
    const vocales: string = 'aeiouá';
  
    for (let i = 0; i < texto.length; i++) {
      const caracter: string = texto.charAt(i);
      const index = vocales.indexOf(caracter);
      const esVocal = index !== -1;
  
      if (esVocal) {
        contadorVocales++;
      }
    }
  
    const resultado = document.getElementById('resultado') as HTMLParagraphElement;
    resultado.textContent = `Texto invertido: ${contadorVocales}`;
  }