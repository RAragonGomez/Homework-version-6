function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var suma= arrayOfNumbers.reduce((acc,cv)=>acc+cv,0);
  cb(suma);
}

module.exports = sumarArray;
