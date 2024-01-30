function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
if (Array.isArray(objetoUsuario.posts)){
  return objetoUsuario.posts.reduce(function(totalLikes,post){
    if (typeof post ==="object"&& post!==null && typeof post.likes==="number"){
      return totalLikes +post.likes;
    } else {
      return totalLikes;
    }
  },0);
} else {
   return 0;
}
}

module.exports = sumarLikesDeUsuario;
