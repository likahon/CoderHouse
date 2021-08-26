/* for (let i = 0; i < 10; i++) {
    console.log(i);
}
 */


/* Tabla de Multiplicar */

/* let numero = parseInt(prompt("Ingrese numero"));

for(let i = 1; i <= 10; i++){
    let producto = numero * i;
    console.log(numero + " * " + i + " = " + producto);
} */


/* for(let i = 0; i < 3; i++){
    let nombre = prompt("Ingrese nombre: ");

    if(nombre == "Sol"){
        break
    }

    if(nombre == "Arturo"){
        continue
    }

    console.log("El turno de " + nombre + " es el numero " + (i+1) + ".")
}
console.log("END");

 */

for(let i = 0; i < 100; i++){
    let numero = parseInt(prompt("Ingrese el número"));

    if(numero > 42){
        console.log("Su número es mayor a 42");
        break
    }

}
console.log("Terminamos");