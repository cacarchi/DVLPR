//string o cadenas de texto
const producto = "Monitor 20 20 pulgadas";
// const producto2 = String("Monitor 30\"");
// const producto3 = new String ("Monitor 50 pulgadas");
const producto2 = "Monitor HD";

console.log(producto);
console.log(producto2.length);

//IndexOf => buscar una palabra en un texto y manda la posición
console.log (producto.indexOf("20"));

//Include => retorna boleano si encuentra la palabra
console.log (producto.includes("Monitor"));
