function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length==0){
    return 0;
  } else if (arguments.length ==1){
    return arguments[0];
  }
  let multiplication=1
  for (let i=0;i<=arguments.length-1;i++){
  multiplication=multiplication*arguments[i];
}
return multiplication;

}

module.exports = multiplicarArgumentos;
