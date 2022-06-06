// Objetos

//const nombreProducto = "Monitor 20 pulgadas";
// const precio = 300;
// const disponible = true;

//es lo mismo de arriba pero como objeto
const producto = {
    nombreProducto : "TV Plasma",
    precio : 500,
    disponible : true,
}

console.log(producto);
// console.log(producto.precio);
// console.log(producto["precio"]);    es otra forma que ya no se utiliza mucho

// modificar objetos
producto.imagen = "imagen.jpg"; //se agrega la propiedad imagen al objeto
console.log(producto);
delete producto.disponible;
console.log(producto);

// crear variables a partir de objetos
// const nombreProducto = producto.nombreProducto;
// const precioProducto = producto.precio;

// console.log(precioProducto);
// console.log(nombreProducto);

//////Nueva forma de declarar variables a partir de las propiedades de un objeto
//////Destructuring
const {precio} = producto;
console.log(precio);
const {nombreProducto} = producto;
console.log(nombreProducto);

