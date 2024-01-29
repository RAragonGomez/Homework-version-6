function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const mesesBuscados=["Enero","Marzo","Noviembre"]
  const mesesEncontrados=[]
  for (let i=0; i<array.length; i++){
    var mesActual= array[i];
  if(mesesBuscados.includes(mesActual)){
    mesesEncontrados.push(mesActual);
  }}
  if (mesesEncontrados.length===3){
    return mesesEncontrados;
  } else{
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
