function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var resultado= arrayOfNums.reduce((acc,cv)=>acc+cv,0);
  return resultado;
}

module.exports = agregarNumeros;
