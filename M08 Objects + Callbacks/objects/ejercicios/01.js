const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
 const valorConPunto=objeto.propiedad;
 const valorConCorchetes= objeto[propiedad];
 return(valorConPunto,valorConCorchetes)
};

module.exports = obtenerValorPropiedad;
