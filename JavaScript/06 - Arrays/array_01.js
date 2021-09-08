

const array01 = [];

const array02 = ["Arturo", "Sol", "Nicolas", "Miguel"];

const array03 = [true, 19292, "assdasd", "asdasdasd", 89.212];

const arrayNumeros = [23, 45, 80, 23, 32, 90];

console.log(array01);
console.log(array02);
console.log(array03);

let palabra = array02[3];

console.log(`El index 3 es ${palabra}`);
console.log(array02[99])

let indexSS = parseInt(prompt("Ingrese primer numero:"));
let indexTT = parseInt(prompt("Ingrese segundo numero:"));

let suma = arrayNumeros[indexSS] + arrayNumeros[indexTT];

console.log(`Suma entre index ${indexSS} (${arrayNumeros[indexSS]}) + 
                index ${indexTT} (${arrayNumeros[indexTT]}) es ${suma}`);