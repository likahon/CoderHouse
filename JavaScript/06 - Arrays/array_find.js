// Método .find()

const numeros = [1, 2, 3, 4, 5]

//const encontrado = numeros.find( function (elemento){ return elemento > 3 });
const encontrado = numeros.find( elemento => elemento > 3 );

console.log(encontrado);

const nombres = ["Arturo", "Sol", "Gaston"];

const encontrado2 = nombres.find(x => x == "Gaston");
console.log(encontrado2);

const encontrado3 = nombres.find(x => x == "Laura");
console.log(encontrado3);