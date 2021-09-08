const arrayNumeros = [23, 45, 80, 23, 32, 90, 60, 12];

let longitud = arrayNumeros.length;

let salida = "";
for (let index = 0; index < longitud; index++) {
    salida += arrayNumeros[index];

    if(index == longitud - 1) {
        break;
    }

    salida += ",";
}

console.log(salida);

const marcas = ["marca", 3, "palabra", "Juani"];

// Propiedad Length

console.log( marcas.length );
console.log( marcas[marcas.length]  )

console.log( marcas[marcas.length - 1]  )


// Método .toString()

console.log(marcas.toString());
console.log(arrayNumeros.toString());

