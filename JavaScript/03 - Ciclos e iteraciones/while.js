/* let a = 5;

while(a < 10){
    console.log("El valor de a es " + a);
}

console.log("END"); */

/* let dato = prompt("Ingrese dato: ");

while(dato != "esc"){
    console.log("El usuario ingresó " + dato);

    dato = prompt("Ingrese dato: ");
}

console.log("END"); */


/* Tabla de Multiplicar */
let numero = parseInt(prompt("Ingrese numero"));

let i = 1;

while(i <= 10){
    let producto = numero * i;
    console.log(numero + " * " + i + " = " + producto);
    i++;
}