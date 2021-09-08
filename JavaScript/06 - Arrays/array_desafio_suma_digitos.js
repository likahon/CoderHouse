
const numeros = [];

let numero;
do {
    numero = parseInt(prompt("Ingrese numero. Hasta llegar el 0"));
    numeros.push(numero);
} while (numero != 0);

let suma = 0;
for (const elemento of numeros) {
    suma += elemento;
}

console.log("La suma es " + suma);

