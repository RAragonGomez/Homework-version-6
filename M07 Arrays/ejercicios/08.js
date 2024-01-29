function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var Even= array.filter(function(elemento){
    return elemento%2===0;
  })
  return Even;
}

module.exports = filtrarNumerosPares;
