function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
var arrayConResultados=[]
for (let i=0; i<array.length;i++){
  arrayConResultados.push(array[i]*i);
}
return arrayConResultados;
}

module.exports = multiplicarElementosPorIndice;
