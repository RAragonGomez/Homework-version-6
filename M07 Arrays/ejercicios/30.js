function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  numeros.sort((a,b)=>a-b)
  for (let i=0;i<numeros.length;i++){
   if(numeros[i+1]==numeros[i]){
    return numeros[i];
    break;
   }
  }
}

module.exports = encontrarElementoRepetido;