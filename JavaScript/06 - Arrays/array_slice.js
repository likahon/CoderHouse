// Método .slice()

const arrayNumeros = [23, 45, 80, 23, 32, 90, 60, 12];
const marcas = ["marca", 3, "palabra", "Juani", "Nahuel"];
const otroArray = [true, false, true, 1, 0];

const nuevoArray = marcas.slice(1, 4);
console.log(nuevoArray);

const nuevoArray02 = marcas.slice(-2);
console.log(nuevoArray02);