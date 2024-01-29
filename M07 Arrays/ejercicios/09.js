function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var HigherThanTen= array.filter((elemento)=>
  elemento>10
  )
  var number = HigherThanTen.length;
  return number;
  

}

module.exports = contarElementosMayoresA10;
