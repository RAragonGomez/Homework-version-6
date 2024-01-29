function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  for (i=0;i<=array.length-1;i++){
    return array[Math.floor(Math.random()*array.length)]
  }
}

module.exports = obtenerElementoAleatorio;
