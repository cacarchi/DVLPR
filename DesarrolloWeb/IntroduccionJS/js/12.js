// Objetos metodos

//"use strict"   //sirve para lanzar errores en caso de q se quiera ir en contra de una regla como por ejm freeze
const producto = {
    nombreProducto : "TV Plasma",
    precio : 500,
    disponible : true,
}
Object.freeze(producto); //no permite modificar ni borar ni crear nada el objeto
// Object.seal(producto); //solo permite modificar mpero no borrar ni crear
producto.imagen = 'imagen.jpg'; //no se agrega esta nueva propiedad en el console.log

console.log(Object.isFrozen(producto)); //devuelve true o false si está frozen o no el objeto
console.log(producto);

/////Unir 2 objetos