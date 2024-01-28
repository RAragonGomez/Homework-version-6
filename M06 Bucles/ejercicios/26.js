function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  const str1Cambiado= str1.toLowerCase().replace(/\s/g,"")
  const str2Cambiado= str2.toLowerCase().replace(/\s/g,"")
  var str1Ordenado=str1Cambiado.split("").sort().join("");
  var str2Ordenado=str2Cambiado.split("").sort().join("");
  if (str1Ordenado==str2Ordenado){
    return true;
  } else {
    return false;
  }
}

module.exports = esAnagrama;
