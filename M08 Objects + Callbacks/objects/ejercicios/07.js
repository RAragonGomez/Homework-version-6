// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: {
        propiedad4: "valor3",
        propiedad5: "valor4",
        propiedad6: {
            propiedad7:"valor5",
            propiedad8:"valor6",
            propiedad9:"valor7"
        }
    },
    metodoAnidado: function(){
        return this.propiedad3.propiedad6.propiedad9;
    }
};

module.exports = objetoAnidado;
