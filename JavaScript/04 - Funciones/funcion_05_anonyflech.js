/* FUNCIONES ANONIMAS */

/* const suma = function suma(a, b) { return a + b; }
const resta = function resta(a, b) { return a - b; }

console.log(suma(34, 56));
console.log(resta(99, 80)); */



/* FUNCIONES FLECHA - SIN EL FUNCTION*/

const suma =(a, b) =>{ return a + b; }

/* OTRA FORMA DE ESCRIBIRLO - SIN LAS LLAVES*/

const resta = (a, b) => a - b;

/* SIN PARENTESIS PORQUE SOLO TIENE UN PARAMETRO */

const impuesto = a => a * 0.25;

console.log(suma(34, 56));
console.log(resta(99, 80));
console.log("Impuestos de: " + impuesto(100));