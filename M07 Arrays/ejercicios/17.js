function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var arraySeis= []
  for(let i=0;i<11;i++){
    var producto=6*i;
    arraySeis.push(producto);
  }
  return arraySeis;
}             

module.exports = tablaDelSeis;
