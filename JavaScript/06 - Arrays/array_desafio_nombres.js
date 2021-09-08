const listaNombres = [];
const max = 3;

do {
    let nombre = prompt("Ingrese nombre: ");
    listaNombres.push(nombre);
    console.log(listaNombres.length);

} while(listaNombres.length < max)

listaNombres.concat( [ "Sol", "Ezequiel"] );

console.log(listaNombres.join("\n"));

