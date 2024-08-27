const calcularTablas = (numTabla, numMultiplicador) => {
    let contador1;
    let contador2;
    let resultado;

    for (contador1 = 1; contador1 <= numTabla; contador1++) {
        for (contador2 = 1; contador2 <= numMultiplicador; contador2++) {
            resultado = contador1 * contador2;
            console.log(contador1 +"x"+ contador2 +"="+resultado);
        }
    }
  
}

calcularTablas(10,10);

