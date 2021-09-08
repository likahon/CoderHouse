// Método .concat()

const arrayNumeros = [23, 45, 80, 23, 32, 90, 60, 12];
const marcas = ["marca", 3, "palabra", "Juani", "Nahuel"];
const otroArray = [true, false, true, 1, 0];

const nuevoArray = arrayNumeros.concat(marcas, otroArray);

console.log(nuevoArray.length);
console.log(nuevoArray);